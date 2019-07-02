import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { List, ListItem, Left, Body, Right, Text, Content, Container, View, Thumbnail } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

export default class Drawer extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Container>
                    <Content>
                        <View style={{height: 120, width: '100%'}}>
                            <Image source={require('../../assests/Rectangle_5.png')} style={{flex:1, height: null, width: null}}/>
                            <View style={{position:'absolute', left: 10, bottom: 8}}>
                                <View style={{flexDirection:'row', alignItems: 'center'}}>
                                    <View style={{borderColor:'#17BDB4', borderWidth: 6, borderRadius: 50, marginRight: 10}}>
                                        <Thumbnail source={require('../../assests/logo.jpeg')} />
                                    </View>
                                    <View>
                                        <Text style={styles.name}>Steve Rogers</Text>
                                        <Text note style={{color: '#555'}}>Artist Manager</Text>
                                    </View>
                                    <View style={{marginLeft:10}}>
                                        <Image source={require('../../assests/Group.png')} style={{height: 35, width: 25}} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <ListItem style={[styles.listItem, { borderLeftColor: '#103F93' }]}>
                            <Ionicons name="md-card" style={styles.icon} size={30} />
                            <Text style={styles.icon}>Upgrade to Premium</Text>
                        </ListItem>
                        <ListItem style={[styles.listItem, {borderLeftColor: '#17BDB4'}]}>
                            <Ionicons name="md-home" style={styles.icon} size={30} />
                            <Text style={styles.icon}>Home</Text>
                        </ListItem>
                        <ListItem style={[styles.listItem, {borderLeftColor: 'rgba(13,191,182,.8)'}]}>
                            <Ionicons name="md-person" style={styles.icon} size={30} />
                            <Text style={styles.icon}>Profile</Text>
                        </ListItem>
                        <ListItem style={[styles.listItem, {borderLeftColor: 'rgba(13,191,182,.6)'}]}>
                            <Ionicons name="md-settings" style={styles.icon} size={30} />
                            <Text style={styles.icon}>Settings</Text>
                        </ListItem>
                        <ListItem style={[styles.listItem, {borderLeftColor: 'rgba(13,191,182,.5)'}]}>
                            <Ionicons name="md-help-circle-outline" style={styles.icon} size={30} />
                            <Text style={styles.icon}>Help</Text>
                        </ListItem>
                        <ListItem style={[styles.listItem, {borderLeftColor: 'rgba(13,191,182,.3)'}]}>
                            <Ionicons name="md-share" style={styles.icon} size={30} />
                            <Text style={styles.icon}>Share</Text>
                        </ListItem>
                        <ListItem style={[styles.listItem, {borderLeftColor: 'rgba(13,191,182,.2)'}]}>
                            <Ionicons name="md-close" style={styles.icon} size={30} />
                            <Text style={styles.icon}>Log Out</Text>
                        </ListItem>
                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    icon: {
        color: 'rgb(76,76,76)',
        paddingLeft: 15
    },
    listItem: {
        marginTop: 5,
        marginLeft:0,
        borderLeftWidth: 10,
        borderLeftColor: '#103F93'
    },
    left: {
        paddingLeft: 15
    },
    name: {
        fontSize: 23,
        fontWeight: '300'
    }
})