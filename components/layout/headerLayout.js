import { connect } from 'react-redux'
import Nav from '../nav'
import React from 'react'
import Message from "../message";
import styled from "styled-components";
import Footer from "../footer";

const MainComponent = styled.div`
  min-height: calc( 100vh - 52px )
`

class headerLayout extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        { this.props.alert.status ? <Message/> : '' }
        <Nav url={['posts', 'products']} auth={this.props.auth}/>
        <MainComponent>
          {this.props.children}
        </MainComponent>
        <Footer></Footer>
      </div>
    )
  }
}
export default connect(state => state)(headerLayout)
