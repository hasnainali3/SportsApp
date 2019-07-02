import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        position: 'absolute',
        width: '100%',
        height: 220
    },
    signIn:{
        position: 'absolute',
        top: 50,
        right: 10,
        backgroundColor: 'rgb(0,0,0)',
        padding: 10,
        borderRadius: 30

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
        left: 5
    },
    selectedButton: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13
    },
    unSelectedButton: {
        flex: 1,
        backgroundColor: 'transparent',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13
    },
    tabContainer: {
        alignSelf:'center', 
        width: '90%', 
        backgroundColor: 'rgba(0,0,0,.4)', 
        flexDirection: 'row', 
        borderRadius: 40, 
        padding: 5, 
        marginTop: 20
    },
    imageContainer: {
        flex: 1,
        width: 100,
        alignItems: 'center'
    },
    image: {
        borderColor: '#fff', 
        borderWidth: 3,
        height: 95,
        width: 95,
        borderRadius: 47
    },
    initialText: {
        fontSize: 12, 
        textAlign: 'center',
        color: '#414141'
    },
    addContactButton: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
        borderRadius: 6, 
        marginTop: 15, 
        marginLeft:15,
        marginRight: 15,
        marginBottom: 0,
        padding: 5
    },
    contactCard: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
        borderRadius: 6, 
        marginTop: 5, 
        marginLeft:15,
        marginRight: 15,
        padding: 5
    },
    EditButton: { 
        borderRadius: 40, 
        width: 65, 
        height: 30, 
        backgroundColor: '#000', 
        justifyContent:'center'
    },
    userName: {
        fontSize: 25,
        fontWeight: '600'
    },
    UserDetailBox: {
        flex:1, 
        flexDirection: 'row', 
        justifyContent:'space-between',
        borderBottomWidth: 15,
        borderBottomColor: '#ddd'
    },
})

export default styles;