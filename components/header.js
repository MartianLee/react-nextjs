import Link from 'next/link'
import { connect } from 'react-redux'

function Header ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  title
}) {
  return (
    <div>
      <div className='title'>
        <h1>{title}</h1>
      </div>
      <style jsx>{`
          div {
            margin-top: 50px;
            width: 100%;
          }
          .title {
              text-align: center;
            }
            h1 {
              font-size: 4rem;
            }
        `}</style>
    </div>
  )
}

export default connect(state => state)(Header)
