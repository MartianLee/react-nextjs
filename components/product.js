import Link from 'next/link'
import { connect } from 'react-redux'
import React from "react";

function Product  ({
   error,
   lastUpdate,
   light,
   linkTo,
   NavigateTo,
   product,
   title
}) {
    if(!product){
        return {}
    }
    return (
        <article className="card">
          <Link href={`/products/${product.id}`}>
              <div>
              <img src={product.thumbnailUrl} />
              <div className="description">
                {product.title}
              </div>
              </div>
          </Link>
          <style jsx>{`
          article {
            margin-top: 20px;
            width: 100%;
          }
          .card {
           flex: 0 1 calc(25% - 1em);
           display: block;
          }
          .description {
            margin-top: 5px;
          }
        `}</style>
        </article>
    )
}

export default connect(state => state)(Product)
