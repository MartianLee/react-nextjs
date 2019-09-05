import { userConstants } from '../constants';

export const initialState = { loggedIn: false, accessToken: ''}

export function auth (state = initialState, action) {
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
                    id: action.auth.username
                },
                access: action.auth.access,
                refresh: action.auth.refresh
            }
        case userConstants.LOGIN_FAILURE:
            return {}
        case userConstants.LOGOUT:
            return {
                loggedIn: false,
                user: {},
                token: null
            }
        default:
            return state
    }
}

