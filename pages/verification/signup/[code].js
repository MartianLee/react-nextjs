import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { sendVerificationSignup } from '../../../actions'
import Header from "../../../components/header";
import UserContainer from "../../../containers/user";
import HeaderLayout from "../../../components/layout/headerLayout";

class Verification extends React.Component {
  static async getInitialProps (props) {
    const { store, query, isServer } = props.ctx
    return { isServer, query }
  }

  componentDidMount () {
    console.log(this.props)
    this.props.dispatch(sendVerificationSignup(this.props.query.code))
  }

  render () {
    console.log(this.props)
    return (
      <HeaderLayout auth={this.props.auth}>
        <Header title={'Squared'}/>
        {this.props.query.code}
      </HeaderLayout>

    )
  }
}

export default withRouter(connect()(Verification))
