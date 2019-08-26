import { userConstants } from '../constants';

let user
if (typeof window !== 'undefined') {
    user = JSON.parse(localStorage.getItem('user'))
    console.log('we are running on the client')
} else {
    console.log('we are running on the server');
}
export const authState = user ? { loggedIn: true, user, accessToken: '' } : {}

export function authReducer (state = authState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            }
        case userConstants.LOGIN_SUCCESS:
            console.log(action)
            return {
                loggedIn: true,
                user: {
                    id: action.auth.id
                },
                token: action.auth.token
            }
        case userConstants.LOGIN_FAILURE:
            return {}
        case userConstants.LOGOUT:
            return {}
        default:
            return state
    }
}

