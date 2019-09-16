import React from 'react'

const toastMessage = ({ toast }) => {
  return (
    <div>
      {toast.contents}
    </div>
  )
}

export default toastMessage
