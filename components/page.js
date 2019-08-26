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
import Product from "./product";

function Page ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  productData,
  id,
  title,
  authReducer,
  productReducer
}) {
  return (
    <HeaderLayout auth={authReducer}>
      <Header title={'Squared'}/>
      {productReducer.productDetailData ? `Product ID ${productReducer.productDetailData.id}` : null}
      {productReducer.productDetailData ? <Product key={productReducer.productDetailData.id} product={productReducer.productDetailData} /> : null}
      <ProductList products={productReducer.productData}/>
      <Clock lastUpdate={productReducer.lastUpdate} light={productReducer.light} />
      <Counter counter={productReducer.count}/>
      <Footer/>
    </HeaderLayout>
  )
}

export default connect(state => state)(Page)
