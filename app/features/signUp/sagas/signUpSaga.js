import {put, call, delay} from 'redux-saga/effects';
import {Alert} from 'react-native';
import * as signUpActions from '../actions';
import { navigateToHome } from '../../../navigation/NavigationHelpers';

export default function* signUpAsync() {
    yield put(signUpActions.enableLoader);
    yield delay(3000);
}