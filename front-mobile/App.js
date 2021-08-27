import React from 'react';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro'
import EsqSenha from './src/pages/EsqSenha'
import Menu from './src/pages/Menu'
import Chat from './src/pages/Chat'
import Noticias from './src/pages/Noticias'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();


export default function App(){
  return(
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name= "Login" component={Login}/>
              <Stack.Screen name= "Cadastro" component={Cadastro}/>
              <Stack.Screen name= "EsqSenha" component={EsqSenha}/>
              <Stack.Screen name= "Menu" component={Menu}/>
              <Stack.Screen name= "Conceitos" component={Chat}/>
              <Stack.Screen name= "Noticias" component={Noticias}/>
          </Stack.Navigator>
      </NavigationContainer>
  )
}
