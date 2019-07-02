import React from 'react'
import {
    Text,
    Image,
    Dimensions,
    Switch
} from 'react-native'
import { View, Container, Content, Button, Header, Left, Right, Body, Title } from 'native-base';
import styles from './styles'
import { headerStyle } from '../../../style';
const { height, width } = Dimensions.get('window');
import NavBarButton from '../../../components/Button/NavBarButton';
import { Ionicons } from '@expo/vector-icons'

export default class ContractDetails extends React.Component{

    constructor() {
        super()
        this.state= {
            value: true
        }
    }

    onValueChange = (value)=> {
        this.setState({value})
    }
    render(){
        return(
            <Container>
                {this.renderImage()}
                <View style={{position:'absolute', width: width, backgroundColor: 'rgba(0,0,0,.5)',}}>
                    <Header transparent iosBarStyle="light-content">
                        <Left style={{flex: 1}}>
                        <NavBarButton location='left' icon={<Image source={require('../../../assests/back.png')}/>} handleButtonPress={()=> this.props.navigation.goBack()} />
                        </Left>
                        <Body  style={{flex: 1, justifyContent: 'center'}}>
                            <Title style={{color: '#fff'}}>AGREED</Title>
                        </Body>
                        <Right  style={{flex: 1}} />
                    </Header>
                </View>
            </Container>
        )
    }

    renderImage() {
        let { imageBackground } = styles;
        return(
            <View style={{flex: 1, height: height, width: width}}>
                <Image
                    style={imageBackground}
                    source={require('../../../assests/home/Image.png')}
                    resizeMode={'cover'}
                />
                <View
                    style={[imageBackground, { backgroundColor: 'rgba(53,128,220,.5)' }]}
                />
                
                {this.renderTemplates()}
            </View>
        )
    }

    renderTemplates(){
        return(
            <View style = {{flex: 1, padding: 10, marginTop: 70}} >
            <Text style = {headerStyle}>Contracts</Text>
            <Text style = {{color:"white"}}>Please enter all contract details</Text>
            <Content style={{marginTop: 23}}>
            <View style={styles.blankTemplate}>
            <Text style={styles.heading1}>Global Contract Settings</Text>
                <View style={styles.GlobalCS}>
                    <Text>Allow Others to edit</Text>
                    <Switch value={this.state.value} onValueChange={this.onValueChange} />
                </View>
                <View style={styles.divider}/>
                <View style={styles.GlobalCS}>
                    <Text>Copy to Google Drive</Text>
                    <Switch value={this.state.value} onValueChange={this.onValueChange} />
                </View>
                <View style={styles.divider}/>
                <View style={styles.GlobalCS}>
                    <Text>Enable Percentage Splits</Text>
                    <Switch value={this.state.value} onValueChange={this.onValueChange} />
                </View>
                <View style={styles.divider}/>
                <View style={styles.GlobalCS}>
                    <Text>Include Yourself in contract</Text>
                    <Switch value={this.state.value} onValueChange={this.onValueChange} />
                </View>
            <View style={styles.bar} />
        </View>

        <View style={[styles.blankTemplate, {marginTop: 15, flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Text style={styles.heading1}>Add Contacts</Text>
            <Ionicons name = "ios-arrow-forward" size={25}/>
            <View style={[styles.bar, {backgroundColor: 'orange'}]} />
        </View>
        <View style={[styles.blankTemplate, {marginTop: 15, flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Text style={styles.heading1}>Contract Details</Text>
            <Ionicons name = "ios-arrow-forward" size={25}/>
            <View style={[styles.bar, {backgroundColor: 'green'}]} />
        </View>
        <View style={[styles.blankTemplate, {marginTop: 15, flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Text style={styles.heading1}>Payment Details</Text>
            <Ionicons name = "ios-arrow-forward" size={25}/>
            <View style={[styles.bar, {backgroundColor: 'red'}]} />
        </View>

        <View style={{flexDirection: 'row', width: '100%', padding: 10}}>
            <Button dark rounded style={{flex: 1, justifyContent: 'center', margin: 2}}>
                <Text style={{textAlign: 'center', color: '#fff'}}>Submit</Text>
            </Button>
            <Button success rounded style={{flex: 1, justifyContent: 'center', margin: 2}}>
                <Text style={{textAlign: 'center', color: '#fff'}}>Preview</Text>
            </Button>
        </View>
        </Content>
        </View>
        )
    }
}