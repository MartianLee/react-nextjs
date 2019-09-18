import React from 'react'
import Link from 'next/link'

function checkLogin (auth) {
  if (!!auth.loggedIn && !!auth.user) {
    return (
      <div>
        <div className='login'>
          {auth.user.id}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Link href='/login'>
          <div className='login'>
                    로그인
          </div>
        </Link>
      </div>
    )
  }
}

function Login ({ auth }) {
  return (
    <div>
      {checkLogin(auth)}
      <style jsx>{`
          div, a, .login {
            flex: 1;
            color: white !important;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            cursor: pointer;
          }
        `}</style>
    </div>
  )
}

export default Login
