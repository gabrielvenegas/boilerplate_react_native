import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CustomHeader from '../../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import style from './style'
import colors from '../../constants/colors'
import { Button } from 'react-native-elements'
import MockList from '../../components/MockList'

const Mock = ({ navigation }) => {
  return (
    <View>
      <CustomHeader
        navigation={navigation}
        showSubtitle={true}
        subtitle="Meus simulados"
      />
      <ScrollView style={style.container}>
        <Button buttonStyle={style.button} title="Gerar simulado" />
        <MockList />
      </ScrollView>
    </View>
  )
}

export default Mock
