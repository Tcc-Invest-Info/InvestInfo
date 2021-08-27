import React from 'react'
import { 
        ImageBackground,
        View, 
        Text, 
        TouchableOpacity,
        TextInput
} from 'react-native'
import backgroundImage from '../../../assets/menuOptions.png'
import styles from './styles'
import {Entypo } from '@expo/vector-icons'

export default function Login (){

    return(
        <ImageBackground 
            source={backgroundImage} style={styles.backgorund}>
                <View
                    style={styles.ct_bt_voltar}>
                        <TouchableOpacity>
                            <Entypo name="reply" size={50} color="black" style={styles.ion_back}/>
                        </TouchableOpacity>
                </View>
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
                            style={styles.icons}>
                            <Entypo name="chat" size={70} color="black" />
                            <Text>Conceitos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
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