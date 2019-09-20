import { connect } from 'react-redux'

import HeaderLayout from './layout/headerLayout'
import Header from './header'
import ProductList from './products/productList'
import React from 'react'

function Page ({
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
