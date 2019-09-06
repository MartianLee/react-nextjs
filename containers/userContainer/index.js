import Link from 'next/link'
import { connect } from 'react-redux'
import React from "react";
import {getBalance, createWallet, loadProductDetailData, logout} from '../../actions';
import Product from "../../components/product";
import HeaderLayout from "../../components/layout/headerLayout";
import Header from "../../components/header";
import Footer from "../../components/footer";

class UserContainer extends React.Component {

    static async getInitialProps (props) {
        const { isServer } = props.ctx
        return { isServer }
    }

    getBalance() {
        this.props.dispatch(getBalance(this.props.user))
    }

    createWallet() {
        this.props.dispatch(createWallet(this.props.user))
    }

    componentDidMount () {
        this.getBalance()
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <div>
                    User Info
                    <p> Your wallet address is { this.props.wallet.address ? this.props.wallet.address : '' } </p>
                    <p> You have { this.props.wallet.balance ? this.props.wallet.balance : 0 } Satoshi in your wallet. </p>
                </div>
                <button onClick={() => this.props.dispatch(createWallet(this.props.user))}>
                    Create Wallet
                </button>
                <button>
                    Put My Coin to Wallet
                </button>
            </div>
        )
    }
}

export default connect(state => state)(UserContainer)
