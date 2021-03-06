import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/header'
import HeaderLayout from '../../components/layout/headerLayout'
import UserContainer from '../../containers/user'
import { getBalance } from '../../actions'

class User extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    return { isServer }
  }

  componentDidMount () {
  }

  render () {
    return (
      <HeaderLayout>
        <Header title={'Squared'}/>
        <UserContainer></UserContainer>
      </HeaderLayout>
    )
  }
}

export default connect()(User)
