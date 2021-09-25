import {StyleSheet} from  'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    container_Image:{
        height:'15%',
        alignItems:'center',
    },
    backgorund:{
        height:'100%',
        width:'100%',
        borderWidth:1
    },
    scrollView:{
        flex:1,   
    },
    container_Noticias:{
        height:100,  
        backgroundColor:'#B0C4DE',
        margin:10,
        justifyContent:'center',
        borderRadius:10

    },
    noticias:{
        fontSize:16,
        padding:10,
        textAlign:'center'
    },
    data:{
        fontSize:16,
        padding:10,
        fontWeight: "bold",
        textAlign:'right'
    }
})

export default styles