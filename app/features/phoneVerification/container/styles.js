import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerText: {
        marginTop: 35,
        fontWeight: 'bold',
        fontSize: 33,
        marginTop: 60,
        marginLeft: 24
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        marginTop: -60
    },
    textContainer: {
        flexDirection: 'row',
        width: 200,
        alignSelf: 'center',
        marginTop: -60,
        marginRight: 40
    },
    pickerContainer: {
        backgroundColor: '#E5E5E7',
        width: 60,
        flexDirection: 'row',
        height: 40, 
        justifyContent: 'center'
    },
    picker: {
        marginLeft: 5,
        alignSelf: 'center'
    },
    countryCode: {
        marginLeft: 3,
        marginTop: 5,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    textInput: {
        backgroundColor: '#F1F2F6',
        width: 160,
        justifyContent: 'center',
    },
    privacyText: {
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 12
    }
});

export default styles;