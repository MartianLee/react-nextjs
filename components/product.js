import Link from 'next/link'
import { connect } from 'react-redux'
import React from "react";

function Product  ({
   error,
   lastUpdate,
   light,
   linkTo,
   NavigateTo,
   productDetail,
   title
}) {
    if(!productDetail){
        return {}
    }
    return (
        <article className="card">
          <Link prefetch href={`/products/${productDetail.id}`}>
            <div>
              <div className="image-wrapper">
                <img src={productDetail.thumbnailUrl} />
              </div>
              <div className="progress-bar-wrapper">
                  <div className="progress-bar">
                  </div>
              </div>
              <div className="description">
                <div>
                  {productDetail.title}
                </div>
                  <div className="button-wrapper">
                <button className="button">
                  상세보기
                </button>
                <button className="button">
                  바로투자
                </button>
                  </div>
              </div>
            </div>
          </Link>
          <style jsx>{`
          article {
            margin-top: 20px;
            width: 100%;
          }
          .progress-bar-wrapper{
            height: 6px;
            width: 100%;
            background-color: #b9b9b9; 
          }
          .progress-bar {
            height: 6px;
            width: 61%;
            background-color: #474747;
          }
          .button-wrapper {
            text-align: center;
          }
          button {
            width: 35%;
          }
          button:not(last-child) {
            margin-right: 10%;
          }
          .card {
           flex: 0 1 calc(25% - 1em);
           display: block;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }
          .card:hover {
            box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.25);
          }
          .image-wrapper {
            text-align: center;
          }
          .description {
            padding: 0.8em;
            margin-top: 5px;
          }
        `}</style>
        </article>
    )
}

export default connect(state => state)(Product)
