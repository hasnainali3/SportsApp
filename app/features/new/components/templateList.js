import React from 'react'
import { View, ListItem, Left, Thumbnail, Body, Right } from 'native-base';
import {
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import styles  from '../containers/styles'

export default List = (props) => {
    return (
        <FlatList
            data={props.contracts}
            keyExtractor={(item, index) => JSON.stringify(index)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
                <TouchableOpacity style={styles.contractTemplate} onPress={()=> props.navigation.navigate('ContractDetails')}>
                    <View style={{ flex: 2, borderRadius: 10, marginRight: 5, overflow: 'hidden' }}>
                        <Image source={item.image} style={{ flex: 1, height: null, width: null }} />
                    </View>
                    <View style={{ flex: 7 }}>
                        <Text style={styles.heading}>{item.title}</Text>
                        <Text style={styles.text}>{item.detail}</Text>
                    </View>
                    <View style={{ flex: 2, padding: 5, justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.select}>
                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', fontWeight: 'bold' }}>SELECT</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            }
        />
    )
}

