import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import tiger from '../../../../../assets/images/tiger.png';
import player from '../../../../../assets/images/player.png';

export default class Draft extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "white", height: 200 }}>
          <View style={{flex: 1, marginLeft: 15 }}>
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 12 }}>
              My Team Picks
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[1, 2, 3, 4, 5, 6]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderFirstView}
            />

          </View>
        </View>
        <View style={{ height: 1, backgroundColor: "#e2c56c" }} />
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
          <Text style={{ color: "black" }}>All Teams</Text>
          <Text style={{ color: "black" }}>Round 1</Text>
        </View>
        <View style={{flex: 1}}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => this.renderSecondView(index)}
        />
        </View>
      </View>
    );
  }

  renderSecondView = (index) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }} >
      <Text style={{ color: 'black', marginLeft: 12 }} >{index}</Text>
      <View style={{ flexDirection: 'row' }} >
        <Image
          style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}
          resizeMode={"contain"}
          source={player}
        />
        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={{ color: "black", fontWeight: 'bold' }}>Kyler Murray</Text>
          <Text style={{ color: "grey" }}>PCK</Text>
        </View>

      </View>
      <View style={{ position: 'absolute', right: 20, }} >
        <Image
          style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}
          resizeMode={"contain"}
          source={tiger}
        />
      </View>
    </View>

  )

  renderFirstView = () => (
    <View
      style={{
        height: 140,
        width: 120,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        margin: 15,
        overflow: 'hidden'
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          height: 30,
          flexDirection: "row"
        }}
      >
        <Image
          style={{ width: 20, height: 20, borderRadius: 10 }}
          resizeMode={"contain"}
          source={player}
        />
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            color: "white"
          }}
        >
          LAC
      </Text>
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            color: "white"
          }}
        >
          S
      </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          resizeMode={"contain"}
          source={player}
        />
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          resizeMode={"contain"}
          source={tiger}
        />
      </View>

      <View>
        <Text
          style={{ fontWeight: "bold", color: "black", marginLeft: 12 }}
        >
          {"Jerry\nTIllery"}
        </Text>
      </View>

      <View
        style={{ marginTop: 10, marginLeft: 15, flexDirection: "row" }}
      >
        <Text style={{ color: "grey" }}>RND</Text>
        <Text style={{ color: "black" }}>1</Text>

        <Text style={{ color: "grey", marginLeft: 10 }}>PCK</Text>
        <Text style={{ color: "black" }}>28</Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
