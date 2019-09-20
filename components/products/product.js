import Link from 'next/link'
import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

function Product ({
  error,
  productDetail,
  title
}) {
  if (!productDetail) {
    return {}
  }
  const Card = styled.article`
    margin-top: 20px;
    width: 100%;
    flex: 0 1 calc(25% - 1em);
    display: block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.25);
    }
  `
  const ImageWrapper = styled.div`
    text-align: center;
    img {
      max-width: 200px;
      max-height: 150px;
    }
  `

  const ProgressBarWrapper = styled.div`
    height: 7px;
    width: 100%;
    background-color: #b9b9b9; 
  `

  const ProgressBar = styled.div`
    height: 6px;
    width: 61%;
    background-color: #474747;
  `

  const Description = styled.div`
    padding: 0.8em;
    margin-top: 5px;
  `

  const ButtonWrapper = styled.div`
    text-align: center;
  `

  const Button = styled.button`
    width: 40%;
    &:not(:last-child) {
      margin-right: 10%;
    }
   `
  return (
    <Card>
      <Link prefetch href={`/products/${productDetail.id}`}>
        <div>
          <ImageWrapper>
            <img src={productDetail.thumbnail} />
          </ImageWrapper>
          <ProgressBarWrapper>
            <ProgressBar></ProgressBar>
          </ProgressBarWrapper>
          <Description>
            <div>
              {productDetail.name}
            </div>
            <ButtonWrapper>
              <Button>
                  상세보기
              </Button>
              <Button>
                  바로투자
              </Button>
            </ButtonWrapper>
          </Description>
        </div>
      </Link>
    </Card>
  )
}

export default connect(state => state)(Product)
