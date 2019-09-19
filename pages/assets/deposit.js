import React from 'react'
import { connect } from 'react-redux'

// import AuthContainer from '../../containers/assets/'
import Header from '../../components/header'
import HeaderLayout from '../../components/layout/headerLayout'

class Assets extends React.Component {
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
      </HeaderLayout>
    )
  }
}

export default connect()(Assets)
