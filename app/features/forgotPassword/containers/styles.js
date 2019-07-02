import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: 10
        },
        headerText: {
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft: 10,
            fontSize: 26
        },
        image: {
            width: 300,
            height: 300,
            alignSelf: 'center'
        },
        instructions: {
            alignSelf: 'center',
            color: '#fff',
            fontWeight: 'bold'
        },
        continueButton : {
            width: '80%', 
            borderRadius: 50, 
            backgroundColor:'#000', 
            padding:15, 
            alignItems:'center',
            elevation:2,
            shadowColor: 'rgba(0,0,0,0.5)',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.7,
            shadowRadius: 5,
            alignSelf: 'center',
            marginTop: 18
        },
        signInText: {
            color:'white',
            fontSize: 16,
            fontWeight: '500'
        }
    }
)

export default styles;