import React from 'react'
import {
    Text,
    Image,
    Dimensions
} from 'react-native'
import { View, Container, Content, Button, Header, Left, Right, Body, Title } from 'native-base';
import styles from './styles'
import { headerStyle } from '../../../style';
const { height, width } = Dimensions.get('window');
import NavBarButton from '../../../components/Button/NavBarButton';

export default class createContract extends React.Component{
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
            <Text style = {{color:"white"}}>Please Select a contract option</Text>
            <Content style={{marginTop: 23}}>
            <View style={styles.blankTemplate}>
            <Text style={styles.heading1}>Start a Blank Template</Text>
            <Text style={styles.description}>
                This option gives the sections formatted but no text. You can copy and Pate your own or type your own information.
            </Text>
            <Button rounded block style={{backgroundColor: '#000000'}}>
                <Text style={{fontSize: 16, color: '#ffffff'}}>Start Blank Contract</Text>
            </Button>
            <View style={styles.bar} />
        </View>

        <View style={[styles.blankTemplate, {marginTop: 15}]}>
            <Text style={styles.heading1}>Upload Existing Contract</Text>
            <Text style={styles.description}>
                This option allows you to upload a contract you already have in a DOCX,RTF or TXT format. You will need to set the contract sections and contact and signature inputs
            </Text>
            <Button rounded block style={{backgroundColor: '#000000'}}>
                <Text style={{fontSize: 16, color: '#ffffff'}}>Upload Existing Contract</Text>
            </Button>
            <View style={styles.bar} />
        </View>
        </Content>
        </View>
        )
    }
}