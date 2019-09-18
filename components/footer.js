import Link from 'next/link'
import { connect } from 'react-redux'

function Footer ({
}) {
  return (
    <div className='footer'>
      <div className='info'>
                (주)파인브릿지: 홍길동  사업자등록번호: aaa-aa-aaaaa  주소: 서울시 스타트구 로켓동 우주선로  E-mail: help@finebridge.com
      </div>
      <style jsx>{`
          .footer {
            width: 100%;
            background-color: #333;
            color: #fff;
            padding: 30px;
          }
          .info {
              text-align: center;
            }
            h1 {
              font-size: 4rem;
            }
        `}</style>
    </div>
  )
}

export default connect(state => state)(Footer)
