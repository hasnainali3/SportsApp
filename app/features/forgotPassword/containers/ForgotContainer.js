import React, {Component} from 'react';
import ForgotView from './ForgotView';
import { ImageBackground, Dimensions, View, Text } from 'react-native'
import {
    Header,
    Left,
    Body,
    Title,
    Button,
    Container,
    Content,
    Right,
    Tabs,
    Tab
  } from "native-base";
import NavBarButton from '../../../components/Button/NavBarButton';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class ForgotContainer extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <ImageBackground style={{flex: 1}} source={require('../../../../assets/images/splash.jpg')}>
              <Header transparent iosBarStyle="light-content">
                <Left style={{ flex: 1, paddingLeft: 10 }}>
                    <Button transparent onPress={()=> this.props.navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={30} color="#fff" />
                    </Button>
                </Left>
                <Body style={{ flex: 1, justifyContent: "center" }}>
                  
                </Body>
                <Right style={{ flex: 1 }}>
                  
                </Right>
              </Header>
                <ForgotView></ForgotView>
            </ImageBackground>
        )
    }
}