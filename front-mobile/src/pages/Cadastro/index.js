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