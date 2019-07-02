import React, {Component} from 'react';
import {
    View,
    Text,
    Image    
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';
import { slides } from './data';
import { BottomSheet } from '../components/BottomSheet';
import { navigateToLogin } from '../../../navigation/NavigationHelpers';

export default class SliderView extends Component {
    
    constructor(props) {
        super(props);
        this.renderSlider = this.renderSlider.bind(this);
        this.onDone = this.onDone.bind(this);
        this._renderItem = this._renderItem.bind(this);
        this._ondDone = this._onDone.bind(this);
    }

    render() {
        let { container } = styles;
        return (
            <View style = {container} >
                    {this.renderSlider()}
            </View>
        )
    }

    renderSlider() {
        return(
            <AppIntroSlider showSkipButton = {true} renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>
        )
    }
    
    _onDone() {
        navigateToLogin()
    }

    _renderItem(item) {
        console.log(item)
        return (
          <View style={styles.slide}>
            <Image style = {styles.image} source={item.image} />
            <BottomSheet item = {item}></BottomSheet>
          </View>
        );
      }
    

    onDone() {
        alert('done')
    }


}