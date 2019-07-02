import React from 'react'
import {
    View,
    TextInput
} from 'react-native'

const InputField = (props) => {
    return(
        <View style={[{width: '90%', paddingVertical:20, borderBottomColor: '#ddd', borderBottomWidth: 1}, props.style]}>
        <TextInput placeholder={props.placeHolder} placeholderTextColor="#000" style = {props.placeHolderStyle}/>
       </View>
    )
}

export default InputField;