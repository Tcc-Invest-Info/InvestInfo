import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro'
import Teste from './src/pages/Teste'
import EsqSenha from './src/pages/EsqSenha'

export default function App() {
  return (
    <View style={styles.container}>
      <EsqSenha/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
