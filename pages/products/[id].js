import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import HeaderLayout from '../../components/layout/headerLayout'
import Header from '../../components/header'

import ProductContainer from '../../containers/product'

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
      <HeaderLayout>
        <Header title={'Squared'}/>
        <ProductContainer id={this.props.query.id}></ProductContainer>
      </HeaderLayout>
    )
  }
}

export default withRouter(connect()(ProductDetail))
