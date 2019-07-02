import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import tiger from '../../../../../assets/images/tiger.png';
import player from '../../../../../assets/images/player.png';
const gridData = [
    {
        title: 'East',
        element: [
            {
                teamName: 'New England',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: 5 - 1 - 0,
                conf: 8 - 4 - 0,
                strk: 'w 2'
            }, {
                teamName: 'Miami',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: 5 - 1 - 0,
                conf: 8 - 4 - 0,
                strk: 'w 2'
            }, {
                teamName: 'Buffalo',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: 5 - 1 - 0,
                conf: 8 - 4 - 0,
                strk: 'w 2'
            }, {
                teamName: 'New York',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: 5 - 1 - 0,
                conf: 8 - 4 - 0,
                strk: 'w 2'
            }
        ]
    }
]
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
                    renderItem={({ item, index }) =>
                        <View key='listItem' style={{flex: 1}}>
                            <View key='heading' style={{ flexDirection: 'row', backgroundColor: '#000', padding: 5}}>
                                <View key='title' style={{flex : 3, backgroundColor: '#ddd'}}>
                                    <Text>{item.title}</Text>
                                </View>
                                <View key='otherData' style={{flex: 7, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#000'}}>
                                    <Text>W</Text>
                                    <Text>L</Text>
                                    <Text>T</Text>
                                    <Text>Pct</Text>
                                    <Text>Div</Text>
                                    <Text>Conf</Text>
                                    <Text>Strk</Text>
                                </View>
                            </View>
                        </View>
                    }
                ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
