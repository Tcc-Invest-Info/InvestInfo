import React from 'react'
import { 
        ImageBackground,
        View, 
        Text, 
        TouchableOpacity,
        Alert
} from 'react-native'
import backgroundImage from '../../../assets/menuOptions.png'
import styles from './styles'
import {Entypo } from '@expo/vector-icons'

export default function Login ({navigation}){

    return(
        <ImageBackground 
            source={backgroundImage} style={styles.backgorund}>
                <View
                    style={styles.ct_text_introduction}>
                        <Text
                            style={styles.textIntroduction}>
                            Ola Lucas, seja bem vindo ao InvestInfo.
                            O que iremos ver hoje?
                        </Text>
                </View>
                <View
                    style={styles.ct_menu_icons}>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('Conceitos')}
                            style={styles.icons}>
                            <Entypo name="chat" size={70} color="black" />
                            <Text>Conceitos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('Noticias')}
                            style={styles.icons}>
                            <Entypo name="news" size={70} color="black" />
                            <Text>Noticias</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.icons}>
                            <Entypo name="help" size={70} color="black" />
                            <Text>Ajuda</Text>
                        </TouchableOpacity>
                </View>
        </ImageBackground>
    )
}