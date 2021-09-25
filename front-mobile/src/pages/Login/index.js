import React, { useEffect, useState } from 'react'
import { 
        ImageBackground,
        View, 
        Text, 
        TouchableOpacity,
        TextInput
} from 'react-native'
import backgroundImage from '../../../assets/background.png'
import api from '../../api';
import styles from './styles'

export default function Login ({ navigation }){

   /* const[login, setLogin] = useState(); 

    useEffect(() => {
        getLogin();
    })

    async function getLogin() {
        await api.get("/login")
        .then(response => console.log(response))
        .catch(error => console.log(error));
  }  */ 

    const state = {
        email:'',
        senha:'',
    }

    return(
        <ImageBackground 
            source={backgroundImage} style={styles.backgorund}>
                <View 
                    style={styles.ct_Login}>
                    <Text style={styles.text_Log}>Log</Text>
                    <Text style={styles.text_in}>in</Text>
                </View>
                <View
                    style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        keyboardType='email-address'
                        value={state.email}/>
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        secureTextEntry={true}
                        value={state.senha}/>
                </View>
                <View
                    style={styles.ct_esq_senha}>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('Redefinir senha')}>
                            <Text
                                style={styles.bt_esq_senha}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                </View>
                <View
                    style={styles.container}>
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('Menu')}
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
                        onPress={()=> navigation.navigate('Cadastro')}>
                        <Text
                            style={styles.bt_cadastro}>
                            Novo por aqui? cadastre-se
                        </Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
    )
}