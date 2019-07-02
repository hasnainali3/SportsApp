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
    contractTemplate: {
        flexDirection: 'row',
        marginTop: 5,
        // flexWrap: 'wrap',
        // width: '100%',
        // height: 70,
        borderRadius: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 5,
    },
    select: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 5,
    },
    heading: {
        fontSize: 12,
        fontWeight: 'bold',
        padding: 3,
        paddingTop: 0,
    },
    text: {
        fontSize: 12,
        paddingLeft: 3,
    },
    searchBar: {
        backgroundColor: 'rgba(0,0,0,.1)',
        height: 36,
        borderRadius: 8,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginTop: 15,
        borderBottomWidth: 0
    },
    blankTemplate: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10
    },
    heading1: {
        fontSize: 16,
        color: 'rgba(0,0,0,.7)',
        paddingBottom: 8
    },
    description: {
        fontSize: 13,
        color: 'rgba(0,0,0,.5)',
        paddingBottom: 8
    },
    bar: { 
        position: 'absolute', 
        backgroundColor: '#0474EE', 
        height: 5, 
        width: 100, 
        left: 10
    },
    GlobalCS: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems:'center',
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 5
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd'
    }
})

export default styles;