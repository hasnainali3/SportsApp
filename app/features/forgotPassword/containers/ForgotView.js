import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import InputField from "../../login/components/TextInput";
import { Content } from "native-base";

export default class ForgotView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenIndex: 0
    };

    this.renderEmailScreen = this.renderEmailScreen.bind(this);
  }

  render() {
    let { container } = styles;
    return (
      <View style={{ flex: 1 }}>
        {this.state.screenIndex == 0 && this.renderEmailScreen()}
      </View>
    );
  }

  renderEmailScreen() {
    let {
      headerText,
      image,
      instructions,
      continueButton,
      signInText
    } = styles;
    return (
      <Content>
        <View style={styles.backgroundContainer} />
        <View style={[styles.container, { paddingTop: 50, paddingBottom: 20 }]}>
          <Text style={[headerText, { color: "#333" }]}>Forget Password</Text>
          <Text
            style={{
              color: "#333",
              textAlign: "center",
              fontSize: 25,
              marginTop: 40
            }}
          >
            UNDISPUTED FLAG FOOTBALL LEAGUE
          </Text>
          <Text style={[instructions, { marginTop: 20, color: "#333" }]}>
            Please enter the email address you
          </Text>
          <Text style={[instructions, { alignSelf: "center", color: "#333" }]}>
            used to register with.
          </Text>
          <Text style={instructions}>
            {"A link will be sent to you to reset."}
          </Text>
          <TextInput
            placeholder="Enter your email"
            style={{
              width: 250,
              fontSize: 20,
              padding: 5,
              alignSelf: "center",
              backgroundColor: "#F1F2F6",
              marginTop: 40,
              height: 50,
              borderRadius: 10
            }}
            placeholderTextColor="#000000"
          />
          <TouchableOpacity activeOpacity={0.7} style={continueButton}>
            <Text style={signInText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Content>
    );
  }
}
