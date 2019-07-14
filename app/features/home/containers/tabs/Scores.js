import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tiger from "../../../../../assets/images/tiger.png";
import { Thumbnail } from "native-base";
const data = [
  {
    heading: { date: "Sunday, july 21, 2019", time: "9: 45 AM" },
    image:
      "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
    name: "Jonah Lomu",
    point: "277"
  },
  {
    heading: { date: "Sunday, july 21, 2019", time: "9: 45 AM" },
    image:
      "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
    name: "Jonah Lomu",
    point: "277"
  },
  {
    heading: {
      date: "Sunday, july 21, 2019",
      time: "9: 45 AM"
    },
    image:
      "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
    name: "Jonah Lomu",
    point: "277"
  },
  {
    heading: { date: "Sunday, july 21, 2019", time: "9: 45 AM" },
    image:
      "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
    name: "Jonah Lomu",
    point: "277"
  },
  {
    heading: { date: "Sunday, july 21, 2019", time: "9: 45 AM" },
    image:
      "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
    name: "Jonah Lomu",
    point: "277"
  },
  {
    heading: { date: "Sunday, july 21, 2019", time: "9: 45 AM" },
    image:
      "https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg",
    name: "Jonah Lomu",
    point: "277"
  }
];
export default class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key="card" style={styles.card}>
              <View key="heading" style={styles.heading}>
                <Text style={styles.text}>{item.heading.date}</Text>
                <Text style={styles.text}>{item.heading.time}</Text>
              </View>
              <View key="body" style={styles.body}>
                <View key="team1" style={{ alignItems: "center" }}>
                  <Thumbnail source={{ uri: item.image }} />
                  <Text style={[styles.text, { color: "#333" }]}>
                    {item.name}
                  </Text>
                </View>
                <View key="team2" style={{ alignItems: "center" }}>
                  <Thumbnail source={{ uri: item.image }} />
                  <Text style={[styles.text, { color: "#333" }]}>
                    {item.name}
                  </Text>
                </View>
              </View>
              <View key="footer" style={styles.footer}>
                <Text style={styles.text}>Show Full Table</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
    margin: 5,
    elevation: 2
  },
  heading: {
    // backgroundColor: "rgb(219,170,67)",
    paddingVertical: 5
  },
  body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  footer: {
    // backgroundColor: "rgb(219,170,67)",
    paddingVertical: 5
  },
  text: {
    color: "#333",
    textAlign: "center"
  }
});
