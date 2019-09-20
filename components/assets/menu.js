import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

function Menu ({
}) {
  const Menu = styled.article`
    width: 10%;
  `

  const ButtonWrapper = styled.div`
    width: 100%;
    background-color: #eee;
    padding: 5px 25px;
    margin-bottom: 20px;
   `
  return (
    <Menu>
      <ButtonWrapper>
        <Link href='/assets/status'>
          <div>
            자산 현황
          </div>
        </Link>
      </ButtonWrapper>
      <ButtonWrapper>
        <Link href='/assets/history'>
          <div>
          투자 내역
          </div>
        </Link>
      </ButtonWrapper>
      <ButtonWrapper>
        <Link href='/assets/deposit'>
          <div>
            입출금내역
          </div>
        </Link>
      </ButtonWrapper>
    </Menu>
  )
}

export default connect(state => state)(Menu)
