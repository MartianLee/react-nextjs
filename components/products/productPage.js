import { connect } from 'react-redux'
import React from 'react'
import Product from '../products/product'

function ProductPage ({
  product
}) {
  return (
    <div>
      {product.productDetailData ? `Product ID ${product.productDetailData.id}` : null}
      {product.productDetailData ? <Product productDetail={product.productDetailData} /> : null}
    </div>
  )
}

export default connect(state => state)(ProductPage)
