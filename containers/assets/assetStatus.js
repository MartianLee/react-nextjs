import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import {loadProductDetailData, logout} from '../../actions'
import CoinList from '../../components/assets/coinList'
import CoinStatus from '../../components/assets/coinStatus'

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
    this.props.dispatch(loadProductDetailData(this.props.id))
  }

  coinSelected = (value) => {
    this.setState({ selectedCoin: value })
  }

  render () {
    // console.log(selectedCoin)
    return (
      <div>
        <CoinList coinList={this.props.meta.coinList} coinSelected={this.coinSelected}></CoinList>
        {this.props.meta.coinList.length > 0 ? <CoinStatus selectedCoin={this.state.selectedCoin} coinList={this.props.meta.coinList}/> : ''}
      </div>
    )
  }
}

export default connect(state => state)(AssetsStatus)
