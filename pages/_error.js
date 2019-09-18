import React from 'react'
import Header from "../components/header";
import AuthContainer from "../containers/auth/authOtp";
import HeaderLayout from "../components/layout/headerLayout";

class Error extends React.Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    return (
      <HeaderLayout>
        <Header title={'Error Page'}/>
        <p>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : '잘못된 페이지에 접근하었습니다!'}
        </p>
      </HeaderLayout>
    )
  }
}

export default Error
