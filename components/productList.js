import Link from 'next/link'
import { connect } from 'react-redux'
import Product from './product'
import React from "react";

function ProductList  ({
     error,
     lastUpdate,
     light,
     linkTo,
     NavigateTo,
     productData,
     title
 }) {
    return (
        <div>
            <section className="cards">
            {!!productData ?  productData.map(product => (
                <Product product={product} />
            )) : null}
            </section>
            <style jsx>{` 
          .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          div {
            margin-top: 50px;
            width: 100%;
          }
        `}</style>
        </div>
    )
}

export default connect(state => state)(ProductList)