import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      image: {
        width: 320,
        height: 320,
        alignSelf: 'center'
      },
      text: {
        color: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginTop: 15
        // paddingHorizontal: 16,
      },
      title: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginTop: 25
      },
      bottomSheet: {
        height: 350,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: 'black',
        width: '100%',
        marginTop: 40
      }
});

export default styles;