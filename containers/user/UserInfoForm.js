import Link from 'next/link'
import { connect } from 'react-redux'
import React from "react";
import {updateUserInfo} from '../../actions';

class UserInfoForm extends React.Component {

  static async getInitialProps (props) {
    const { isServer } = props.ctx
    return { isServer }
  }

  constructor(props) {
    super(props)
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  updateUserInfo = () => {
    const { password } = this.state;
    const { dispatch } = this.props;
    dispatch(updateUserInfo({password}))
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
          Password :
          <input value={this.password} onChange={this.handleChange} name='password'/>
        </div>
        <button onClick={this.updateUserInfo}>
          수정하기
        </button>
      </div>
    )
  }
}

export default connect(state => state)(UserInfoForm)
