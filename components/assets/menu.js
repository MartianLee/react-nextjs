import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

function Menu ({
}) {
  const Menu = styled.article`
    width: 10%;
  `

  const ButtonWrapper = styled.button`
    width: 100%;
    background-color: #eee;
    margin-bottom: 20px;
   `
  return (
    <Menu>
      <ButtonWrapper>
        <Link href='/assets/status'>
          <button>
            자산 현황
          </button>
        </Link>
      </ButtonWrapper>
      <ButtonWrapper>
        <Link href='/assets/history'>
          <button>
          투자 내역
          </button>
        </Link>
      </ButtonWrapper>
      <ButtonWrapper>
        <Link href='/assets/deposit'>
          <button>
            입출금내역
          </button>
        </Link>
      </ButtonWrapper>
    </Menu>
  )
}

export default connect(state => state)(Product)
