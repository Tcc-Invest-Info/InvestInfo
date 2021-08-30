import {StyleSheet, Dimensions} from  'react-native'

const styles = StyleSheet.create({
    backgorund:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'cover',
    },
    ct_Central:{
        backgroundColor:'#fff',
        width:'80%',
        height:'30%',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    text_email:{
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold',
        marginHorizontal:50,
        marginVertical:10,
        width:'90%',
    },
    input:{
        fontSize:15,
        width:'90%',
        backgroundColor: '#DCDCDC',
        padding:10,
        borderRadius:20,
        marginVertical:10
    },
    bt_redefinir:{ 
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00CED1',
        width:'90%',
        height: 50,
        borderRadius:10,
        marginVertical:10
    },
    text_redefinir:{
        fontSize:25,
        color:'#fff',
        fontWeight:'bold',
    },

})

export default styles