import React, { Component } from 'react'
import style from './style'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import Link from '../../Link'

const QDItem = ({ name, active, code, createdAt, unabledAt, icon }) => {
  const params = { name, active, code, createdAt, unabledAt }
  return (
    <View style={style.container}>
      <Link to="Detail" params={params} style={style.button}>
        <Icon
          containerStyle={style.icon}
          name={icon}
          type="material"
          size={24}
          color="#fff"
        />
        <Text style={style.buttonText}>{name}</Text>
      </Link>
    </View>
  )
}

export default QDItem
