import React from 'react'
import { connect } from 'react-redux'

import Page from '../../components/page'
import LoginContainer from '../../containers/loginContainer'
import Header from "../../components/header";
import HeaderLayout from "../../components/layout/headerLayout";

class Login extends React.Component {
    static async getInitialProps (props) {
        const { store, isServer } = props.ctx
        return { isServer }
    }

    componentDidMount () {
    }

    render () {
        return (
            <HeaderLayout auth={this.props.auth}>
                <Header title={'Squared'}/>
                <LoginContainer title='Login Page'/>
            </HeaderLayout>
        )
    }
}

export default connect()(Login)
