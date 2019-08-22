import React from 'react'
import { connect } from 'react-redux'

import Page from '../../components/page'
import LoginContainer from '../../containers/loginContainer'

class Login extends React.Component {
    static async getInitialProps (props) {
        const { store, isServer } = props.ctx
        return { isServer }
    }

    componentDidMount () {
    }

    render () {
        return <LoginContainer title='Login Page'/>
    }
}

export default connect()(Login)
