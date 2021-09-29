import React, { Component } from "react"
import { ImageBackground, View } from "react-native"
import { GiftedChat } from "react-native-gifted-chat"
import { Dialogflow_V2 } from "react-native-dialogflow"
import { dialogflowConfig } from "./env"
import styles from './styles'
import backgroundImage from '../../../assets/background.png'


const BOT_USER = {
    _id: 2,
    name: 'FAQ Bot',
    avatar: 'https://st4.depositphotos.com/4177785/21347/v/450/depositphotos_213477450-stock-illustration-chatbot-three-dots-speech-bubble.jpg'
  };
  
  class chatBot extends Component {
    state = {
      messages: [
        {
          _id: 1,
          text: 'Olá! Bem - Vindo ao InvestInfo\n'+
                'Sobre o que você gostaria de saber?\n\n\n'+
                '1.Bancos\n'+ 
                '2.Corretoras\n'+
                '3.Renda Fixa\n'+
                '4.Renda Variável\n'+
                '5.Bolsa de Valores\n'+
                '6.Perfil de Investidor\n'+
                '7.Outros Conceitos\n',
          createdAt: new Date(),
          user: BOT_USER
        }
      ]
    };
  
    componentDidMount() {
      Dialogflow_V2.setConfiguration(
        dialogflowConfig.client_email,
        dialogflowConfig.private_key,
        Dialogflow_V2.LANG_ENGLISH_US,
        dialogflowConfig.project_id
      );
    }
  
    handleGoogleResponse(result) {
      let text = result.queryResult.fulfillmentMessages[0].text.text[0];
      this.sendBotResponse(text);
    }
  
    onSend(messages = []) {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages)
      }));
  
      let message = messages[0].text;
      Dialogflow_V2.requestQuery(
        message,
        result => this.handleGoogleResponse(result),
        error => console.log(error)
      );
    }
  
    sendBotResponse(text) {
      let msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT_USER
      };
  
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, [msg])
      }));
    }
  
    render() {
      return (
        <ImageBackground
          source={backgroundImage} style={styles.backgorund}>
          <View style={{ flex: 1}}>
            <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              user={{ _id: 1}}
              placeholder='Insira sua resposta'
            />
          </View>
        </ImageBackground>
      );
    }
  }
  
  export default chatBot;