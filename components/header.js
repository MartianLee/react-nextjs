import Link from 'next/link'
import { connect } from 'react-redux'
import styled from "styled-components";
import React from "react";

const HeaderDiv = styled.div`
  margin-top: 52px;
  width: 100%;
`

const Title = styled.div`
  text-align: center;
`

const TitleText = styled.h1`
  font-size: 4rem;
`

function Header ({
  title
}) {
  return (
    <HeaderDiv>
      <Title>
        <TitleText>
          {title}
        </TitleText>
      </Title>
    </HeaderDiv>
  )
}

export default connect(state => state)(Header)
