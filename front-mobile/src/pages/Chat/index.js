import React from 'react'
import { 
        ImageBackground,
        View, 
        Text, 
        TouchableOpacity,
        TextInput
} from 'react-native'
import backgroundImage from '../../../assets/chat.png'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

export default function Login ({navigation}){

    return(
        <ImageBackground 
            source={backgroundImage} style={styles.backgorund}>
                <Text>
                    Tela do chat
                </Text>
        </ImageBackground>
    )
}