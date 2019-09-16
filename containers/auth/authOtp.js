import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import { startOtp, sendOtp } from '../../actions'

class AuthContainer extends React.Component {
  static async getInitialProps (props) {
    const { isServer } = props.ctx
    return { isServer }
  }

  constructor (props) {
    super(props)

    this.state = {
      otpValue: '',
      otpStarted: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  startOtp () {
    this.props.dispatch(startOtp())
  }

  sendOtp () {
    this.props.dispatch(sendOtp())
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  componentDidMount () {
    this.startOtp()
  }

  render () {
    return (
      <div>
        <div>
          1차 인증 Google OTP
        </div>
        <div>
          Enter OTP
          <input value={this.otpValue} onChange={this.handleChange} name='amount' pattern="[0-9]*" length='6' />
          <button onClick={this.sendOtp}>
            Send OTP
          </button>
          {this.props.wallet.sendingCoins ? 'OTP 전송중' : ''}
        </div>
      </div>
    )
  }
}

export default connect(state => state)(AuthContainer)
