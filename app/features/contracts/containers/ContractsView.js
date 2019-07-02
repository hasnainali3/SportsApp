import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableHighlight, Image, Dimensions, Modal } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Header, Left, Body, Title, Container, Content, Right } from 'native-base';
import styles from './styles';
import { headerStyle } from '../../../style';
const { height, width } = Dimensions.get('window');
import ContractsList from '../components/contractsList'
import { Ionicons } from '@expo/vector-icons'
import NavBarButton from '../../../components/Button/NavBarButton';
const contracts = [
    {
        title: 'Non Disclosure Agreement',
        createdAt:  'Created  12-30-2019',
        status: 'Approved'
    },
    {
        title: 'Non Disclosure Agreement',
        createdAt:  'Created  12-30-2019',
        status: 'In Review'
    },
    {
        title: 'Non Disclosure Agreement',
        createdAt:  'Created  12-30-2019',
        status: 'In Progress'
    },
    {
        title: 'Non Disclosure Agreement',
        createdAt:  'Created  12-30-2019',
        status: 'Approved'
    },
    {
        title: 'Non Disclosure Agreement',
        createdAt:  'Created  12-30-2019',
        status: 'Approved'
    },
    {
        title: 'Non Disclosure Agreement',
        createdAt:  'Created  12-30-2019',
        status: 'In Review'
    },
    {
        title: 'Non Disclosure Agreement',
        createdAt:  'Created  12-30-2019',
        status: 'In Progress'
    },
    {
        title: 'Non Disclosure Agreement',
        createdAt:  'Created  12-30-2019',
        status: 'Approved'
    }
]
export default class ContractView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editModal: false
        };
        this.renderImage = this.renderImage.bind(this);
        this.renderContract = this.renderContract.bind(this);
        this.onEditPress = this.onEditPress.bind(this)
    }

    onEditPress(visible){
        this.setState({
            editModal: visible
        })
    }

    render() {
        let { container } = styles;
        return (
          <Container>
            <View style={{ flex: 1 }}>
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
            </View>
                <Modal
                    visible={this.state.editModal}
                    transparent
                    animationType="slide"
                    onRequestClose={()=> this.onEditPress(false)}
                    hardwareAccelerated
                >
                    <TouchableHighlight
                        underlayColor="rgba(255,255,255,.5)"
                        onPress={()=> this.onEditPress(false)}
                        style={{
                            flex: 1,
                            backgroundColor: "rgba(255,255,255,.5)",
                            justifyContent: "flex-end"
                        }}
                    >
                        <View
                            style={styles.modal}
                        >
                            <TouchableHighlight underlayColor="#ddd" onPress={()=> alert('Edit')}>
                                <View style={styles.modalItem}>
                                    <Ionicons name="md-create" size={25} />
                                    <Text style={styles.modalItemText}>Edit</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#ddd" onPress={()=> alert('Share')}>
                                <View style={styles.modalItem}>
                                    <Ionicons name="md-share" size={25} />
                                    <Text style={styles.modalItemText}>Share</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#ddd" onPress={()=> alert('Favourite')}>
                                <View style={styles.modalItem}>
                                    <Ionicons name="md-heart" size={25} />
                                    <Text style={styles.modalItemText}>Favourite</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#ddd" onPress={()=> alert('Delete')}>
                                <View style={styles.modalItem}>
                                    <Ionicons name="md-trash" size={25} />
                                    <Text style={styles.modalItemText}>Delete</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </TouchableHighlight>
                </Modal>
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
            <View style = {{flex:1, padding: 10, marginTop: 70}} >
                <Text style = {headerStyle} >Contracts</Text>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>All Current Contracts</Text>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between', marginTop: 25}}>
                    <Text style = {{fontSize: 27, color: '#414141'}}>All Contracts</Text>
                    <Image source={require('../../../assests/all_contracts/round-dashboard-24px.png')} />
                </View>
                <View style={{flex: 1}}>
                    <ContractsList 
                        contracts   = {contracts}
                        onEdit      = {this.onEditPress}
                    />
                </View>
            </View>
        )
    }

}
