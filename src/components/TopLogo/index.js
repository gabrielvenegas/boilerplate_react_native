import React, { Component } from 'react'
import { Text } from 'react-native'
import colors from '../../constants/colors'

const TopLogo = () => {
  return (
    <Text
      style={{
        fontSize: 26,
        color: colors.black,
        fontWeight: 'bold',
        fontStyle: 'italic',
      }}
    >
      Zima
    </Text>
  )
}

export default TopLogo
