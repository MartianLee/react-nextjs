import Link from 'next/link'
import { connect } from 'react-redux'

import HeaderLayout from './layout/headerLayout'
import Counter from './counter'
import Clock from './clock'
import Header from './header'
import Nav from '../components/nav'
import ProductList from './products/productList'
import Footer from './footer'
import React from 'react'
import Product from './products/product'

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
      {product.productDetailData ? `Product ID ${product.productDetailData.id}` : null}
      <ProductList products={product.productData}/>
    </HeaderLayout>
  )
}

export default connect(state => state)(Page)
