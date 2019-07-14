import React, { Component } from "react";
import { ImageBackground, Dimensions, View, Text } from "react-native";
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
import SignUpView from "./SignUpView";
import Ionicons from "@expo/vector-icons/Ionicons";

const { height, width } = Dimensions.get("window");

class SignUpContainer extends Component {
  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header
          transparent
          iosBarStyle="light-content"
          style={{ backgroundColor: "rgb(219,168,65)" }}
        >
          <Left style={{ flex: 1, paddingLeft: 10 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={30} color="#fff" />
            </Button>
          </Left>
          <Body style={{ flex: 1, justifyContent: "center" }} />
          <Right style={{ flex: 1 }} />
        </Header>
        <SignUpView {...this.props} />
      </Container>
    );
  }
}

export default SignUpContainer;
