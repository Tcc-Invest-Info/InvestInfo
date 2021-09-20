import React from 'react'
import { 
        ImageBackground,
        View, 
        Text, 
        Linking,
        ScrollView
} from 'react-native'
import backgroundImage from '../../../assets/noticias.png'
import styles from './styles'

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
                    <Text style={styles.noticias}
                     onPress={()=>{
                          Linking.openURL('https://economia.uol.com.br/cotacoes/cambio/')
                        }}>
                        Dólar Comercial: Acompanhe no UOL Economia a cotação de hoje, veja gráficos,
                        tabelas e histórico de cotações. Conheça também o conversor de moedas.
                    </Text>
                </View>                                                                                 
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}
                     onPress={()=>{
                          Linking.openURL('https://www.infomoney.com.br/mercados/ibovespa-cai-forte-em-meio-a-preocupacoes-com-divida-da-evergrande-e-nova-queda-do-minerio-dolar-sobe-a-r-532/')
                        }}>
                       Ibovespa cai mais de 3% seguindo exterior em meio a caso Evergrande; dólar sobe a R$ 5,32
                    </Text>
                </View>                                                                                 
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}
                     onPress={()=>{
                          Linking.openURL('https://g1.globo.com/economia/noticia/2021/09/20/bovespa.ghtml')
                        }}>
                       Bovespa cai mais de 2% e fecha na pior pontuação do ano
                    </Text>
                </View>                                                                                 
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}
                     onPress={()=>{
                          Linking.openURL('https://economia.uol.com.br/cotacoes/noticias/redacao/2021/09/20/fechamento-dolar-ibovespa-20-setembro.htm')
                        }}>
                       Dólar sobe 0,93%, a R$ 5,331, com temor sobre Evergrande; Bolsa tomba 2,33
                    </Text>
                </View>                                                                                 
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}
                     onPress={()=>{
                          Linking.openURL('https://www.infomoney.com.br/guias/mercado-de-acoes/')
                        }}>
                      Entenda como funciona o mercado de ações e a bolsa de valores
                    </Text>
                </View>                                                                                 
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}
                     onPress={()=>{
                          Linking.openURL('https://economia.uol.com.br/cotacoes/cambio/')
                        }}>
                        Dólar Comercial: Acompanhe no UOL Economia a cotação de hoje, veja gráficos,
                        tabelas e histórico de cotações. Conheça também o conversor de moedas.
                    </Text>
                </View>                                                                                 
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}
                     onPress={()=>{
                          Linking.openURL('https://www.infomoney.com.br/mercados/ibovespa-cai-forte-em-meio-a-preocupacoes-com-divida-da-evergrande-e-nova-queda-do-minerio-dolar-sobe-a-r-532/')
                        }}>
                       Ibovespa cai mais de 3% seguindo exterior em meio a caso Evergrande; dólar sobe a R$ 5,32
                    </Text>
                </View>                                                                                 
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}
                     onPress={()=>{
                          Linking.openURL('https://g1.globo.com/economia/noticia/2021/09/20/bovespa.ghtml')
                        }}>
                       Bovespa cai mais de 2% e fecha na pior pontuação do ano
                    </Text>
                </View>                                                                                 
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}
                     onPress={()=>{
                          Linking.openURL('https://economia.uol.com.br/cotacoes/noticias/redacao/2021/09/20/fechamento-dolar-ibovespa-20-setembro.htm')
                        }}>
                       Dólar sobe 0,93%, a R$ 5,331, com temor sobre Evergrande; Bolsa tomba 2,33
                    </Text>
                </View>                                                                                 
                <View style={styles.container_Noticias}>
                    <Text style={styles.noticias}
                     onPress={()=>{
                          Linking.openURL('https://www.infomoney.com.br/guias/mercado-de-acoes/')
                        }}>
                      Entenda como funciona o mercado de ações e a bolsa de valores
                    </Text>
                </View>                                                                                 
            </ScrollView>
        </View>
    )
}