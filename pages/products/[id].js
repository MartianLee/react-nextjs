import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

import Page from '../../components/page'
import { loadProductDetailData, getBalance } from '../../actions'
import Header from '../../components/header'
import Product from '../../components/products/product'
import ProductList from '../../components/products/productList'
import Clock from '../../components/clock'
import Counter from '../../components/counter'
import Footer from '../../components/footer'
import HeaderLayout from '../../components/layout/headerLayout'

import ProductContainer from '../../containers/productContainer'

class ProductDetail extends React.Component {
  static async getInitialProps (props) {
    const { store, query, isServer } = props.ctx
    return { isServer, query }
  }

  componentDidMount () {
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <ProductContainer id={this.props.query.id}></ProductContainer>
      </div>
    )
    // <Page title='Post {pid}' linkTo='/' NavigateTo={`product/${this.props.query.id}`} id={this.props.query.id} />
  }
}

export default withRouter(connect()(ProductDetail))
