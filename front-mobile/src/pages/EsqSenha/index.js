import React, { useEffect, useState } from 'react'
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
import api from '../../api';
import { Entypo } from '@expo/vector-icons';

export default function EsqSenha({ navigation }) {

    const [email, setEmail] = useState('');

    async function putReqSenha() {
        if (email === "") {
            Alert.alert('Existe campos em branco',
                'login não realizado', [
                {
                    text: 'OK',
                }
            ])
            return
        }
        await api.put("/users/esqueciSenha", {
            email: email
        })
            .then(() => {
                Alert.alert('Redefinir senha',
                    'Senha enviada para seu E-mail', [
                    {
                        text: 'OK',
                        onPress() {
                            navigation.navigate('Login')
                        }
                    }
                ])
            })
            .catch(error => Alert.alert('Erro',
                'Erro para recuperar senha', [
                {
                    text: 'OK',
                }
            ]));
    }

    return (
        <ImageBackground
            source={backgroundImage} style={styles.backgorund}>
            <View
                style={styles.ct_Central}>
                <Text
                    style={styles.text_email}>
                    Enviar senha para meu E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Informe seu email'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text)
                    }} />
                <TouchableOpacity
                    onPress={() => putReqSenha()}
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