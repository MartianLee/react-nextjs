import Nav from '../nav'
import React from 'react'

const headerLayout = ({ children, auth }) => {
  return (
    <div>
      <Nav url={['posts', 'products']} auth={auth}/>
      {children}
    </div>
  )
}

export default headerLayout
