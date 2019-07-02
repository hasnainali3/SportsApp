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
        marginTop: 20
    },
    signInText: {
        color:'white',
        fontSize: 16,
        fontWeight: '500',
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
        flexDirection: 'row',
        marginBottom: 20
    },
    googleSignInText: {
        color:'white',
        fontSize: 16,
        fontWeight: '500',
    },
    signUpText: {
        width: '100%', 
        alignItems:'center', 
        paddingTop: 20,
        paddingBottom: 5,
        color: '#BEBEBE',
    },
    orText: {
        width: '100%', 
        alignItems:'center', 
        padding: 15,
        color: '#BEBEBE',
    },
    gdrp: {
        textDecorationLine: 'underline',
        color: '#3BBBFF',
        fontSize: 13,
        fontWeight: 'bold',
    },
    line: {
        height: 30,
        width: 1,
        backgroundColor: 'white',
        marginLeft: 20,
        opacity: 0.4
    },
    googleSignInText: {
        color:'white',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 25
    },
    promotionContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    promotionText: {
        marginLeft: 45,
        color: '#BEBEBE',
        fontWeight: 'bold',
        marginTop: 15,
        fontSize: 14
    },
    promotionSwitch: {
        marginRight: 15,
        marginLeft: 10
    }
});

export default styles;
