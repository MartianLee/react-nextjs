import Link from 'next/link'
import { connect } from 'react-redux'
import React from "react";
import {getBalance, loadProductDetailData} from '../../actions';
import Product from "../../components/product";
import HeaderLayout from "../../components/layout/headerLayout";
import Header from "../../components/header";
import Footer from "../../components/footer";

class ProductContainer extends React.Component {

    static async getInitialProps (props) {
        const { isServer } = props.ctx
        return { isServer }
    }

    componentDidMount () {
        this.props.dispatch(loadProductDetailData(this.props.id))
    }

    render () {
        console.log(this.props)
        return (
            <HeaderLayout auth={this.props.auth}>
                <Header title={'Squared'}/>
                {!!this.props.product.productDetailData ? `Product ID ${this.props.product.productDetailData.id}` : null}
                {!!this.props.product.productDetailData ? <Product productDetail={this.props.product.productDetailData} /> : null}
                <Footer/>
            </HeaderLayout>
        )
    }
}

export default connect(state => state)(ProductContainer)