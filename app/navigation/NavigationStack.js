import React from 'react'
import { Text, Image } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'

import Login from 'app/features/login/containers/LoginContainer';
import Home from 'app/features/home/containers/HomeContainer';
import Contracts from 'app/features/contracts/containers/ContractsContainer';
import Contacts from '../features/contacts/containers/ContactsContainer';
import Profile from '../features/profile/containers/ProfileContainer';
import New from '../features/new/containers/ContractsContainer';
import Splash from 'app/features/splash/Splash';
import Slider from '../features/slider/containers/SliderContainer';
import SignUp from '../features/signUp/containers/SignUpContainer';
import ForgotScreen from '../features/forgotPassword/containers/ForgotContainer';
import PhoneVerification from '../features/phoneVerification/container/PhoneVerificationContainer';
import Footer from '../components/Footer/Footer'
import NavBarButton from '../components/Button/NavBarButton';
import Drawer from '../components/Drawer/Drawer'
import createContract from '..//features/new/containers/createContract'
import ProfileView from '../features/contacts/containers/profile'
import ContractDetails from '../features/new/containers/ContractDetails'



const contractsStack = createStackNavigator({
    Contract: {
        screen: New,
        navigationOptions : {
            header: null
        }
    },
    createContract: {
        screen: createContract,
        navigationOptions: {
            header: null
        }
    },
    ContractDetails: {
        screen: ContractDetails,
        navigationOptions: {
            header: null
        }
    }
})

const ContactsStack = createStackNavigator({
    Contacts: Contacts,
    ProfileView: ProfileView
}, {
    headerMode: 'none'
})

const TabNavigation = createBottomTabNavigator({
    Home: Home,
    Contracts: Contracts,
    New: contractsStack,
    Contacts: ContactsStack,
    Profile: Profile
},{
    tabBarComponent: Footer,
    tabBarPosition : 'bottom',
})


const RNApp = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { 
                header: null
             }
        },
        Home: {
            screen: TabNavigation,
            // createDrawerNavigator({
            //     TabNavigation,
            // }, {
            //     contentComponent: Drawer
            // }),
            navigationOptions : {
                header: null
            }
            
            //({navigation}) => ({
                // header: null
                // title: 'AGREED',
                // headerLeft: <NavBarButton location='left' icon={<Image source={require('../assests/MENU_icon.png')}/>} handleButtonPress={()=> navigation.toggleDrawer()} />,
                // headerStyle: {
                //     backgroundColor: 'rgba(38,79,77,.5)',
                //     elevation: 0,
                // },
                // headerTitleStyle: {
                //     color: 'white'
                // }
           //  })
        },
        Splash: {
            screen: Splash,
            navigationOptions: { header: null }
        },
        Slider: {
            screen: Slider,
            navigationOptions: { header: null }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: { 
                header: null
            //     headerLeft: <Text style={{textAlign:'left', fontWeight:'800', fontSize:30, marginLeft:20}} >Sign up</Text>,
            //     headerStyle: {
            //         backgroundColor:'white',
            //         elevation: 0,
            //         borderBottomWidth: 0
            //     }
             }
        },
        ForgetPassword: {
            screen: ForgotScreen,
            navigationOptions: ({navigation}) => ({ 
                // headerLeft: <NavBarButton location='left' icon={<Ionicons name="md-menu" size={30} color="#000" />} handleButtonPress={()=> navigation.goBack() } />,
                // headerStyle: {
                //     backgroundColor:'white',
                //     elevation: 0,
                //     borderBottomWidth: 0
                // },
                // headerTintColor: '#000'
                header : null
             })
        },
        PhoneVerification: {
            screen: PhoneVerification,
            navigationOptions: { header: null }
        },
        // Drawer: Drawer
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(RNApp);
