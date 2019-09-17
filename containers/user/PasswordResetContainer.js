import Link from 'next/link'
import { connect } from 'react-redux'
import React from "react";
import {requestPasswordReset} from '../../actions';

class PasswordResetContainer extends React.Component {

  static async getInitialProps (props) {
    const { isServer } = props.ctx
    return { isServer }
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);

  }

  requestPasswordChange = () => {
    const { email } = this.state;
    const { dispatch } = this.props;
    dispatch(requestPasswordReset({ email }))
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <div>
          비밀번호 찾기를 해봅시다
        </div>
        <input value={this.email} onChange={this.handleChange} name='email'/>
        <button onClick={this.requestPasswordChange}>
          비밀번호 재설정 요청 메일 보내기
        </button>
      </div>
    )
  }
}

export default connect(state => state)(PasswordResetContainer)
