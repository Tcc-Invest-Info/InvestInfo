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
                        placeholder='E-mail'/>
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        secureTextEntry={true}/>
                </View>
                <View
                    style={styles.ct_esq_senha}>
                        <TouchableOpacity>
                            <Text
                                style={styles.bt_esq_senha}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                </View>
                <View
                    style={styles.container}>
                    <TouchableOpacity
                        style={styles.bt_acessar}>
                        <Text
                            style={styles.text_acessar}>
                            Acessar
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.container}>
                    <TouchableOpacity>
                        <Text
                            style={styles.bt_cadastro}>
                            Novo por aqui? cadastre-se
                        </Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
    )
}