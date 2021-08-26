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

export default function Login (){

    return(
        <ImageBackground 
            source={backgroundImage} style={styles.backgorund}>
                <View
                    style={styles.container}>
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
                </View>
                <View
                    style={styles.container}>
                    <TouchableOpacity
                        style={styles.bt_acessar}>
                        <Text
                            style={styles.text_acessar}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
    )
}