import React from 'react';
import { View, Text } from 'react-native';
import styles from '../containers/styles';

export const BottomSheet = (props) => {
    let {bottomSheet, text} = styles;
    return(
        <View style = {bottomSheet} >
            <Text style={styles.title}>{props.item.title}</Text>
            <Text style={styles.text}>{props.item.text}</Text>
        </View>
    )   
}

