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

  render () {
    return (
      <div>
        <h2>SignUp</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (this.submitted && !this.username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" value={this.username}
              onChange={this.handleChange}/>
            {this.submitted && !username &&
                        <div className="help-block">Username is required</div>
            }
          </div>
          <div className={'form-group' + (this.submitted && !this.password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={this.password}
              onChange={this.handleChange}/>
            {this.submitted && !this.password &&
                        <div className="help-block">Password is required</div>
            }
          </div>
          <div className={'form-group' + (this.submitted && !this.password2 ? ' has-error' : '')}>
            <label htmlFor="password">Password Again</label>
            <input type="password" className="form-control" name="password2" value={this.password2}
              onChange={this.handleChange}/>
            {this.submitted && !this.password2 &&
                        <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            {this.loggingIn &&
                        <img
                          src="image"/>
            }
          </div>
        </form>
        <style>{` 
          article {
            margin-top: 20px;
            width: 100%;
          }
          .card {
           flex: 0 1 calc(25% - 1em);
           display: block;
          }
          .description {
            margin-top: 5px;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => state)(SignUpContainer)
