import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
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
import api from '../../api'
import styles from './styles'

export default function Cadastrar({ navigation }) {

    const [usuario, setUsuario] = useState();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarsenha, setConfirmarSenha] = useState('');

    async function postUser() {
        await api.post("/users", {
            name: nome,
            email: email,
            password: senha
        })
            .then(response => {
                setUsuario(response.data)
                Alert.alert('Cadastro de usuario',
                    'cadastro realizado', [
                    {
                        text: 'OK',
                        onPress() { navigation.navigate('Login') }
                    }
                ])
            })
            .catch(error => console.log(error));
    }

    function cadatroAlert() {
        if (senha !== confirmarsenha) {
            Alert.alert('Senha divergente',
                'cadastro não realizado', [
                {
                    text: 'OK',
                }
            ])
            return
        }
        postUser()
    }

    return (
        <ImageBackground
            source={backgroundImage} style={styles.backgorund}>
            <View
                style={styles.ct_Cadastro}>
                <Text style={styles.text_Cadas}>Cadastrar</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder='Nome completo'
                value={nome}
                onChangeText={(text) => {
                    setNome(text)
                }} />
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
            <TextInput
                style={styles.input}
                placeholder='Confirmar senha'
                secureTextEntry={true}
                value={confirmarsenha}
                onChangeText={(text) => {
                    setConfirmarSenha(text)
                }} />
            <View
                style={styles.container}>
                <TouchableOpacity

                    onPress={() => cadatroAlert()}
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