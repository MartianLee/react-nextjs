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
      password: '',
      firstName: this.props.auth.user.first_name,
      lastName: this.props.auth.user.last_name
    };
    this.handleChange = this.handleChange.bind(this);
  }

  updateUserInfo = () => {
    const { password, firstName, lastName } = this.state;
    const { dispatch } = this.props;
    console.log({password, first_name: firstName, last_name: lastName})
    dispatch(updateUserInfo({user: {password, first_name: firstName, last_name: lastName},
                                  token: this.props.auth.access}))
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
          <input type="password" value={this.password} onChange={this.handleChange} name='password'/>
        </div>
        <div>
          Last Name (성) :
          <input value={this.lastName} onChange={this.handleChange} name='lastName'/>
        </div>
        <div>
          First Name (이름) :
          <input value={this.firstName} onChange={this.handleChange} name='firstName'/>
        </div>
        <button onClick={this.updateUserInfo}>
          수정하기
        </button>
      </div>
    )
  }
}

export default connect(state => state)(UserInfoForm)
