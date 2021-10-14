import {StyleSheet} from  'react-native'

const styles = StyleSheet.create({
    backgorund:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        resizeMode:'cover',
    },
    ct_Login:{
        flexDirection:'row',
        justifyContent:'center',
    },
    text_Log:{
        fontSize:45,
        fontWeight:'bold',
        color:'black',
        marginVertical:30
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
    ct_esq_senha:{
        alignItems:'flex-end',
        marginRight:60
    },
    bt_esq_senha:{
        fontSize:15,
        color:'#4682B4',
    },
    bt_acessar:{ 
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00CED1',
        width: '60%',
        height: 50,
        borderRadius:10,
        marginTop:50
    },
    text_acessar:{
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