import Link from 'next/link'
import { connect } from 'react-redux'

function Nav ({
     error,
     lastUpdate,
     linkTo,
     NavigateTo,
     placeholderData,
     title
 }) {
    return (
        <div>
            <nav>
                <Link href='/'>
                    <a>홈</a>
                </Link>
                <Link href='/posts/1'>
                    <a>투자하기</a>
                </Link>
                <Link href='/posts/1'>
                    <a>대출받기</a>
                </Link>
                <Link href='/login'>
                    <a>로그인</a>
                </Link>
            </nav>
            <style jsx>{`
          div {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #333;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          nav {
            display: flex;
          }
          a {
            flex: 1;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }
        `}</style>
        </div>
    )
}

export default connect(state => state)(Nav)
