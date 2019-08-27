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
  auth,
  product
}) {
  return (
    <HeaderLayout auth={auth}>
      <Header title={'Squared'}/>
      {!!product.productDetailData ? `Product ID ${product.productDetailData.id}` : null}
      {!!product.productDetailData ? <Product productDetail={product.productDetailData} /> : null}
      <ProductList products={product.productData}/>
      <Clock lastUpdate={product.lastUpdate} light={product.light} />
      <Counter counter={product.count}/>
      <Footer/>
    </HeaderLayout>
  )
}

export default connect(state => state)(Page)
