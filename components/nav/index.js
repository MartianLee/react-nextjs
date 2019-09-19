import Link from 'next/link'
import { connect } from 'react-redux'
import Login from './login'
import { Router } from 'next/router'
import { logout } from '../../actions'

function Nav ({
  error,
  lastUpdate,
  linkTo,
  NavigateTo,
  placeholderData,
  title,
  dispatch,
  auth
}) {
  return (
    <div className="navigation">
      <nav>
        <Link href='/'>
          <a>홈</a>
        </Link>
        <Link href='/posts/1'>
          <a>투자하기</a>
        </Link>
        <Link href='/assets/status'>
          <a>나의 자산</a>
        </Link>
        <Link href='/user'>
          <a>내 정보 </a>
        </Link>
        <Login auth={auth}></Login>
        <div className="logout" onClick={() => dispatch(logout())}>
                    로그아웃
        </div>
      </nav>
      <style jsx>{`
          .navigation {
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
          a, .logout {
            flex: 1;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            cursor: pointer;
          }
        `}</style>
    </div>
  )
}

export default connect(state => state)(Nav)
