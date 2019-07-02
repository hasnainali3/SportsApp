import React from 'react'
import { 
    FlatList,
    TouchableHighlight,
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

export default function(props) {
    return(
        <FlatList 
            data={props.data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => JSON.stringify(index)}
            // contentContainerStyle={{flex: 1}}
            renderItem={({item}) => 
                <TouchableHighlight style={styles.card}>
                    <View style={{flex:1}}>
                    <Image source={{uri: item.image}} style={{width: '100%', height: '50%'}}/>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.type}>{item.type}</Text>
                    </View>
                </TouchableHighlight>
            }
        />
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff', 
        height: 200, 
        width: 150, 
        borderRadius: 10, 
        marginLeft: 10, 
        borderColor: '#ddd', 
        borderWidth: 1, 
        overflow: 'hidden'
    },
    title: {
        color: '#000',
        padding: 10,
        fontSize: 17
    },
    type: {
        color: '#000',
        padding: 10,
        paddingTop: 0
    }
})

