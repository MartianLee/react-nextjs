import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { sendVerificationSignup } from '../../../actions'
import HeaderLayout from '../../../components/layout/headerLayout'
import Header from '../../../components/header'
import PasswordUpdateContainer from '../../../containers/user/PasswordUpdateContainer'

class VerifyPassword extends React.Component {
  static async getInitialProps (props) {
    const { store, query, isServer } = props.ctx
    return { isServer, query }
  }

  componentDidMount () {
    // this.props.dispatch(sendVerificationSignup(this.props.query.code))
  }

  render () {
    return (
      <HeaderLayout>
        <Header title={'Squared'}/>
        {this.props.query.code}
        <PasswordUpdateContainer code={this.props.query.code} ></PasswordUpdateContainer>
      </HeaderLayout>
    )
  }
}

export default withRouter(connect()(VerifyPassword))
