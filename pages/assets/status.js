import React from 'react'
import { connect } from 'react-redux'

import AssetsStatus from '../../containers/assets/assetStatus'
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
        <AssetsStatus></AssetsStatus>
      </HeaderLayout>
    )
  }
}

export default connect()(Assets)
