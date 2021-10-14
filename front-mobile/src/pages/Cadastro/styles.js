import {StyleSheet, Dimensions} from  'react-native'

const styles = StyleSheet.create({
    backgorund:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        resizeMode:'cover',
    },
    ct_Cadastro:{
        flexDirection:'row',
        justifyContent:'center'
    },
    text_Cadas:{
        fontSize:45,
        fontWeight:'bold',
        color:'black',
        marginVertical:30

    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        width:'75%',
        marginVertical:40

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