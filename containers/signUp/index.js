import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import { signUp, loginSuccess, logout } from '../../actions'

class SignUpContainer extends React.Component {
  constructor (props) {
    super(props)

    // reset login status
    this.props.dispatch(logout())

    this.state = {
      username: '',
      password: '',
      password2: '',
      submitted: false,
      referCode: props.auth.friendReferCode,
      loggingIn: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const { username, password, password2 } = this.state
    const { dispatch } = this.props
    if (username && password && password2) {
      dispatch(signUp({ username, password, password2 }))
    }
  }

  componentWillUpdate (prevProps, prevState) {
    if (this.props.auth.friendReferCode && !prevState.referCode) {
      this.setState({ referCode: this.props.auth.friendReferCode})
    }
  }

  render () {
    return (
      <div>
        <h2>SignUp</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (this.submitted && !this.username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" value={this.state.username}
              onChange={this.handleChange}/>
            {this.state.submitted && !this.state.username &&
                        <div className="help-block">Username is required</div>
            }
          </div>
          <div className={'form-group' + (this.submitted && !this.password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={this.state.password}
              onChange={this.handleChange}/>
            {this.state.submitted && !this.state.password &&
                        <div className="help-block">Password is required</div>
            }
          </div>
          <div className={'form-group' + (this.submitted && !this.password2 ? ' has-error' : '')}>
            <label htmlFor="password">Password Again</label>
            <input type="password" className="form-control" name="password2" value={this.state.password2}
              onChange={this.handleChange}/>
            {this.state.submitted && !this.state.password2 &&
                        <div className="help-block">Password is required</div>
            }
          </div>
          <div className={'form-group'}>
            <label htmlFor="refer_code">Referal Code (optional)</label>
            <input type="refer_code" className="form-control" name="referCode" value={this.state.referCode}
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Sign Up</button>
            {this.loggingIn &&
              <img
                src="image"/>
            }
          </div>
        </form>
      </div>
    )
  }
}

export default connect(state => state)(SignUpContainer)
