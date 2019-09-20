import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import createStore from '../store'
import getToken from '../util/getToken'
import { getUserInfo, addTokenToStore } from '../actions'
import Message from "../components/message";
import { getMetaCoin } from "../actions/metaActions"

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  componentDidMount () {
    this.props.store.dispatch(getMetaCoin())
    this.props.store.dispatch(getUserInfo())
  }

  render () {
    const { Component, pageProps, store } = this.props
    console.log(this.props)
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
