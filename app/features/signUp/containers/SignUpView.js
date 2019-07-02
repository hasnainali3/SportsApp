import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView, Switch } from 'react-native';
import styles from './styles';
import InputField from '../../login/components/TextInput'
import { pop, navigateToPhoneVerification } from '../../../navigation/NavigationHelpers';
import { Ionicons } from '@expo/vector-icons';

export default class SignUpView extends Component {
    onPress = () => {
        // navigateToHome();
        this.props.onLogin('uname', 'password');
    };

    render() {
        let { gdrp, line, googleSignInText, promotionContainer, promotionText, promotionSwitch, orText } = styles;
        return (
            <ScrollView>
                <View style = {styles.container} >
                <Text style = {{color: 'white', alignSelf: 'center', fontSize: 18, marginTop: 20}}>UNDISPUTED FLAG FOOTBALL LEAGUE</Text>
                    <InputField
                        placeHolder= 'Full Name'
                        style = {{marginTop: 60}}
                    />
                    
                    <InputField
                        placeHolder= 'Email'
                    />
                    
                    <TouchableOpacity style = {{alignSelf: 'flex-end', marginRight: 17, marginTop: 4}} >
                        <Text style = {gdrp} >Why We Ask?</Text>
                    </TouchableOpacity>
                    
                    <InputField
                        placeHolder= 'Password'
                    />

                    <TouchableOpacity activeOpacity={0.7} style={styles.signInButton} onPress = {navigateToPhoneVerification} >
                        <Text style={styles.signInText}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={styles.signUpText} onPress = {() => this.props.navigation.pop()} >
                        <Text>Already have account? Sign in</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.orText} >
                        <Text>Or</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.7} style={styles.googleSignIn} >
                        <Ionicons name="logo-google" size={32} color="white" style = {{marginLeft: 10}} />
                        <View style = {line} />
                        <Text style={styles.googleSignInText}>Login with Google</Text>
                    </TouchableOpacity>
                    
                    <View style = {promotionContainer} >
                        <Text style = {promotionText} >{"I would like to receive updates on New \nPromotions. New Features and offers.\nYou can unsubscribe anytime."}</Text>
                        <Switch style = {promotionSwitch} trackColor = {'#3BBBFF'} thumbColor = {'#fff'} ></Switch>
                    </View>
                    
                    <Text> </Text>
                    <Text> </Text>
                    <Text> </Text>
                </View>
            </ScrollView>
        );
    }
}
