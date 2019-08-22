import Link from 'next/link'
import { connect } from 'react-redux'

import HeaderLayout from './layout/headerLayout'
import Counter from './counter'
import Clock from './clock'
import Header from './header'
import Nav from '../components/nav'
import ProductList from "./productList";
import Footer from "./footer"
import React from "react";

function Page ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  productData,
  id,
  title
}) {
  return (
    <HeaderLayout>
      <Header title={'Squared'}/>
      {id ? `Product ID ${id}` : null}
      <ProductList product={productData}/>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter/>
      <Footer/>
    </HeaderLayout>
  )
}

export default connect(state => state)(Page)
