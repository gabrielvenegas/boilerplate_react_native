import React, { Component } from 'react'
import style from './style'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import Link from '../../Link'

const QDItem = ({ to, icon, title }) => {
  return (
    <View style={style.container}>
      <Link to={to} style={style.button}>
        <Icon
          containerStyle={style.icon}
          name={icon}
          type="material"
          size={32}
          color="#fff"
        />
        <Text style={style.buttonText}>{title}</Text>
      </Link>
    </View>
  )
}

export default QDItem
