import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
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

export default function Cadastrar ({navigation}){

    function cadatroAlert(){
        Alert.alert('Cadastro de usuario', 
                    'cadastro realizado',[
            {
                text:'OK',
                onPress(){navigation.navigate('Login')
                }
            }
        ])
    }
    const state = {
        nome:'',
        email:'',
        senha:'',
        confirmasenha:''
    }

    return(
        <ImageBackground 
            source={backgroundImage} style={styles.backgorund}>
                    <View
                        style={styles.ct_Cadastro}>
                         <Text style={styles.text_Cadas}>Cadas</Text>
                         <Text style={styles.text_tro}>tro</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome completo'
                        value={state.nome}/>
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
                    <TextInput
                        style={styles.input}
                        placeholder='Confirmar senha'
                        secureTextEntry={true}
                        value={state.confirmasenha}/>
                    <View
                        style={styles.container}>
                        <TouchableOpacity

                            onPress={()=> cadatroAlert()}
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