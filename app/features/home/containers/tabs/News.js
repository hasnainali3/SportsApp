import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tiger from "../../../../../assets/images/tiger.png";
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import player from "../../../../../assets/images/player.png";

const images = [
  {
    image: "https://i301.photobucket.com/albums/nn45/McGugin/UH-1.jpg"
  },
  {
    image: "https://i301.photobucket.com/albums/nn45/McGugin/UH-1.jpg"
  },
  {
    image: "https://i301.photobucket.com/albums/nn45/McGugin/UH-1.jpg"
  },
  {
    image: "https://i301.photobucket.com/albums/nn45/McGugin/UH-1.jpg"
  },
  {
    image: "https://i301.photobucket.com/albums/nn45/McGugin/UH-1.jpg"
  },
  {
    image: "https://i301.photobucket.com/albums/nn45/McGugin/UH-1.jpg"
  },
  {
    image: "https://i301.photobucket.com/albums/nn45/McGugin/UH-1.jpg"
  },
  {
    image: "https://i301.photobucket.com/albums/nn45/McGugin/UH-1.jpg"
  }
];

const featured = {
  image: "https://i301.photobucket.com/albums/nn45/McGugin/UH-1.jpg"
};

export default class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Content padder>
          <View style={{ flex: 1 }}>
            <Image
              style={{ width: "100%", height: 200, alignSelf: "center" }}
              source={{ uri: featured.image }}
              resizeMode={"cover"}
            />
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                marginTop: 18,
                fontSize: 18
              }}
            >
              Loren Ipsum Text Goes Here
            </Text>
            <Text
              style={{
                color: "black",
                marginTop: 2,
                fontSize: 10
              }}
            >
              {
                "Loren Ipsum Text Goes Here Loren Ipsum Text Goes Here Loren Ipsum Text Goes Here "
              }
            </Text>
            <FlatList
              data={images}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{ uri: item.image }}
                    resizeMode={"contain"}
                    style={{ width: 100, height: 100 }}
                  />
                  <View style={{ paddingLeft: 10 }}>
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 18
                      }}
                    >
                      Loren Ipsum Text Goes Here
                    </Text>
                    <Text
                      style={{
                        color: "black",
                        marginTop: 2,
                        fontSize: 10
                      }}
                    >
                      {
                        "Loren Ipsum Text Goes Here Loren Ipsum Text Goes Here Loren Ipsum Text Goes Here "
                      }
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
