import React from 'react'
import { 
        ImageBackground,
        View, 
        Text, 
        TouchableOpacity,
        TextInput
} from 'react-native'
import backgroundImage from '../../../assets/background.png'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

export default function Login ({navigation}){

    return(
        <ImageBackground 
            source={backgroundImage} style={styles.backgorund}>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome completo'/>
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'/>
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        secureTextEntry={true}/>
                    <TextInput
                        style={styles.input}
                        placeholder='Confirmar senha'
                        secureTextEntry={true}/>
                    <View
                        style={styles.container}>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('Login')}
                            style={styles.bt_cadastrar}>
                            <Text
                                style={styles.text_cadastrar}>
                                Cadastrar
                            </Text>
                        </TouchableOpacity>
                    </View>
        </ImageBackground>
    )
}