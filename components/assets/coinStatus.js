import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

function CoinStatus ({
  coinList,
  selectedCoin
}) {
  const CoinStatus = styled.article`
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
  console.log(coinList)
  console.log(selectedCoin)

  return (
    <CoinStatus>
      Coin Status
      {coinList[selectedCoin].korean_name}
    </CoinStatus>
  )
}

export default connect(state => state)(CoinStatus)
