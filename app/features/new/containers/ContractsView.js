import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Header, Left, Body, Title, Container, Content, Input, Item, Right } from 'native-base';
import styles from './styles';
import { headerStyle } from '../../../style';
const { height, width } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons'
import List from '../components/templateList'
import NavBarButton from '../../../components/Button/NavBarButton';
const contracts = [
    {
        image: require('../../../assests/home/Image.png'),
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        image: require('../../../assests/home/Image.png'),
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        image: require('../../../assests/home/Image.png'),
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        image: require('../../../assests/home/Image.png'),
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        image: require('../../../assests/home/Image.png'),
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        image: require('../../../assests/home/Image.png'),
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        image: require('../../../assests/home/Image.png'),
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        image: require('../../../assests/home/Image.png'),
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    }
]

export default class ContractView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.renderImage = this.renderImage.bind(this);
        this.renderContract = this.renderContract.bind(this);
    }

    render() {
        let { container } = styles;
        return (
            <Container>
                {/* <Content showsVerticalScrollIndicator={false}> */}
                {this.renderImage()}
                <View style={{position:'absolute', width: width, backgroundColor: 'rgba(0,0,0,.5)',}}>
                    <Header transparent iosBarStyle="light-content">
                        <Left style={{flex: 1}}>
                        <NavBarButton location='left' icon={<Image source={require('../../../assests/MENU_icon.png')}/>} handleButtonPress={()=> this.props.navigation.toggleDrawer()} />
                        </Left>
                        <Body  style={{flex: 1, justifyContent: 'center'}}>
                            <Title style={{color: '#fff'}}>AGREED</Title>
                        </Body>
                        <Right  style={{flex: 1}} />
                    </Header>
                </View>
                {/* </Content> */}
            </Container>
        );
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
                
                {this.renderContract()}
            </View>
        )
    }

    renderContract() {
        let {profileView, signIn} = styles;
        return(
            <View style = {{flex: 1, padding: 10, marginTop: 70}} >
                <Text style = {headerStyle}>Contracts</Text>
                <Text style = {{color:"white"}}>Please Select a contract option</Text>
                <Content showsVerticalScrollIndicator={false} style={{ marginTop: 25 }}>
                <TouchableOpacity style={[styles.contractTemplate]}>
                    <View style={{ flex: 2, borderRadius: 10, marginRight: 5, overflow: 'hidden'}}>
                        <Image source={require('../../../assests/home/Image.png')} style={{flex: 1, height: null, width: null}}/>
                    </View>
                    <View style={{ flex: 7}}>
                        <Text style={styles.heading}>Create Your Own Contract</Text>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.</Text>
                    </View>
                    <View style={{ flex: 2, padding: 5, justifyContent:'center'}}>
                        <TouchableOpacity style={styles.select}>
                            <Text style={{color: '#fff', fontSize: 10, textAlign:'center', fontWeight: 'bold'}}>SELECT</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                    <Item style={styles.searchBar}>
                        <Ionicons name="ios-search" size={20} color={'#8A8A8F'} />
                        <Input placeholder="Search" />
                        <Ionicons name="ios-mic" size={20} color={'#8A8A8F'} />
                    </Item>
                    <Text style = {{fontSize: 27, color: '#414141', marginTop: 10}}>All Contract Templates</Text>
                    <List 
                        contracts = {contracts}
                        {...this.props}
                    />
                </Content>
            </View>
        )
    }

}
