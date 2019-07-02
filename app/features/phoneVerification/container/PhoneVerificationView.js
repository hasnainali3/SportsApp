import React, {Component} from 'react';
import { View, Text , Image, TextInput} from 'react-native';
import styles from './styles';
import CountryPicker, {
    getAllCountries
} from 'react-native-country-picker-modal';
import CodeInput from 'react-native-confirmation-code-field';

export default class phoneVerificationView extends Component {


    constructor(props) {
        super(props);
        this.state = {
            cca2: 'US',
            callingCode: '1'
        }    
        this.renderCountry = this.renderCountry.bind(this);  
        this.renderInput = this.renderInput.bind(this);
        this.renderText = this.renderText.bind(this);
    }

    render() {
        let {container, headerText, logo} = styles
        return(
            <View style = {container} >
                <Text style = {headerText} >Phone Number</Text>
                <Image source = {require('../../../assests/logo.png')} style = {logo} resizeMode = {'contain'} ></Image>
                {this.renderCountry()}
                {this.renderText()}
            </View>
        );
    }

    renderCountry() {
        let { textContainer, pickerContainer, picker, countryCode } = styles;
        return(
            <View style = {textContainer} >
                <View style = {pickerContainer} >
                    <View style = {picker} >
                        <CountryPicker
                            onChange={value => {
                                this.setState({ cca2: value.cca2, callingCode: value.callingCode })
                            }}
                            cca2={this.state.cca2}
                            translation="eng"
                        />
                    </View>
                    <Text style = {countryCode} >+{this.state.callingCode}</Text>
                </View>
                {this.renderInput()}
            </View>
        );
    }

    renderInput() {
        let { textInput } = styles;
        return(
            <View style = { textInput } >
                <TextInput style = {{marginLeft: 10}}  placeholder = "Mobile Number" ></TextInput>
            </View>
        )
    }

    renderText() {
        let { privacyText } = styles;
        return(
            <Text style = {privacyText} >{"Please enter your mobile number\n to verify your account. A verification will be sent shortly"}</Text>
        );
    }
}