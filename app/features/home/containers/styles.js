import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        width: '100%',
        height: 250,
        position: 'absolute'
    },
    signIn:{
        width: '50%',
        height: 50,
        // borderRadius: 50, 
        backgroundColor:'#fff', 
        // padding:15, 
        // alignItems:'center',
        // elevation:2,
        // shadowColor: 'rgba(0,0,0,0.5)',
        // shadowOffset: { width: 0, height: 5 },
        // shadowOpacity: 0.7,
        // shadowRadius: 5,
        // flexDirection: 'row',
        // height: 40,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    newContractContainer: {
        flexWrap: 'wrap',
        width: '90%',
        height: 210,
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,.9)',
        marginTop: 20
    },
    startButtonContainer: {
        position:'absolute', 
        alignSelf: 'center', 
        bottom: 10, 
        width: '80%'
    },
    text:{
        color: '#fff',
        marginBottom: 15
    },
    heading:{
        color: '#fff',
        fontSize: 25,
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 15
    }
})

export default styles;