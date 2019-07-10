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
import { Video } from 'expo';
const Videos = [
    {
        video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: 'Non Disclosure Agreement',
        detail: 'Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.  ',
    },
    {
        video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
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
        return (
            <Container>
                <Header transparent style={{ backgroundColor: 'rgb(219,170,67)'}} androidStatusBarColor="rgb(219,170,67)" iosBarStyle="light-content">
                    <Left>
                        {/* <NavBarButton location='left' icon={<Ionicons name='md-arrow-back' size={30}/>} handleButtonPress={() => this.props.navigation.goBack()} /> */}
                    </Left>
                    <Body>
                    <Title style={{ color: '#fff' }}>Highlight video</Title>
                        
                    </Body>
                    <Right/>
                </Header>
                <Content showsVerticalScrollIndicator={false}>
                    {
                        Videos.map((item, index) => (
                            <Video
                                key = {index}
                                source={{ uri: item.video }}
                                rate={1.0}
                                volume={1.0}
                                isMuted={true}
                                resizeMode="cover"
                                shouldPlay
                                isLooping={false}
                                style={{ width: '100%', height: 200, marginBottom: 10 }}
                            />
                        ))
                    }
                </Content>
            </Container>
        );
    }

    renderImage() {
        let { imageBackground } = styles;
        return (
            <View style={{ flex: 1, height: height, width: width }}>
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
        let { profileView, signIn } = styles;
        return (
            <View style={{ flex: 1, padding: 10, marginTop: 70 }} >
                <Text style={headerStyle}>Contracts</Text>
                <Text style={{ color: "white" }}>Please Select a contract option</Text>
                <Content showsVerticalScrollIndicator={false} style={{ marginTop: 25 }}>
                    <TouchableOpacity style={[styles.contractTemplate]}>
                        <View style={{ flex: 2, borderRadius: 10, marginRight: 5, overflow: 'hidden' }}>
                            <Image source={require('../../../assests/home/Image.png')} style={{ flex: 1, height: null, width: null }} />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text style={styles.heading}>Create Your Own Contract</Text>
                            <Text style={styles.text}>Lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit.</Text>
                        </View>
                        <View style={{ flex: 2, padding: 5, justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.select}>
                                <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', fontWeight: 'bold' }}>SELECT</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <Item style={styles.searchBar}>
                        <Ionicons name="ios-search" size={20} color={'#8A8A8F'} />
                        <Input placeholder="Search" />
                        <Ionicons name="ios-mic" size={20} color={'#8A8A8F'} />
                    </Item>
                    <Text style={{ fontSize: 27, color: '#414141', marginTop: 10 }}>All Contract Templates</Text>
                    <List
                        contracts={contracts}
                        {...this.props}
                    />
                </Content>
            </View>
        )
    }

}
