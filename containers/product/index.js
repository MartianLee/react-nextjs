import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import { loadProductDetailData } from '../../actions'
import ProductPage from '../../components/products/productPage'

class ProductContainer extends React.Component {
  static async getInitialProps (props) {
    const { isServer } = props.ctx
    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(loadProductDetailData(this.props.id))
  }

  render () {
    return (
      <div>
        <ProductPage/>
      </div>
    )
  }
}

export default connect(state => state)(ProductContainer)
