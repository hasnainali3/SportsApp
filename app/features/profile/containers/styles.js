import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    imageBackground: {
        width: '100%',
        height: 200
    },
    signIn:{
        width: 220,
        height: 150,
        // borderRadius: 50, 
        // backgroundColor:'#fff', 
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
    profileImageContainer: {
        borderWidth: 5, 
        borderColor: '#fff', 
        width: 120, 
        height: 120, 
        borderRadius: 60, 
        overflow: 'hidden',
        position: 'absolute',
        top: 25,
        left: 0
    },
    userName: {
        fontSize: 25,
        fontWeight: '600'
    },
    UserDetailBox: {
        flex:1, 
        flexDirection: 'row', 
        justifyContent:'space-between',
        borderBottomWidth: 5,
        borderBottomColor: '#ddd'
    },
    EditButton: { 
        borderRadius: 40, 
        width: 65, 
        height: 30, 
        backgroundColor: '#000', 
        justifyContent:'center'
    }
})

export default styles;