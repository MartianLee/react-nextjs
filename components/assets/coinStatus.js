import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'
import {loadAssets, sendCoins} from "../../actions";

const CoinStatusWrapper = styled.article`
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
class CoinStatus extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      sendCoinOpened: false,
      sendAmount: 0,
      sendAddress: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(loadAssets())
  }

  sendCoinViewOpened = () => {
    this.setState({ sendCoinOpened: !this.state.sendCoinOpened })
  }

  sendCoin = () => {
    let sendInfo = {
      amount: this.state.sendAmount,
      targetAddress: this.state.sendAddress
    }
    this.props.dispatch(sendCoins(sendInfo))
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render () {
    let balanceList = this.props.balanceList
    let selectedCoin = this.props.selectedCoin
    let coinList = this.props.coinList
    return (
      <CoinStatusWrapper>
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
          <Button onClick={this.sendCoinViewOpened}>출금하기</Button>
          {this.state.sendCoinOpened ?
            <div>
              <div>
                출금액 :
                <input value={this.state.sendAmount} onChange={this.handleChange} name='sendAmount'/>
              </div>
              <div>
                받을 계좌번호 :
                <input value={this.state.sendAddress} onChange={this.handleChange} name='sendAddress'/>
              </div>
              <Button onClick={this.sendCoin}>출금하기</Button>
            </div>
            : '' }

        </ButtonWrapper>
        <div>
          History
        </div>
      </CoinStatusWrapper>
    )
  }
}

export default connect(state => state)(CoinStatus)