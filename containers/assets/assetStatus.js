import { connect } from 'react-redux'
import React from 'react'
import {loadProductDetailData, logout} from '../../actions'
import CoinList from '../../components/assets/coinList'
import CoinStatus from '../../components/assets/coinStatus'
import styled from "styled-components";
import { loadAssets } from '../../actions'

const AssetStatus = styled.div`
  display: flex;
`

class AssetsStatus extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedCoin: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.coinSelected = this.coinSelected.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  componentDidMount () {
    this.props.dispatch(loadAssets(this.props.auth.access))
  }

  getAsset = () => {
    this.props.dispatch(loadAssets(this.props.auth.access))
  }

  coinSelected = (value) => {
    this.setState({ selectedCoin: value })
  }

  render () {
    return (
      <div>
      <button onClick={this.getAsset}>Get AssetStatus</button>
      <AssetStatus>
        <CoinList coinList={this.props.meta.coinList} coinSelected={this.coinSelected}></CoinList>
        {this.props.meta.coinList.length > 0 ?
          <CoinStatus selectedCoin={this.state.selectedCoin} coinList={this.props.meta.coinList} balanceList={this.props.asset.asset.coins}/> : ''}
      </AssetStatus>
      </div>
    )
  }
}

export default connect(state => state)(AssetsStatus)
