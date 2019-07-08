import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";
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
  Tab,
  ScrollableTab
} from "native-base";
import styles from "./styles";
import { headerStyle } from "../../../style";
import Card from "../components/card";
const { height, width } = Dimensions.get("window");
import NavBarButton from "../../../components/Button/NavBarButton";
import Draft from './tabs/Draft';
import Scores from './tabs/Scores';
import News from './tabs/News';
import Stats from './tabs/Stats';
import Standings from "./tabs/Standings";

const data = [
  {
    image:
      "https://s3.amazonaws.com/ellevate-app-uploads-production/blog_posts/9746/featured_image/original/student-849826_960_720.jpg?1550606134",
    title: "Non Disclosure Agreement",
    type: "General Law"
  },
  {
    image:
      "https://s3.amazonaws.com/ellevate-app-uploads-production/blog_posts/9746/featured_image/original/student-849826_960_720.jpg?1550606134",
    title: "Management Contract",
    type: "Entertainment"
  },
  {
    image:
      "https://s3.amazonaws.com/ellevate-app-uploads-production/blog_posts/9746/featured_image/original/student-849826_960_720.jpg?1550606134",
    title: "Song Split Sheet",
    type: "Entertainment"
  }
];

export default class HomeView extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null
  })


  constructor(props) {
    super(props);
    this.state = {};
    this.renderImage = this.renderImage.bind(this);
    this.renderHome = this.renderHome.bind(this);
    this.newContractCard = this.newContractCard.bind(this);
  }

  render() {
    let { container } = styles;
    return (
      <Container style={{backgroundColor: '#000'}}>
        {/* <Content showsVerticalScrollIndicator={false}>
          {this.renderImage()}
        </Content> */}
          <Header transparent iosBarStyle="light-content" hasTabs style={{backgroundColor:'rgb(219,170,67)'}} androidStatusBarColor="rgb(219,170,67)">
            <Body style={{ flex: 1, justifyContent: "center" }}>
              <Title style={{ color: "#000", fontSize: 12, width: '100%' }}>UNDISPUTED FLAG FOOTBALL </Title>
            </Body>
            <Right style={{ flex: 1 }}>
              <Ionicons name="md-search" size={20} color={"#000"} />
            </Right>
          </Header>
          <Tabs locked tabBarUnderlineStyle = {{backgroundColor: 'rgb(219,170,67)'}} renderTabBar={() => <ScrollableTab />}>
            <Tab tabStyle={{backgroundColor: 'rgb(219,170,67)'}} activeTabStyle={{backgroundColor: 'rgb(219,170,67)'}} textStyle={{color: '#ddd'}} activeTextStyle={{color: '#000'}}  heading="TEAM">
              <Draft />
            </Tab>
            <Tab tabStyle={{backgroundColor: 'rgb(219,170,67)'}} activeTabStyle={{backgroundColor: 'rgb(219,170,67)'}} textStyle={{color: '#ddd'}} activeTextStyle={{color: '#000'}} heading="SCORES">
              <Scores/>
            </Tab>
            <Tab tabStyle={{backgroundColor: 'rgb(219,170,67)'}} activeTabStyle={{backgroundColor: 'rgb(219,170,67)'}} textStyle={{color: '#ddd'}} activeTextStyle={{color: '#000'}} heading="NEWS">
              <News/>
            </Tab>
            <Tab tabStyle={{backgroundColor: 'rgb(219,170,67)'}} activeTabStyle={{backgroundColor: 'rgb(219,170,67)'}} textStyle={{color: '#ddd', fontSize: 9}} activeTextStyle={{color: '#000'}} heading="STANDINGS">
              <Standings />
            </Tab>
            <Tab tabStyle={{backgroundColor: 'rgb(219,170,67)'}} activeTabStyle={{backgroundColor: 'rgb(219,170,67)'}} textStyle={{color: '#ddd'}} activeTextStyle={{color: '#000'}} heading="STATS">
              <Stats/>
            </Tab>
          </Tabs>
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
          blurRadius={3}
        />
        <Image
          source={require("../../../assests/home/Frame_1.png")}
          style={[imageBackground, { tintColor: "rgb(219,170,67)" }]}
          resizeMode={"cover"}
          blurRadius={5}
        />
        {this.renderHome()}
      </View>
    );
  }

  renderHome() {
    return (
      <View style={{ padding: 10, paddingTop: 70 }}>
        <Text style={headerStyle}>OverView</Text>
        {this.newContractCard()}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Example Contracts</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ padding: 10, fontWeight: "bold" }}>View All</Text>
            <Ionicons name="ios-arrow-forward" size={25} />
          </TouchableOpacity>
        </View>
        <Card data={data} />
      </View>
    );
  }

  newContractCard() {
    return (
      <View style={styles.newContractContainer}>
        <ImageBackground
          style={{ flex: 1 }}
          source={require("../../../assests/home/Frame.png")}
        >
          <ImageBackground
            style={{ flex: 1, padding: 10 }}
            source={require("../../../assests/home/Frame_1.png")}
          >
            <Text style={styles.text}>Quick Start</Text>
            <Text style={styles.heading}>Start A New Contract</Text>
            <Text style={styles.text}>
              Choose from existing contract templates to complete your own
              Contract.
            </Text>
            <Button block rounded style={{ backgroundColor: "#fff" }}>
              <Text>START</Text>
            </Button>
          </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
}
