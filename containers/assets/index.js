import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import { loadProductDetailData } from '../../actions'
import ProductPage from '../../components/products/productPage'
import Menu from '../../components/assets/menu'
import AssetsStatus from './assetStatus'

class AssetsContainer extends React.Component {
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
        <Menu></Menu>
        <AssetsStatus/>
      </div>
    )
  }
}

export default connect(state => state)(Assets)
