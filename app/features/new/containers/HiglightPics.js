import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  FlatList
} from "react-native";
import {
  Header,
  Left,
  Body,
  Title,
  Container,
  Content,
  Input,
  Item,
  Right
} from "native-base";
import styles from "./styles";
import { headerStyle } from "../../../style";
const { height, width } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import List from "../components/templateList";
import NavBarButton from "../../../components/Button/NavBarButton";

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

export default class ContractView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderImage = this.renderImage.bind(this);
    this.renderContract = this.renderContract.bind(this);
  }

  render() {
    return (
      <Container>
        <Header
          transparent
          style={{ backgroundColor: "rgb(219,170,67)" }}
          androidStatusBarColor="rgb(219,170,67)"
          iosBarStyle="light-content"
        >
          <Left>
            <Text
              style={{
                color: "white",
                fontSize: 19,
                marginLeft: 10,
                fontWeight: "bold"
              }}
            >
              {"<"}
            </Text>
          </Left>
          <Body style={{ width: "100%" }}>
            <Title style={{ color: "#fff" }}>Highlight Pics</Title>
          </Body>
          <Right />
        </Header>
        <Content showsVerticalScrollIndicator={false}>
          <FlatList
            data={images}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            contentContainerStyle={{
              alignContent: "center",
              alignItems: "center"
            }}
            renderItem={({ item, index }) => {
              console.log(item.image);
              return (
                <Image
                  source={{ uri: item.image }}
                  resizeMode={"contain"}
                  style={{
                    height: 110,
                    width: "47%",
                    marginLeft: 5
                  }}
                />
              );
            }}
          />
        </Content>
      </Container>
    );
  }

  renderImage() {
    let { imageBackground } = styles;
    return (
      <View style={{ flex: 1, height: height, width: width }}>
        <Image
          style={imageBackground}
          source={require("../../../assests/home/Image.png")}
          resizeMode={"cover"}
        />
        <View
          style={[imageBackground, { backgroundColor: "rgba(53,128,220,.5)" }]}
        />

        {this.renderContract()}
      </View>
    );
  }

  renderContract() {
    let { profileView, signIn } = styles;
    return (
      <View style={{ flex: 1, padding: 10, marginTop: 70 }}>
        <Text style={headerStyle}>Contracts</Text>
        <Text style={{ color: "white" }}>Please Select a contract option</Text>
        <Content showsVerticalScrollIndicator={false} style={{ marginTop: 25 }}>
          <TouchableOpacity style={[styles.contractTemplate]}>
            <View
              style={{
                flex: 2,
                borderRadius: 10,
                marginRight: 5,
                overflow: "hidden"
              }}
            >
              <Image
                source={require("../../../assests/home/Image.png")}
                style={{ flex: 1, height: null, width: null }}
              />
            </View>
            <View style={{ flex: 7 }}>
              <Text style={styles.heading}>Create Your Own Contract</Text>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet dolor sit amet, consectetur
                adipiscing elit.
              </Text>
            </View>
            <View style={{ flex: 2, padding: 5, justifyContent: "center" }}>
              <TouchableOpacity style={styles.select}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 10,
                    textAlign: "center",
                    fontWeight: "bold"
                  }}
                >
                  SELECT
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <Item style={styles.searchBar}>
            <Ionicons name="ios-search" size={20} color={"#8A8A8F"} />
            <Input placeholder="Search" />
            <Ionicons name="ios-mic" size={20} color={"#8A8A8F"} />
          </Item>
          <Text style={{ fontSize: 27, color: "#414141", marginTop: 10 }}>
            All Contract Templates
          </Text>
          <List contracts={contracts} {...this.props} />
        </Content>
      </View>
    );
  }
}
