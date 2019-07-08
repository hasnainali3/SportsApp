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
        return (
            <Container style={{ flex: 1, backgroundColor: '#fff' }} >
                <Header transparent iosBarStyle="light-content" style={{backgroundColor:'rgb(219,168,65)'}}>
                    <Left style={{ flex: 1 }}>
                        {/* <Text style={{ textAlign: 'left', fontWeight: '800', fontSize: 30, marginLeft: 20, color: "#333" }} >Sign in</Text> */}
                    </Left>
                    <Body style={{ flex: 1, justifyContent: "center" }}>

                    </Body>
                    <Right style={{ flex: 1 }}>

                    </Right>
                </Header>
                <LoginView {...this.props} />
            </Container>)
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
