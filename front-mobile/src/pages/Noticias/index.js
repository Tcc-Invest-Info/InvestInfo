import React, { useEffect, useState } from 'react'
import { 
        ImageBackground,
        View, 
        Text, 
        Linking,
        ScrollView
} from 'react-native'
import backgroundImage from '../../../assets/noticias.png'
import api, { fetchNews } from '../../api'
import styles from './styles'


export default function Noticias ({navigation}){

    const[noticias, setNoticias] = useState([{}]); 

    useEffect(() => {
        getNews();
    })

    async function getNews() {
        await api.get("/news")
        .then(response => setNoticias(response.data))
        .catch(error => console.log(error));
    }

    return(
        <View style={styles.container}>
            <View style={styles.container_Image}>
                <ImageBackground 
                    source={backgroundImage} style={styles.backgorund}>
                </ImageBackground>
            </View>
            <ScrollView style={styles.scrollView}>
                {noticias.map(obj => (
                    <View key={obj.id} style={styles.container_Noticias}>
                        <Text style={styles.noticias}
                        onPress={()=>{
                            Linking.openURL(obj.url)
                            }}>
                           {obj.title} 
                        </Text>
                        <Text style={styles.data}
                        onPress={()=>{
                            Linking.openURL(obj.url)
                            }}>
                           Data: {obj.dateNews}
                        </Text>   
                    </View>   
                ))
                }                                                                    
            </ScrollView>
        </View>
    )
}