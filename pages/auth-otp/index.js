import React from 'react'
import { connect } from 'react-redux'

import Page from '../../components/page'
import AuthContainer from '../../containers/auth/authOtp'
import Header from '../../components/header'
import HeaderLayout from '../../components/layout/headerLayout'

class AuthOtp extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    return { isServer }
  }

  componentDidMount () {
  }

  render () {
    return (
      <HeaderLayout>
        <Header title={'Squared'}/>
        <AuthContainer title='Auth OTP Page'/>
      </HeaderLayout>
    )
  }
}

export default connect()(AuthOtp)
