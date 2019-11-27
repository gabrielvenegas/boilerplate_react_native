import React, { Component } from 'react'
import style from './style'
import { View, Text } from 'react-native'

const Subtitle = ({ subtitle }) => (
  <View style={style.subtitle}>
    <Text style={style.subtitleText}>{subtitle}</Text>
  </View>
)

export default Subtitle
