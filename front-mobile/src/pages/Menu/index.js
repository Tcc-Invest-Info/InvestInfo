import React, { useState } from 'react'
import {
    ImageBackground,
    View,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native'
import backgroundImage from '../../../assets/fundoMenu.png'
import styles from './styles'
import { Entypo } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/core'

export default function Menu({ navigation }) {

    const route = useRoute()
    const [user, setUser] = useState(route.params.user)

    function ajudaAlert() {
        Alert.alert('Menu de opções',
            '"Chatbot": você ira interagir com um Chatbot ' +
            'sobre diversos assuntos relaciondos a educação financeira    ' +

            '"Noticias": Acesso as principais noticias sobre  educação financeira', [
            {
                text: 'OK',
            }
        ])
    }

    return (
        <ImageBackground
            source={backgroundImage} style={styles.backgorund}>
            <View
                style={styles.ct_text_introduction}>
                <Text
                    style={styles.textIntroduction}>
                    Olá {user.name}, seja bem vindo ao InvestInfo.
                    O que iremos ver hoje?
                </Text>
            </View>
            <View
                style={styles.ct_menu_icons}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Conceitos')}
                    style={styles.icons}>
                    <Entypo name="chat" size={70} color="black" />
                    <Text>Chatbot</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Noticias')}
                    style={styles.icons}>
                    <Entypo name="news" size={70} color="black" />
                    <Text>Noticias</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icons}
                    onPress={() => ajudaAlert()}>
                    <Entypo name="help" size={70} color="black" />
                    <Text>Ajuda</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}