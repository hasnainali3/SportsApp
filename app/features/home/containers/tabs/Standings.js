import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import tiger from "../../../../../assets/images/tiger.png";
import player from "../../../../../assets/images/player.png";
const gridData = [
  {
    title: "East",
    element: [
      {
        teamName: "New England",
        w: 11,
        L: 5,
        T: 0,
        pct: 0.688,
        div: "5-1 -0",
        conf: "8-4-0",
        strk: "w 2"
      },
      {
        teamName: "Miami",
        w: 11,
        L: 5,
        T: 0,
        pct: 0.688,
        div: "5-1 -0",
        conf: "8-4-0",
        strk: "w 2"
      },
      {
        teamName: "Buffalo",
        w: 11,
        L: 5,
        T: 0,
        pct: 0.688,
        div: "5-1 -0",
        conf: "8-4-0",
        strk: "w 2"
      },
      {
        teamName: "New York",
        w: 11,
        L: 5,
        T: 0,
        pct: 0.688,
        div: "5-1 -0",
        conf: "8-4-0",
        strk: "w 2"
      }
    ]
  },
  {
    title: "East",
    element: [
      {
        teamName: "New England",
        w: 11,
        L: 5,
        T: 0,
        pct: 0.688,
        div: "5-1 -0",
        conf: "8-4-0",
        strk: "w 2"
      },
      {
        teamName: "Miami",
        w: 11,
        L: 5,
        T: 0,
        pct: 0.688,
        div: "5-1 -0",
        conf: "8-4-0",
        strk: "w 2"
      },
      {
        teamName: "Buffalo",
        w: 11,
        L: 5,
        T: 0,
        pct: 0.688,
        div: "5-1 -0",
        conf: "8-4-0",
        strk: "w 2"
      },
      {
        teamName: "New York",
        w: 11,
        L: 5,
        T: 0,
        pct: 0.688,
        div: "5-1 -0",
        conf: "8-4-0",
        strk: "w 2"
      }
    ]
  },
  {
    title: "East",
    element: [
      {
        teamName: "New England",
        w: 11,
        L: 5,
        T: 0,
        pct: 0.688,
        div: "5-1 -0",
        conf: "8-4-0",
        strk: "w 2"
      },
      {
        teamName: "Miami",
        w: 11,
        L: 5,
        T: 0,
        pct: 0.688,
        div: "5-1 -0",
        conf: "8-4-0",
        strk: "w 2"
      },
      {
        teamName: "Buffalo",
        w: 11,
        L: 5,
        T: 0,
        pct: 0.688,
        div: "5-1 -0",
        conf: "8-4-0",
        strk: "w 2"
      },
      {
        teamName: "New York",
        w: 11,
        L: 5,
        T: 0,
        pct: 0.688,
        div: "5-1 -0",
        conf: "8-4-0",
        strk: "w 2"
      }
    ]
  }
];
export default class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={gridData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View key="listItem" style={{ flex: 1 }}>
              <View
                key="heading"
                style={{
                  flexDirection: "row",
                  backgroundColor: "rgb(219,170,67)",
                  padding: 5
                }}
              >
                <View key="title" style={{ flex: 3.5 }}>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
                <View
                  key="otherData"
                  style={{
                    flex: 6.5,
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Text style={styles.text}>W</Text>
                  <Text style={styles.text}>L</Text>
                  <Text style={styles.text}>PF</Text>
                  <Text style={styles.text}>PA</Text>
                </View>
              </View>
              <View key="body" style={{ flex: 1 }}>
                {item.element.map((element, index) => (
                  <View
                    key={"bodyData" + index}
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      padding: 5,
                      justifyContent: "space-between"
                    }}
                  >
                    <View key="title" style={{ flex: 3.5 }}>
                      <Text>{element.teamName}</Text>
                    </View>
                    <View
                      key="otherData"
                      style={{
                        flex: 6.5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 10
                      }}
                    >
                      <Text style={[styles.dataText, { paddingLeft: 0 }]}>
                        {element.w}
                      </Text>
                      <Text style={[styles.dataText, { paddingLeft: 0 }]}>
                        {element.L}
                      </Text>
                      <Text style={[styles.dataText, { paddingLeft: 0 }]}>
                        {element.L}
                      </Text>
                      <Text style={[styles.dataText, { paddingLeft: 0 }]}>
                        {element.T}
                      </Text>
                    </View>
                  </View>
                ))}
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
    flex: 1
  },
  text: {
    color: "#fff"
  },
  dataText: {
    fontSize: 12,
    paddingLeft: -10
  }
});
