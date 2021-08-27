import React from 'react'
import { 
        ImageBackground,
        View, 
        Text, 
        TouchableOpacity,
        TextInput
} from 'react-native'
import backgroundImage from '../../../assets/noticias.png'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

export default function ChatBoot ({navigation}){

    return(
        <ImageBackground 
        source={backgroundImage} style={styles.backgorund}>

         </ImageBackground>
    )
}