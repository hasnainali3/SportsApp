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
        <View style={{ flexDirection: "row", justifyContent: "space-around", height: 40,     shadowColor: '#e2c56c', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
 }}>
          <Text style={{ color: "black" }}>All NFL Players</Text>
          <Text style={{ color: "black" }}>Pass Yds</Text>
        </View>
        <FlatList
                data = {[{name: 'ben', score: 5129}, {name: 'MAtt', score: 2129}, {name: 'Jarred', score: 6129}, {name: 'Andrew', score: 3129}]}
                keyExtractor = {(item, index) => index.toString()}
                renderItem = {({item, index}) => this.renderSecondView(index, item)}
            ></FlatList>
      </View>
    );
  }

  renderSecondView = (index, item) => (
    <View style = {{flexDirection: 'row', alignItems: 'center', marginTop: 20}} >
    <Text style = {{color: 'black', marginLeft: 12}} >{index}</Text>
    <View style = {{flexDirection: 'row'}} >
        <Image
          style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}
          resizeMode={"contain"}
          source = {player}
        />
        <View style = {{flexDirection: 'column', marginLeft: 10}}>
            <Text style={{ color: "black", fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ color: "grey" }}>Atlanta</Text>
        </View>
        
    </View>
    <View style = {{position: 'absolute', right: 20,}} >
    <Text style={{ color: "black", fontWeight: 'bold' }}>{item.score}</Text>


        </View>
</View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
