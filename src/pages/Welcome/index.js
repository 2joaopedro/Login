import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './styles';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View  style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image  animation="flipInY" source={require('../../assets/logo.png')} style={{width: '100%',}} resizeMode="contain"/>
      </View>   

      <Animatable.View  delay={600} animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
          <Text style={styles.text}>Faça login para começar</Text>

          <TouchableHighlight  style={styles.button} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableHighlight>
      </Animatable.View>
    </View>
  );
}