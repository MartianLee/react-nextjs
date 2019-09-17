import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { sendVerificationSignup } from '../../../actions'

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
      <div>
        {this.props.query.code}
      </div>
    )
  }
}

export default withRouter(connect()(Verification))
