import React, { Component } from 'react';
import { Text, ImageBackground, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Header, Left, Body, Title, Container, Content, Right, Tabs, Tab, View, Button, Thumbnail } from 'native-base';
import styles from './styles';
import { headerStyle } from '../../../style';
import NavBarButton from '../../../components/Button/NavBarButton';
import Ionicons from '@expo/vector-icons/Ionicons';
const { height, width } = Dimensions.get('window');
const data = [
    {
        name: 'Jamie Blond',
        profession: 'SInger Song Writer'
    },
    {
        name: 'Jamie Blond',
        profession: 'SInger Song Writer'
    },
    {
        name: 'Jamie Blond',
        profession: 'SInger Song Writer'
    },
    {
        name: 'Jamie Blond',
        profession: 'SInger Song Writer'
    },
    {
        name: 'Jamie Blond',
        profession: 'SInger Song Writer'
    }
]
export default class ContactView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'All'
        };
        this.renderImage = this.renderImage.bind(this);
        this.renderContacts = this.renderContacts.bind(this);
    }

    selected(selected){
        this.setState({ selected })
    }

    render() {
        let { container } = styles;
        return (
            <Container>
                {this.renderImage()}
                <View style={{position:'absolute', width: '100%', backgroundColor: 'rgba(0,0,0,.5)',}}>
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
            </Container>
        );
    }

    renderImage() {
        let { imageBackground } = styles;
        return(
            <View style={{flex: 1, height: height, width: width}}>
            <Image 
                style = {[imageBackground,{}]}
                source = {require('../../../assests/contacts.png')}
                resizeMode = {'cover'}
            />
            <Image
                source={require('../../../assests/home/Frame_1.png')}
                style={[imageBackground, {tintColor: 'rgba(0,0,0,.9)'}]}
                resizeMode={'cover'}
                blurRadius={5}
            />
            <View 
                style = {[imageBackground,{backgroundColor: 'rgba(249,214,0,.6)'}]}
            />
            {this.renderContacts()}
        </View>

        )
    }

    renderContacts() {
        let {profileView, signIn, selectedButton, unSelectedButton, tabContainer, imageContainer, image, initialText, addContactButton, contactCard} = styles;
        return(
            <View style = {{flex: 1, paddingTop: 70}} >
                <Text style = {[headerStyle,{paddingHorizontal: 10}]} >Contacts</Text>
                <View style={tabContainer}>
                    <TouchableOpacity style={this.state.selected === 'All' ? selectedButton : unSelectedButton} onPress={()=> this.selected('All')}>
                        <Text style={{color: this.state.selected === 'All' ? '#000' : '#fff', fontWeight: 'bold', fontSize: 15}}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.selected === 'Fav' ? selectedButton : unSelectedButton} onPress={()=> this.selected('Fav')}>
                        <Text style={{color: this.state.selected === 'Fav' ? '#000' : '#fff', fontWeight: 'bold', fontSize: 15}}>Favourites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.selected === 'Team' ? selectedButton : unSelectedButton} onPress={()=> this.selected('Team')}>
                        <Text style={{color: this.state.selected === 'Team' ? '#000' : '#fff', fontWeight: 'bold', fontSize: 15}}>Team</Text>
                    </TouchableOpacity>
                </View>
                <Content style={{ flex: 1, marginTop: 10, backgroundColor: '#F4F4F4' }}>
                    <View style={{backgroundColor: '#fff'}}>
                        <Text style={{ color: 'rgba(0,0,0,.8)', padding: 10}}>Recent</Text>
                        <View style={{flexDirection: 'row', width: '85%', marginTop: 10, alignSelf:'center'}}>
                            <View style={imageContainer}>
                                <Thumbnail large source={{uri: 'https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg'}} style={image} />
                                <Text style={initialText}>HA</Text>
                            </View>
                            <View style={imageContainer}>
                                <Thumbnail large source={{uri: 'https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg'}} style={image} />
                                <Text style={initialText}>HA</Text>
                            </View>
                            <View style={[imageContainer, { zIndex: 9999}]}>
                                <Thumbnail large source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauG7c9GGwxq4AIjqsJqXIXAncUVuTS3NXGOyJVAO2fz9cKFGjzA'}} style={image} />
                                <Text style={initialText}>HA</Text>
                            </View>
                            <View style={imageContainer}>
                                <Thumbnail large source={{uri: 'https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg'}} style={image} />
                                <Text style={initialText}>HA</Text>
                            </View>
                            <View style={[imageContainer, {zIndex: -1}]}>
                                <Thumbnail large source={{uri: 'https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg'}} style={image}  />
                                <Text style={initialText}>HA</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={addContactButton}>
                        <Ionicons name='md-add-circle' size={30}/>
                        <Text style={{color: '#858585', paddingLeft: 10}}>Add New Contact</Text>
                    </TouchableOpacity>
                    <FlatList 
                        data={data}
                        keyExtractor={(item, index) => JSON.stringify(index)}
                        renderItem={({item}) => 
                            <TouchableOpacity style={contactCard} onPress={()=> this.props.navigation.navigate('ProfileView')}>
                                <Thumbnail source={{uri: 'https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg'}}/>
                                <View>
                                    <Text style={{color: '#858585', paddingLeft: 10, fontSize: 17}}>{item.name}</Text>
                                    <Text style={{color: '#858585', paddingLeft: 10, fontSize: 10}}>{item.profession}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </Content>
            </View>
        )
    }

}
