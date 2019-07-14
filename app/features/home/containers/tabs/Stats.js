import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import tiger from "../../../../../assets/images/tiger.png";
import player from "../../../../../assets/images/player.png";
import {
  Segment,
  Button,
  Tabs,
  Tab,
  ScrollableTab,
  Thumbnail
} from "native-base";
const style = {
  tabStyle: {
    backgroundColor: "#fff",
    borderColor: "rgb(219,170,67)",
    borderWidth: 1
  },
  activeTabStyle: {
    backgroundColor: "rgb(219,170,67)",
    borderColor: "rgb(219,170,67)",
    borderWidth: 1
  },
  textStyle: {
    color: "#000"
  },
  activeTextStyle: {
    color: "#fff"
  }
};
const data = [
  {
    heading: "Most Points Scored",
    image:
      "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
    name: "Jonah Lomu",
    point: "277"
  },
  {
    heading: "Most Points Scored",
    image:
      "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
    name: "Jonah Lomu",
    point: "277"
  },
  {
    heading: "Most Points Scored",
    image:
      "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
    name: "Jonah Lomu",
    point: "277"
  },
  {
    heading: "Most Points Scored",
    image:
      "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
    name: "Jonah Lomu",
    point: "277"
  },
  {
    heading: "Most Points Scored",
    image:
      "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
    name: "Jonah Lomu",
    point: "277"
  },
  {
    heading: "Most Points Scored",
    image:
      "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
    name: "Jonah Lomu",
    point: "277"
  }
];
export default class Draft extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "transparent" }}>
          <Tab {...style} heading="Players">
            <View style={{ flex: 1, paddingTop: 20 }}>
              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View key="card" style={styles.card}>
                    <View key="heading" style={styles.heading}>
                      <Text style={styles.text}>{item.heading}</Text>
                    </View>
                    <View key="body" style={styles.body}>
                      <Thumbnail source={{ uri: item.image }} />
                      <Text style={[styles.text, { color: "#333" }]}>
                        {item.name}
                      </Text>
                      <Text style={[styles.text, { color: "#333" }]}>
                        {item.point}
                      </Text>
                    </View>
                    <View key="footer" style={styles.footer}>
                      <Text style={styles.text}>Show Full Table</Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </Tab>
          <Tab {...style} heading="Teams">
            <View style={{ flex: 1, paddingTop: 20 }}>
              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View key="card" style={styles.card}>
                    <View key="heading" style={styles.heading}>
                      <Text style={styles.text}>{item.heading}</Text>
                    </View>
                    <View key="body" style={styles.body}>
                      <Thumbnail source={{ uri: item.image }} />
                      <Text style={[styles.text, { color: "#333" }]}>
                        {item.name}
                      </Text>
                      <Text style={[styles.text, { color: "#333" }]}>
                        {item.point}
                      </Text>
                    </View>
                    <View key="footer" style={styles.footer}>
                      <Text style={styles.text}>Show Full Table</Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </Tab>
        </Tabs>
      </View>
    );
  }

  renderSecondView = (index, item) => (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
      <Text style={{ color: "black", marginLeft: 12 }}>{index}</Text>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}
          resizeMode={"contain"}
          source={player}
        />
        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <Text style={{ color: "black", fontWeight: "bold" }}>
            {item.name}
          </Text>
          <Text style={{ color: "grey" }}>Atlanta</Text>
        </View>
      </View>
      <View style={{ position: "absolute", right: 20 }}>
        <Text style={{ color: "black", fontWeight: "bold" }}>{item.score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
    margin: 5
  },
  heading: {
    backgroundColor: "rgb(219,170,67)",
    paddingVertical: 5
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5
  },
  footer: {
    backgroundColor: "rgb(219,170,67)",
    paddingVertical: 5
  },
  text: {
    color: "#fff",
    textAlign: "center"
  }
});
