import React from 'react'
import { Text, View } from 'react-native'
import Link from '../Link'
import style from './style'
import { Icon } from 'react-native-elements'

const HomeButton = ({ title = 'DEFAULT', to = 'Login', icon = 'home' }) => {
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

export default HomeButton
