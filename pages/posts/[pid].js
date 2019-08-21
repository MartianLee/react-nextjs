import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

import Page from '../../components/page'

class Other extends React.Component {

    static async getInitialProps (props) {
        const { store, isServer } = props.ctx
        console.log(props.query)
        return { isServer }
    }

    componentDidMount () {

    }

    render () {
        return <Page title='Post {pid}' linkTo='/' NavigateTo='post/{pid}' />
    }
}

export default withRouter(connect()(Other))
