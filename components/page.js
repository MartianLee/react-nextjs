import Link from 'next/link'
import { connect } from 'react-redux'

import Counter from './counter'
import Clock from './clock'
import Header from './header'
import Nav from '../components/nav'
import ProductList from "./ProductList";
import React from "react";

function Page ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  productData,
  title
}) {
  return (
    <div>
      <Nav url={['posts','products']}/>
      <Header title={'Squared'}/>
      <ProductList product={productData}/>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />

      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  )
}

export default connect(state => state)(Page)
