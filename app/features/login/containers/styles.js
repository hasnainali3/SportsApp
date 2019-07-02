import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgotPass: {
        width: '100%', 
        alignItems:'flex-end', 
        padding: 20
    },
    signInButton : {
        width: '80%', 
        borderRadius: 50, 
        backgroundColor:'#000', 
        padding:12, 
        alignItems:'center',
        elevation:2,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
    },
    signInText: {
        color:'white',
        fontSize: 16,
        fontWeight: '500'
    },
    googleSignIn:{
        width: '80%', 
        borderRadius: 50, 
        backgroundColor:'#ff2d55', 
        padding:10, 
        alignItems:'center',
        elevation:2,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        flexDirection: 'row'
    },
    googleSignInText: {
        color:'white',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 25
    },
    signUpText: {
        width: '100%', 
        alignItems:'center', 
        padding: 20
    },
    line: {
        height: 30,
        width: 1,
        backgroundColor: 'white',
        marginLeft: 20,
        opacity: 0.4
    },
});

export default styles;
