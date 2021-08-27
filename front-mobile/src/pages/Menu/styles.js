import {StyleSheet, Dimensions} from  'react-native'

const styles = StyleSheet.create({
    backgorund:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        resizeMode:'cover',
    },
    ct_text_introduction:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        margin:10
    },
    textIntroduction:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    },
    ct_menu_icons:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    icons:{
        margin:30,
        alignItems:'center'
    },

})

export default styles