import React from 'react'
import { connect } from 'react-redux'

import Page from '../../components/page'
import LoginContainer from '../../containers/login'
import Header from '../../components/header'
import HeaderLayout from '../../components/layout/headerLayout'
import Link from "next/link";

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
        <Link href='/user/password_reset'><a>비밀번호 찾기</a></Link>
        <Link href='/auth-otp'>
          <a> OTP </a>
        </Link>
        <Link href='/signup'>
          <a> 회원가입 </a>
        </Link>
      </HeaderLayout>
    )
  }
}

export default connect()(Login)
