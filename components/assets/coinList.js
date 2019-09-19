import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

function CoinList ({
  coinList,
  coinSelected
}) {
  if (!coinList) {
    return {}
  }

  const List = styled.article`
    margin-top: 20px;
    width: 100%;
    display: block;
  `

  const CoinWrapper = styled.div`
    text-align: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
  `
  const Button = styled.button`
    width: 40%;
    &:not(:last-child) {
      margin-right: 10%;
    }
   `
  const Coin = styled.div`
    border: 1px solid black;
  `
  console.log(coinList)

  const clicked = (e) => {
    const { name, value } = e.target
  }

  return (
    <List>
      CoinList
      {!!coinList && coinList.length > 0 ? coinList.map((coin, index) => (
        <CoinWrapper key={index} onClick={clicked} name={index} value={index}>
          {/*<Coin coin={coin} />*/}
          {coin.symbol} {coin.korean_name}
        </CoinWrapper>
      )) : null}
    </List>
  )
}

export default connect(state => state)(CoinList)
