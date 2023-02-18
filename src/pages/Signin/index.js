import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

import * as Animatable from 'react-native-animatable';

export default function SignIn() {
  return (
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Bem-Vindo(a)</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput placeholder='Digite um email...' style={styles.input}/>

            <Text style={styles.title}>Senha</Text>
            <TextInput placeholder='Digite uma senha...' style={styles.input}/>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
  );
}