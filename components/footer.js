import Link from 'next/link'
import { connect } from 'react-redux'
import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 30px;
`

const Info = styled.div`
  text-align: center;
`

function Footer ({
}) {
  return (
    <FooterDiv>
      <Info>
        (주)파인브릿지: 홍길동  사업자등록번호: aaa-aa-aaaaa  주소: 서울시 스타트구 로켓동 우주선로  E-mail: help@finebridge.com
      </Info>
    </FooterDiv>
  )
}

export default connect(state => state)(Footer)
