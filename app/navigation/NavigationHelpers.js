/*
 * Actions related with navigation
 * Every navigation action should be defined here
 * Avoid using this.props.navigation inside the code
 */
import NavigationService from './NavigationService';

export function navigateToHome(params) {
    NavigationService.navigate('Home', params);
}

export function navigateToSplash(params) {
    NavigationService.navigate('Splash', params);
}

export function navigateToLogin(params) {
    NavigationService.navigate('Login', params);
}

export function navigateToSlider(params) {
    NavigationService.navigate('Slider', params);
}

export function navigateToSignUp(params) {
    NavigationService.navigate('SignUp', params);
}

export function navigateToForgotPassword(params) {
    NavigationService.navigate('ForgetPassword', params);
}

export function navigateToPhoneVerification(params) {
    NavigationService.navigate('PhoneVerification', params);
}