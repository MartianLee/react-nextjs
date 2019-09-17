import Link from 'next/link'
import { connect } from 'react-redux'
import React from "react";
import { updatePassword } from '../../actions';

class PasswordUpdateContainer extends React.Component {

  static async getInitialProps (props) {
    const { isServer } = props.ctx
    return { isServer }
  }

  constructor(props) {
    super(props)
    this.state = {
      password1 : '',
      password2 : ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  updatePassword = () => {
    const { password1, password2 } = this.state;
    const { dispatch, code } = this.props;
    console.log(code)
    dispatch(updatePassword({ password1: password1, password2: password2, code}))
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
          새로운 비밀번호를 설정합니다.
        </div>
        <div>
          Password
          <input value={this.password1} onChange={this.handleChange} name='password1'/>
        </div>
        <div>
          Password Again
          <input value={this.password2} onChange={this.handleChange} name='password2'/>
        </div>
        <button onClick={this.updatePassword}>
          비밀번호 재설정
        </button>
      </div>
    )
  }
}

export default connect(state => state)(PasswordUpdateContainer)
