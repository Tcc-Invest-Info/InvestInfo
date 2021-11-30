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
import api from '../../api';
import styles from './styles'

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function postLogin() {
        if (email === "" || senha === "") {
            Alert.alert('Existe campos em branco',
                'login não realizado', [
                {
                    text: 'OK',
                }
            ])
            return
        }
        await api.post("/users/login", {
            email: email,
            password: senha
        })
            .then((response) => {
                navigation.navigate('Menu', { user: response.data })
            })
            .catch(error => Alert.alert('Erro para logar',
                'Usuário ou senha incorretos', [
                {
                    text: 'OK',
                }
            ]));
    }


    return (
        <ImageBackground
            source={backgroundImage} style={styles.backgorund}>
            <View
                style={styles.ct_Login}>
                <Text style={styles.text_Log}>Entrar</Text>
            </View>
            <View
                style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text)
                    }} />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={(text) => {
                        setSenha(text)
                    }} />
            </View>
            <View
                style={styles.ct_esq_senha}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Redefinir senha')}>
                    <Text
                        style={styles.bt_esq_senha}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
            <View
                style={styles.container}>
                <TouchableOpacity
                    onPress={() => postLogin()}
                    style={styles.bt_acessar}>
                    <Text
                        style={styles.text_acessar}>
                        Acessar
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Cadastro')}>
                    <Text
                        style={styles.bt_cadastro}>
                        Novo por aqui? cadastre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}