import Link from 'next/link'
import { connect } from 'react-redux'
import React from "react";
import {getBalance, createWallet, sendCoins, loadProductDetailData, getUserInfo} from '../../actions';
import UserInfoForm from './UserInfoForm'

class UserContainer extends React.Component {

    static async getInitialProps (props) {
        const { isServer } = props.ctx
        return { isServer }
    }

    constructor(props) {
        super(props)
        this.state = {
            address: '',
            amount: 0,
            isItModifying: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    getBalance() {
        this.props.dispatch(getBalance(this.props.user))
    }

    createWallet() {
        this.props.dispatch(createWallet(this.props.user))
    }

    sendCoinToOtherWallet = () => {
        const { address, amount } = this.state;
        const { dispatch } = this.props;
        dispatch(sendCoins({address, amount: parseInt(amount)}))
    }

    changeForm = () => {
        console.log(this.state.isItModifying)
        this.setState({ isItModifying: !this.state.isItModifying })
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    componentDidMount () {
        // this.getBalance()
    }

    render () {
        return (
            <div>
                <div>
                    User Info
                    <p>
                        You are {this.props.auth.user ? this.props.auth.user.id : ''}
                    </p>
                    <p>
                        Your Name is {this.props.auth.user ? `${this.props.auth.user.firstName} ${this.props.auth.user.lastName}` : ''}
                    </p>
                    <p> Your wallet address is { this.props.wallet.address ? this.props.wallet.address : '' } </p>
                    <p> You have { this.props.wallet.balance ? this.props.wallet.balance : 0 } Satoshi in your wallet. </p>
                </div>
                <button onClick={this.changeForm}>
                    내 정보 수정하기
                </button>
                <br/>
                { this.state.isItModifying }
                { !!this.state.isItModifying ? <UserInfoForm></UserInfoForm> : '' }
                <button onClick={() => this.props.dispatch(createWallet(this.props.user))}>
                    Create Wallet
                </button>
                <div>
                    To :
                    <input value={this.addressTo} onChange={this.handleChange} name='address'/>
                    <br/>
                    Amount(Satoshi >= 2730) :
                    <input value={this.amount} onChange={this.handleChange} name='amount' pattern="[0-9]*"/>
                    <button onClick={this.sendCoinToOtherWallet}>
                        Send Coins
                    </button>
                    {this.props.wallet.sendingCoins ? '코인 전송중' : ''}
                </div>
            </div>
        )
    }
}

export default connect(state => state)(UserContainer)
