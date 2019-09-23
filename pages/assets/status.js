import React from 'react'
import { connect } from 'react-redux'
import { Router } from 'next/router'

import AssetsStatus from '../../containers/assets/assetStatus'
import Header from '../../components/header'
import HeaderLayout from '../../components/layout/headerLayout'
import Summary from "../../components/assets/summary";
import Menu from "../../components/assets/menu";

class Assets extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    return { isServer }
  }

  componentDidMount () {
    // console.log(this.store)
    // if(!this.props.auth.loggedIn) {
    //   errorMessage('You have to login !')
    //   Router.push('/')
    // }
  }

  render () {
    return (
      <HeaderLayout>
        <Header title={'Squared'}/>
        <Summary></Summary>
        <Menu></Menu>
        <AssetsStatus></AssetsStatus>
      </HeaderLayout>
    )
  }
}

export default connect()(Assets)
