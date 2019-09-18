import { connect } from 'react-redux'
import Nav from '../nav'
import React from 'react'
import Message from "../message";
import styled from "styled-components";

const Layout = styled.div`
  padding: 5px;
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
        {this.props.children}
      </div>
    )
  }
}
export default connect(state => state)(headerLayout)
