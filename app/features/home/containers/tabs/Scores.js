import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tiger from "../../../../../assets/images/tiger.png";

export default class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View
          style={{
            height: 40,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        > */}
          {/* <Text style={{ fontWeight: "bold", color: "black" }}>{"<"}</Text> */}
          {/* <View style={{ flexDirection: "row" }}>
            <Ionicons name="md-calendar" />
            <Text style={{ fontWeight: "bold", color: "black", marginLeft: 5 }}>
              {"Week 1"}
            </Text>
          </View> */}
          {/* <Text style={{ fontWeight: "bold", color: "black" }}>{"<"}</Text> */}
         {/* </View> */}

        <Text style={{ fontWeight: "bold", color: "black", margin: 14 }}>
          My Teams
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}
            resizeMode={"contain"}
            source={tiger}
          />
          <Text style={{ fontWeight: "bold", color: "black", marginLeft: 5 }}>
            Colts
          </Text>
          <Text
            style={{
              color: "grey",
              marginLeft: 10,
              fontSize: 10,
              marginTop: 3
            }}
          >
            0 - 0
          </Text>
          <View
            style={{ position: "absolute", right: 30, flexDirection: "row" }}
          >
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
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}
            resizeMode={"contain"}
            source={tiger}
          />
          <Text style={{ fontWeight: "bold", color: "black", marginLeft: 5 }}>
            Chargers
          </Text>
          <Text
            style={{
              color: "grey",
              marginLeft: 10,
              fontSize: 10,
              marginTop: 3
            }}
          >
            0 - 0
          </Text>
        </View>

        <View style={{ height: 1, backgroundColor: "#e2c56c", marginTop: 10 }} />
        <Text style={{ fontWeight: "bold", margin: 22 }}>Scheduled</Text>
        <FlatList 
            data={["Packers", "Bears", "Titans"]}
            renderItem = {(item) => this.renderedBotView(item)}
            keyExtractor = {(item, index) => index.toString()}
        />

      </View>
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
