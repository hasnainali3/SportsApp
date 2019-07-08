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
                div: '5-1 -0',
                conf: '8-4-0',
                strk: 'w 2'
            }, {
                teamName: 'Miami',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: '5-1 -0',
                conf: '8-4-0',
                strk: 'w 2'
            }, {
                teamName: 'Buffalo',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: '5-1 -0',
                conf: '8-4-0',
                strk: 'w 2'
            }, {
                teamName: 'New York',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: '5-1 -0',
                conf: '8-4-0',
                strk: 'w 2'
            }
        ]
    },    {
        title: 'East',
        element: [
            {
                teamName: 'New England',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: '5-1 -0',
                conf: '8-4-0',
                strk: 'w 2'
            }, {
                teamName: 'Miami',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: '5-1 -0',
                conf: '8-4-0',
                strk: 'w 2'
            }, {
                teamName: 'Buffalo',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: '5-1 -0',
                conf: '8-4-0',
                strk: 'w 2'
            }, {
                teamName: 'New York',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: '5-1 -0',
                conf: '8-4-0',
                strk: 'w 2'
            }
        ]
    },    {
        title: 'East',
        element: [
            {
                teamName: 'New England',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: '5-1 -0',
                conf: '8-4-0',
                strk: 'w 2'
            }, {
                teamName: 'Miami',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: '5-1 -0',
                conf: '8-4-0',
                strk: 'w 2'
            }, {
                teamName: 'Buffalo',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: '5-1 -0',
                conf: '8-4-0',
                strk: 'w 2'
            }, {
                teamName: 'New York',
                w: 11,
                L: 5,
                T: 0,
                pct: .688,
                div: '5-1 -0',
                conf: '8-4-0',
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
                            <View key='heading' style={{ flexDirection: 'row', backgroundColor: '#000', padding: 5 }}>
                                <View key='title' style={{flex : 3.5}}>
                                    <Text style={styles.text}>{item.title}</Text>
                                </View>
                                <View key='otherData' style={{flex: 6.5, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#000'}}>
                                    <Text style={styles.text}>W</Text>
                                    <Text style={styles.text}>L</Text>
                                    <Text style={styles.text}>T</Text>
                                    <Text style={styles.text}>Pct</Text>
                                    <Text style={styles.text}>Div</Text>
                                    <Text style={styles.text}>Conf</Text>
                                    <Text style={styles.text}>Strk</Text>
                                </View>
                            </View>
                            <View key='body' style={{flex: 1}}>
                                {
                                    item.element.map((element,index) => (
                                        <View key={'bodyData'+index} style={{flex: 1, flexDirection: 'row', padding: 5}}>
                                            <View  key='title' style={{flex : 3.5}}>
                                                <Text>{element.teamName}</Text>
                                            </View>
                                            <View key='otherData' style={{flex: 6.5, flexDirection: 'row'}}>
                                                <Text style={styles.dataText}>{element.w}</Text>
                                                <Text style={[styles.dataText, {paddingLeft: 15}]}>{element.L}</Text>
                                                <Text style={[styles.dataText, {paddingLeft: 20}]}>{element.T}</Text>
                                                <Text style={[styles.dataText, {paddingLeft: 20}]}>{element.pct}</Text>
                                                <Text style={[styles.dataText, {paddingLeft: 12}]}>{element.div}</Text>
                                                <Text style={[styles.dataText, {paddingLeft: 12}]}>{element.conf}</Text>
                                                <Text style={[styles.dataText, {paddingLeft: 15}]}>{element.strk}</Text>
                                            </View>
                                        </View>
                                    ))
                                }
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
    },
    text: {
        color: '#fff',
    },
    dataText: {
        fontSize: 12,
        paddingLeft: -10
    }
});
