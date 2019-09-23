import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

function CoinStatus ({
  coinList,
  selectedCoin,
  balanceList = []
}) {
  const CoinStatus = styled.article`
    margin-top: 20px;
    width: 100%;
    display: block;
  `
  const StatusHeader = styled.div`
    margin-bottom: 30px;
  `
  const Balance = styled.div`
    float: right;
    margin-right: 20px;
  `
  const ButtonWrapper = styled.div`
    text-align: center;
  `
  const Button = styled.button`
    width: 35%;
    &:not(:last-child) {
      margin-right: 5%;
    }
   `
  return (
    <CoinStatus>
      <StatusHeader>
        <h2>Coin Status</h2>
        <Balance>
          {balanceList.length > selectedCoin ? `${balanceList[selectedCoin].amount} ${balanceList[selectedCoin].symbol}` : ''}
          <br/>
          {balanceList.length > selectedCoin ? balanceList[selectedCoin].satoshi_amount : ''}
        </Balance>
        <h4>{coinList[selectedCoin].korean_name}</h4>
      </StatusHeader>
      <ButtonWrapper>
        <Button>입금하기</Button>
        <Button>출금하기</Button>
      </ButtonWrapper>
      <div>
        History
      </div>
    </CoinStatus>
  )
}

export default connect(state => state)(CoinStatus)
