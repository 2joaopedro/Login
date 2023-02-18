import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import Styles from './styles';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View  style={Styles.container}>
      <View style={Styles.containerLogo}>
        <Animatable.Image  animation="flipInY" source={require('../../assets/logo.png')} style={{width: '100%',}} resizeMode="contain"/>
      </View>   

      <Animatable.View  delay={600} animation="fadeInUp" style={Styles.containerForm}>
          <Text style={Styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
          <Text style={Styles.text}>Faça login para começar</Text>

          <TouchableHighlight  style={Styles.button} onPress={() => navigation.navigate('SignIn')}>
            <Text style={Styles.buttonText}>Acessar</Text>
          </TouchableHighlight>
      </Animatable.View>
    </View>
  );
}