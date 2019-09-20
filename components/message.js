import { connect } from 'react-redux'
import React from 'react'
import styled from "styled-components";

const Message = styled.div`
  position: fixed;
  z-index: 1000;
  top: 10px;
  width: 70%;
  margin-left: 15%;
  transition: all 300ms ease-out;
`
const MessageText = styled.div`
  text-align: center;
  padding: 10px;
  background-color: #fff;
`

class message extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Message>
        <MessageText>
          {this.props.alert.message}
        </MessageText>
      </Message>
    )
  }
}

export default connect(state => state)(message)
