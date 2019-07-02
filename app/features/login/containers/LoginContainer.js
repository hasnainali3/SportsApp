import React, { Component } from 'react';
import { ImageBackground, Dimensions, View, Text } from 'react-native'
import LoginView from './LoginView';
import { connect } from 'react-redux';
import * as loginActions from '../actions';
import { getLoginState } from '../selectors';
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

const { height, width } = Dimensions.get("window");

class LoginContainer extends Component {
    render() {
        return <ImageBackground style={{flex: 1}} source={require('../../../../assets/images/splash.jpg')}>
              <Header transparent iosBarStyle="light-content" hasTabs>
                <Left style={{ flex: 1 }}>
                    <Text style={{textAlign:'left', fontWeight:'800', fontSize:30, marginLeft:20, color: "#fff"}} >Sign in</Text>
                </Left>
                <Body style={{ flex: 1, justifyContent: "center" }}>
                  
                </Body>
                <Right style={{ flex: 1 }}>
                  
                </Right>
              </Header>
            <LoginView {...this.props} />
        </ImageBackground>
    }
}

function mapStateToProps(state) {
    return {
        status: getLoginState(state)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
