import React from 'react'
import { connect } from 'react-redux'

import {loadData, loadProductData, startClock, tickClock} from '../actions'
import Page from '../components/page'

class Index extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(tickClock(isServer))
    console.log(store.getState())
    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }

    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
    // For the loading sequence test
    this.props.dispatch(loadData())
    this.props.dispatch(loadProductData())
  }

  render () {
    return <Page title='Index Page' linkTo='/other' NavigateTo='Other Page' />
  }
}

export default connect()(Index)
