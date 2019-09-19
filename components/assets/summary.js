import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

function Product ({
  coinList
}) {
  if (!listOfCoin) {
    return {}
  }
  const List = styled.article`
    margin-top: 20px;
    width: 100%;
    display: block;
    &:hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
  `

  const ImageWrapper = styled.div`
    text-align: center;
    img {
      max-width: 200px;
      max-height: 150px;
    }
  `
  const Button = styled.button`
    width: 40%;
    &:not(:last-child) {
      margin-right: 10%;
    }
   `
  return (
    <List>
      <CoinWrapper>
        {!!products && products.length > 0 ? products.map(product => (
          <Product key={product.id} productDetail={product} />
        )) : null}
      </CoinWrapper>
    </List>
  )
}

export default connect(state => state)(Product)
