function getToken () {
  let user, token
  if (typeof window !== 'undefined') {
    user = JSON.parse(localStorage.getItem('user'))
    token = localStorage.getItem('token')
    return token
  }
  return ''
  // export const initialState = token ? {loggedIn: true, user, accessToken: token} : {loggedIn: false, accessToken: ''}
}

export default getToken
