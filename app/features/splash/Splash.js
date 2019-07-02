import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { navigateToHome } from '../../navigation/NavigationHelpers';

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        setTimeout(
            () => this.props.navigation.navigate('Login'), 3000
        )
    }

    render() {
        return (
                <ImageBackground source={require('../../../assets/images/splash.jpg')} resizeMode = {"cover"} style = {{flex: 1, justifyContent: 'center'}} >
                    <Image style = {{width: 200, height: 200, alignSelf: 'center'}} resizeMode = {'contain'} source = {require('../../../assets/images/logo_real.png')} ></Image>
                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#0CA6F8',
        justifyContent: 'center',
        alignItems: 'center'
    }
})