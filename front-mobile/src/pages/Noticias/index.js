import React from 'react'
import { 
        ImageBackground,
        View, 
        Text, 
        TouchableOpacity,
        ScrollView
} from 'react-native'
import backgroundImage from '../../../assets/noticias.png'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

export default function ChatBoot ({navigation}){

    return(
        <View style={styles.container}>
            <View style={styles.container_Image}>
                <ImageBackground 
                    source={backgroundImage} style={styles.backgorund}>
                </ImageBackground>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}>
                     Dólar Comercial: Acompanhe no UOL Economia a cotação de hoje, veja gráficos,
                     tabelas e histórico de cotações. Conheça também o conversor de moedas.
                    </Text>
                </View>                
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}>
                     Dólar Comercial: Acompanhe no UOL Economia a cotação de hoje, veja gráficos,
                     tabelas e histórico de cotações. Conheça também o conversor de moedas.
                    </Text>
                </View>                
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}>
                     Dólar Comercial: Acompanhe no UOL Economia a cotação de hoje, veja gráficos,
                     tabelas e histórico de cotações. Conheça também o conversor de moedas.
                    </Text>
                </View>                
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}>
                     Dólar Comercial: Acompanhe no UOL Economia a cotação de hoje, veja gráficos,
                     tabelas e histórico de cotações. Conheça também o conversor de moedas.
                    </Text>
                </View>                
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}>
                     Dólar Comercial: Acompanhe no UOL Economia a cotação de hoje, veja gráficos,
                     tabelas e histórico de cotações. Conheça também o conversor de moedas.
                    </Text>
                </View>                
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}>
                     Dólar Comercial: Acompanhe no UOL Economia a cotação de hoje, veja gráficos,
                     tabelas e histórico de cotações. Conheça também o conversor de moedas.
                    </Text>
                </View>                
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}>
                     Dólar Comercial: Acompanhe no UOL Economia a cotação de hoje, veja gráficos,
                     tabelas e histórico de cotações. Conheça também o conversor de moedas.
                    </Text>
                </View>                
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}>
                     Dólar Comercial: Acompanhe no UOL Economia a cotação de hoje, veja gráficos,
                     tabelas e histórico de cotações. Conheça também o conversor de moedas.
                    </Text>
                </View>                
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}>
                     Dólar Comercial: Acompanhe no UOL Economia a cotação de hoje, veja gráficos,
                     tabelas e histórico de cotações. Conheça também o conversor de moedas.
                    </Text>
                </View>                
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}>
                     Dólar Comercial: Acompanhe no UOL Economia a cotação de hoje, veja gráficos,
                     tabelas e histórico de cotações. Conheça também o conversor de moedas.
                    </Text>
                </View>                
            </ScrollView>
        </View>
    )
}