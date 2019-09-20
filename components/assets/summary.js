import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'


const Summary = styled.article`
  margin-bottom: 20px;
`

const StaticsWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Statics = styled.div`
  border: 1px solid black;
  background-color: #eff;
  padding: 20px;
  margin-left: 20px;
  flex-grow : 1;
  text-align: center;
`
class SummaryAssets extends React.Component {
  static async getInitialProps (props) {
    const { isServer } = props.ctx
    return { isServer }
  }

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    console.log(this.props)
    return (
      <Summary>
        <StaticsWrapper>
          <Statics>
            총 보유자산
            {this.props.asset.asset.total_asset}
          </Statics>
          <Statics>
            투자 자산
            {this.props.asset.asset.invest_asset}
          </Statics>
          <Statics>
            이자 수익
            {this.props.asset.asset.interest_revenue}
          </Statics>
          <Statics>
            수익률
          </Statics>
          <Statics>
            투자 가능 금액
            {this.props.asset.asset.investmentable_asset}
          </Statics>
        </StaticsWrapper>
      </Summary>
    )
  }
}

export default connect(state => state)(SummaryAssets)
