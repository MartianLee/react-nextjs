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

  const List = styled.div`
    margin-top: 20px;
    width: 30%;
    display: block;
  `

  const CoinWrapper = styled.div`
    text-align: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.25);
      transition: all 300ms ease-out;
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
  return (
    <List>
      <h2>CoinList</h2>
      {!!coinList && coinList.length > 0 ? coinList.map((coin, index) => (
        <CoinWrapper key={index} onClick={() => { coinSelected(index) }}>
          {/*<Coin coin={coin} />*/}
          {coin.symbol} {coin.korean_name}
        </CoinWrapper>
      )) : null}
    </List>
  )
}

export default connect(state => state)(CoinList)
