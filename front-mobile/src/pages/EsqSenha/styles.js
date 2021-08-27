import {StyleSheet} from  'react-native'

const styles = StyleSheet.create({
    ct_bt_voltar:{
        alignItems:'flex-start',
        justifyContent:'center',
        marginTop:50,
        height:50,
    },
    ion_back:{
        marginLeft:20
    },
    backgorund:{
        flex:1,
        width:'100%',
        justifyContent:'flex-start',
        resizeMode:'cover',
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        fontSize:20,
        width:'75%',
        backgroundColor: '#DCDCDC',
        padding:15,
        margin:20,
        borderRadius:20
    },
    text_email:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'

    },
    bt_redefinir:{ 
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00CED1',
        width: '60%',
        height: 50,
        borderRadius:10,
        marginTop:50
    },
    text_redefinir:{
        fontSize:25,
        color:'#fff',
        fontWeight:'bold',
    },

})

export default styles