import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    Image
} from 'react-native'
import { Footer, Button, FooterTab } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
// import { navigate } from '../../navigation/NavigationService'

export default class FooterTabNav extends React.Component{
    render(){
        const { navigate } = this.props.navigation
        return(
            <Footer>
                <FooterTab style ={{backgroundColor: 'rgb(219,170,67)'}} >
                <Button style={{flex:1}} onPress={()=>navigate('Home')}>
                    <Ionicons name="md-home" size={30} color = {'#000'} />
                    <Text style = {{color: '#000', fontSize: 12}} >
                        Home
                    </Text>
                </Button>
                <Button style={{flex:1}} onPress={()=>navigate('Home')}>
                    <Ionicons name="md-play" size={30} color = {'#000'} />
                    <Text style = {{color: '#000', fontSize: 12}} >{"Highlight video"}</Text>
                </Button>
                <Button style={{flex:1}} onPress={()=>navigate('Home')}>
                    <Ionicons name="md-camera" size={30} color = {'#000'} />
                    <Text style = {{color: '#000', fontSize: 12}} >
                    Highlight pics
                    </Text>
                </Button>
                <Button style={{flex:1}} onPress={()=>navigate('Home')}>
                    <Ionicons name="md-calendar" size={30} color = {'#000'} />
                    <Text style = {{color: '#000', fontSize: 12}} >
                    Weeks
                    </Text>
                </Button>
                </FooterTab>
            </Footer>
        )
    }
}

const styles = StyleSheet.create({
    // text: {
    //     color: '#fffff'
    // }
})