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
import { AntDesign } from '@expo/vector-icons';

export default function Login (){

    return(
        <ImageBackground 
            source={backgroundImage} style={styles.backgorund}>
                <View
                    style={styles.ct_bt_voltar}>
                        <TouchableOpacity>
                            <AntDesign name="back" size={40} color="black" style={styles.ion_back}/>
                        </TouchableOpacity>
                </View>

                <View
                    style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='Informe seu email'/>
                </View>

                    <Text
                        style={styles.text_email}>
                        Uma nova senha sera enviada para seu email
                    </Text>
                <View
                    style={styles.container}>
                    <TouchableOpacity
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