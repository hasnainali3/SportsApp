import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tiger from "../../../../../assets/images/tiger.png";
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import player from '../../../../../assets/images/player.png';

export default class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
      <Content>
        <Text style={{ fontWeight: "bold", color: "blue", margin: 14 }}>
          Sports
        </Text>
        <Card>
          <CardItem style={{ flexDirection: 'column', }}>
            <Body>
              <Text style={{ fontWeight: "bold", color: "blue", margin: 14, alignSelf: 'center' }}>Ryan Leaf advises NFL rookis</Text>
              <Image
                style={{ width: 100, height: 150, alignSelf: 'center' }}
                // resizeMode={"contain"}
                source={player}
              />
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem style={{ flexDirection: 'column' }}>
            <Body>
              <Text style={{ fontWeight: "bold", color: "blue", margin: 14, alignSelf: 'center' }}>NFC Training Camp Battle</Text>
              <Image
                style={{ width: 100, height: 150, alignSelf: 'center' }}
                // resizeMode={"contain"}
                source={player}
              />
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem style={{ flexDirection: 'column' }}>
            <Body>
              <Text style={{ fontWeight: "bold", color: "blue", margin: 14, alignSelf: 'center' }}>Bump and Run: NFC Training Camp Battles</Text>
              <Image
                style={{ width: 100, height: 150, alignSelf: 'center' }}
                // resizeMode={"contain"}
                source={player}
              />
            </Body>
          </CardItem>
        </Card>
      </Content>
      </Container>
    );
  }

  renderedBotView = (item) => (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}
          resizeMode={"contain"}
          source={tiger}
        />
        <Text style={{ fontWeight: "bold", color: "black", marginLeft: 5 }}>
          {item.item}
        </Text>
        <Text
          style={{ color: "grey", marginLeft: 10, fontSize: 10, marginTop: 3 }}
        >
          0 - 0
        </Text>
        <View style={{ position: "absolute", right: 30, flexDirection: "row" }}>
          <Text
            style={{
              color: "grey",
              marginLeft: 10,
              fontSize: 10,
              marginTop: 3
            }}
          >
            LAC - 3
          </Text>
          <Text
            style={{
              color: "grey",
              marginLeft: 10,
              fontSize: 10,
              marginTop: 3
            }}
          >
            9/9, 1:05 AM
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
