import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CustomHeader from '../../components/Header'
import { Image } from 'react-native'
import style from './style'

const About = ({ navigation }) => {
  return (
    <View>
      <CustomHeader
        navigation={navigation}
        showSubtitle={true}
        subtitle="SOBRE O APP"
      />
      <View style={style.container}>
        <View style={style.firstTextContainer}>
          <Text style={style.title}>PRATICANDO</Text>
          <Text style={style.firstText}>
            É uma ferramenta especializada na preparação para o Processo
            Seletivo à Categoria de Praticante de Prático através da sua
            plataforma de exercícios e seu aplicativo
          </Text>
        </View>
        <View>
          <Image
            resizeMode="center"
            source={require('../../assets/img/mascote.png')}
          />
        </View>
      </View>
      <View style={style.containerReverse}>
        <View>
          <Text>
            Através dela é possível resolver exercícios que foram criados de
            forma sequencial, como se fosse um resumo da matéria. Pode-se
            escolher também a opção “Simulados” e treinar com a frequência que
            escolher.
          </Text>
        </View>
      </View>
    </View>
  )
}

export default About
