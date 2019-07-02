import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        position: 'absolute',
        width: '100%',
        height: 170
    },
    signIn:{
        width: 200,
        height: 80,
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
    modal: {
        flexWrap: "wrap",
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: '#ddd',
        borderWidth: 1,
        elevation:2,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        paddingBottom: 20,
        overflow: 'hidden'
    },
    modalItemText:{
        fontSize: 14,
        paddingLeft: 10
    },
    modalItem: { 
        flexDirection: "row", 
        padding: 15,
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    }
})

export default styles;