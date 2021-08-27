import {StyleSheet, Dimensions} from  'react-native'

const styles = StyleSheet.create({
    ct_bt_voltar:{
        alignItems:'flex-start',
        justifyContent:'center',
        height:'20%'
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
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    input:{
        fontSize:20,
        width:'75%',
        backgroundColor: '#DCDCDC',
        padding:15,
        margin:15,
        borderRadius:20
    },
    bt_cadastrar:{ 
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00CED1',
        width: '60%',
        height: 50,
        borderRadius:10,

    },
    text_cadastrar:{
        fontSize:25,
        color:'#fff',
        fontWeight:'bold',
    },
    bt_cadastro:{
        fontSize:15,
        color:'#4682B4',
        marginTop:80
    },  
})

export default styles