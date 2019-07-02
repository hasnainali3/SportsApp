import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Header, Left, Body, Title, Button, Container, Content, Right } from 'native-base';
import styles from './styles';
import { headerStyle } from '../../../style';
import NavBarButton from '../../../components/Button/NavBarButton';

export default class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.renderImage = this.renderImage.bind(this);
        this.renderProfileInfo = this.renderProfileInfo.bind(this);
    }

    render() {
        let { container, EditButton } = styles;
        return (
            <Container>
                <Content showsVerticalScrollIndicator={false}>
                {this.renderImage()}
                {this.renderDetails(EditButton)}
                </Content>
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

    renderDetails(EditButton) {
        return(
            <View>
                <View style={styles.UserDetailBox}>
                    <View style={{flex:1, padding:10}}>
                        <Text style={styles.userName}>   </Text>
                        <Text style={[styles.userName,{fontSize: 15, fontWeight: '400'}]}>     </Text>
                        <Text style={[styles.userName,{fontSize: 15, fontWeight: '400', paddingTop: 20, textAlign: 'right', color: "#555"}]}>City</Text>
                        <Text style={[styles.userName,{fontSize: 15, fontWeight: '400', paddingTop: 35, textAlign: 'right', color: "#555"}]}>Company</Text>
                        <Text style={[styles.userName,{fontSize: 15, fontWeight: '400', paddingTop: 30, textAlign: 'right', color: "#555"}]}>Pro Information</Text>
                    </View>
                    <View style={{flex:2, padding:10, paddingLeft: 10}}>
                        <Text style={styles.userName}>Rudiger Roots</Text>
                        <Text style={[styles.userName,{fontSize: 15, fontWeight: '500'}]}>Producer/Composer</Text>
                        <Text style={[styles.userName,{fontSize: 15, fontWeight: '500', paddingTop: 20}]}>New York, New York United States</Text>
                        <Text style={[styles.userName,{fontSize: 15, fontWeight: '500', paddingTop: 20}]}>Big Drip Draco</Text>
                        <Text style={[styles.userName,{fontSize: 15, fontWeight: '500', paddingTop: 25}]}>
                        SCOCAN #12345
                        {"\n"}
                        ASCAP #12345
                        {"\n"}
                        BMI #12345
                        </Text>
                    </View>
                </View>
                <View style={{flex:1, padding: 10, borderBottomColor:'#ddd', borderBottomWidth: 5}} >
                    <Text style={{fontWeight: 'bold', textAlign: 'left', paddingBottom: 10}}>About</Text>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </View>
                <View style={{flex:1, padding: 10, paddingBottom:20, borderBottomColor:'#ddd', borderBottomWidth: 5}} >
                    <Text style={{fontWeight: 'bold', textAlign: 'left', paddingBottom: 10}}>Signature Method - <Text style={{color:'rgb(121,217,126)'}}>Create Your Own</Text>
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{flex:3, borderBottomColor:'#000', borderBottomWidth: 1}}>
                            <Text>x Signature</Text>
                        </View>
                        <View style={{flex: 1, paddingLeft: 30}}>
                            <TouchableOpacity style={EditButton}>
                                <Text style={{color:'#fff', textAlign:'center'}}>EDIT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{flex:1, padding: 10, paddingBottom:30, borderBottomColor:'#ddd', borderBottomWidth: 5}} >
                    <Text style={{fontWeight: 'bold', textAlign: 'left', paddingBottom: 10}}>Document Synced - <Text style={{color:'rgb(121,217,126)'}}>Enabled</Text>
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{flex:3}}>
                            <Image source={require('../../../assests/google_Drive.png')} style={{flex:1 , height: null, width: null}} />
                        </View>
                        <View style={{flex: 1, paddingLeft: 30}}>
                            <TouchableOpacity style={EditButton}>
                                <Text style={{color:'#fff', textAlign:'center'}}>EDIT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    renderImage() {
        let { imageBackground } = styles;
        return(
            <ImageBackground 
                    style = {imageBackground}
                    source = {require('../../../assests/home_background.png')}
                    resizeMode = {'cover'}
                    >
                <ImageBackground 
                    source = {require('../../../assests/rectangle.png')}
                    style = {imageBackground}
                    resizeMode = {'cover'}
                >
                    {this.renderProfileInfo()}
                </ImageBackground> 
            </ImageBackground>
        )
    }

    renderProfileInfo() {
        let {profileView, signIn, profileImageContainer} = styles;
        return(
            <View style = {{ padding: 10 }} >
                <Text style = {[headerStyle,{marginTop: 60}]} >Profile</Text>
                <View style = {{flexDirection: 'row', justifyContent:'flex-end'}}>
                    <View style = {profileImageContainer} >
                        <Image source = {{uri: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}} style={{flex:1, height: null, width: null}}/>
                    </View>
                    <TouchableOpacity activeOpacity={0.6} style={{marginTop: -10}} >
                        <Image source = {require('../../../assests/EditProfileButton.png')} resizeMode = {'contain'} style={signIn} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}
