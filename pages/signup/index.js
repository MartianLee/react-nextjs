import React from 'react'
import { connect } from 'react-redux'

import SignUpContainer from '../../containers/signUpContainer'
import Header from '../../components/header'
import HeaderLayout from '../../components/layout/headerLayout'

class SignUp extends React.Component {
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
        <SignUpContainer title='SignUp Page'/>
      </HeaderLayout>
    )
  }
}

export default connect()(SignUp)
