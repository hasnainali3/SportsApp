import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import EnteryPoint from './app/Entrypoint';
StatusBar.setBarStyle('light-content', true);

export default class App extends React.Component {
    render() {
        return(
            <EnteryPoint/>
        )
    }
}
