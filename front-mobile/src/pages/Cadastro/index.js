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