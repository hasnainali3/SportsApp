import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import InputField from '../components/TextInput'
import { navigateToHome, navigateToSignUp, navigateToForgotPassword } from 'app/navigation/NavigationHelpers';
import { Ionicons } from '@expo/vector-icons'

export default class LoginView extends Component {
    onPress = () => {
        // navigateToHome();
        this.props.onLogin('uname', 'password');
    };

    constructor(props) {
        super(props);
        this.navigateToForgot = this.navigateToForgot.bind(this);
    }

    render() {
        return (
            <ScrollView>
                    <View style={styles.backgroundContainer}/>
                <View style = {[styles.container,{paddingTop: 50, paddingBottom: 20}]} >
                    <Text style = {{color: '#555', alignSelf: 'center', fontSize: 25}}>LOGIN</Text>
                    <InputField
                        style = {{marginTop: 50}}
                        placeHolder= 'Email'
                    />
                    <InputField
                        placeHolder= 'Password'
                    />
                    <TouchableOpacity activeOpacity={0.7} style={styles.forgotPass} onPress = {this.navigateToForgot} >
                        <Text style={{fontSize: 13, color: '#555'}}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={styles.signInButton} onPress = {this.onPress} >
                        <Text style={styles.signInText}>Sign in</Text>
                    </TouchableOpacity>
                    
                    <View style={[styles.signUpText, {padding: 10}]} >
                        <Text style={{color: '#555'}}>Or</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.7} style={styles.googleSignIn} >
                        <Ionicons name="logo-google" size={20} color="white" style = {{marginLeft: 10}} />
                        <View style = {styles.line} />
                        <Text style={styles.googleSignInText}>Login with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={styles.signUpText} onPress = {() => navigateToSignUp()}>
                        <Text style={{color: '#555'}}>Dont have an account? Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

    navigateToForgot() {
        navigateToForgotPassword()
    }
}
