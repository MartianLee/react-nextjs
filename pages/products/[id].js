import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

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
      <div>
        <ProductContainer id={this.props.query.id}></ProductContainer>
      </div>
    )
    // <Page title='Post {pid}' linkTo='/' NavigateTo={`product/${this.props.query.id}`} id={this.props.query.id} />
  }
}

export default withRouter(connect()(ProductDetail))
