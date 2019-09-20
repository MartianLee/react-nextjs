function getToken () {
  let user, token
  if (typeof window !== 'undefined') {
    user = JSON.parse(localStorage.getItem('user'))
    token = localStorage.getItem('token')
    console.log('we are running on the client')
    console.log(token)
    return token
  } else {
    console.log('we are running on the server')
  }
  return ''
  // export const initialState = token ? {loggedIn: true, user, accessToken: token} : {loggedIn: false, accessToken: ''}
}

export default getToken
