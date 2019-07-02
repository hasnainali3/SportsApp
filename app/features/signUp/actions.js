/**
 * Reducer action related with signup
 */

import * as types from './actionTypes';

export function requestSignUp(fullName, username, password ) {
    return {
        type: types.SIGNUP_REQUEST,
        fullName: fullName,
        username: username,
        password: password
    };
}


export function signUpFailed() {
    return {
        type: types.SIGNUP_FAILED
    };
}

export function onSignUpResponse(response) {
    return {
        type: types.SIGNUP_RESPONSE,
        response
    }
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    };
}