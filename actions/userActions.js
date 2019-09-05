import {productConstants, userConstants} from '../constants';

import { userService } from '../services';
import { alertActions } from './';


export function signUp(user) {
    const userInfo = {email: user.username, password1: user.password, password2: user.password2}
    return { type: userConstants.SIGN_UP, user: userInfo }
}

export function login(username, password) {
    // const router = useRouter()
    //
    // return dispatch => {
    //     dispatch(request({ username }));
    //
    //     userService.login(username, password)
    //         .then(
    //             user => {
    //                 dispatch(success(user));
    //                 // return router.push('/')
    //                 // history.push('/');
    //             },
    //             error => {
    //                 dispatch(failure(error));
    //                 dispatch(alertActions.error(error));
    //             }
    //         );
    // };
    const user = {username: username, password}
    return { type: userConstants.LOGIN_REQUEST, user }
}

export function loginSuccess(auth) {
    return { type: userConstants.LOGIN_SUCCESS, auth }
}
export function loginFailure(error) {
    return { type: userConstants.LOGIN_FAILURE, error }
}

export function logout() {
    // userService.logout();
    return { type: userConstants.LOGOUT };
}

export function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}