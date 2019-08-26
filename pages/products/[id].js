import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

import Page from '../../components/page'
import { loadProductDetailData } from "../../actions";

class ProductDetail extends React.Component {

    static async getInitialProps (props) {
        const { store, query, isServer } = props.ctx
        return { isServer, query }
    }

    componentDidMount () {
        this.props.dispatch(loadProductDetailData(this.props.query.id))
    }

    render () {
        console.log(this.props.query)
        return <Page title='Post {pid}' linkTo='/' NavigateTo={`product/${this.props.query.id}`} id={this.props.query.id} />
    }
}

export default withRouter(connect()(ProductDetail))
