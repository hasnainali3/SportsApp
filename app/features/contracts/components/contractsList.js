import React from 'react'
import { View, ListItem, Left, Thumbnail, Body, Right } from 'native-base';
import {
    FlatList,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const approved = require('../../../assests/all_contracts/Combined_shape_159.png')
const inReview = require('../../../assests/all_contracts/inReview.png')
const inProgress = require('../../../assests/all_contracts/inProgress.png')

export default List = (props) => {
    return(
        <FlatList 
         data={props.contracts}
         keyExtractor={(item, index) => JSON.stringify(index)}
         showsVerticalScrollIndicator={false}
         renderItem={({item}) => 
            <TouchableOpacity onPress={()=> alert('contract Pressed')}>
              <View style={styles.listItem}>
              <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
                <Thumbnail small source={item.status === 'Approved' ? approved : '' || item.status.includes('In Progress') ? inProgress : '' || item.status.includes('In Review') ? inReview : '' } />
              </View>
              <View style={{flex: 8}}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>{item.createdAt} - </Text>
                <Text style={item.status === 'Approved' ? styles.statusApproved : '' || item.status.includes('In Progress') ? styles.statusProgress : '' || item.status.includes('In Review') ? styles.statusReview : '' }>{item.status}</Text>
                </View>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <TouchableHighlight underlayColor='#ddd' onPress={()=> props.onEdit(true)} >
                  <Ionicons name="ios-more" size={25} color='#707070' />
                </TouchableHighlight>
              </View>
              </View>
            </TouchableOpacity>
         }
        />
    )
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-around',
        marginTop: 5
    },
    title: {
        fontSize: 16,
        color: 'rgba(0,0,0,.5)',
    },
    text: {
      fontSize: 12,
      color: '#858585',
    },
    statusApproved: {
      color: '#38B594',
      fontSize: 12
    },
    statusProgress: {
      color: '#7DA3FF',
      fontSize: 12
    },
    statusReview: {
      color: '#EDA622',
      fontSize: 12
    }
})
