import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/header'
import HeaderLayout from '../../components/layout/headerLayout'
import PasswordResetContainer from '../../containers/user/PasswordResetContainer'
import { getBalance } from '../../actions'

class PasswordReset extends React.Component {
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
        <PasswordResetContainer></PasswordResetContainer>
      </HeaderLayout>
    )
  }
}

export default connect()(PasswordReset)
