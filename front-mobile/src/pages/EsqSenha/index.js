import React from 'react'
import { 
        ImageBackground,
        View, 
        Text, 
        TouchableOpacity,
        TextInput,
        Alert
} from 'react-native'
import backgroundImage from '../../../assets/background.png'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

export default function EsqSenha ({navigation}){

    function cadatroAlert(){
        Alert.alert('Redefinir senha', 
                    'Senha enviada para seu E-mail',[
            {
                text:'OK',
                onPress(){navigation.navigate('Login')
                }
            }
        ])
    }

    return(
        <ImageBackground 
            source={backgroundImage} style={styles.backgorund}>
                <View
                    style={styles.ct_Central}>
                        <Text
                            style={styles.text_email}>
                                Enviar senha para meu E-mail</Text>
                        <TextInput
                             style={styles.input}
                             placeholder='Informe seu email'/>
                        <TouchableOpacity
                        onPress={()=> cadatroAlert()}
                            style={styles.bt_redefinir}>
                            <Text
                                style={styles.text_redefinir}>
                                Enviar
                            </Text>
                        </TouchableOpacity>
                </View>
        </ImageBackground>
    )
}