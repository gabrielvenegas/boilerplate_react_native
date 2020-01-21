import React, { useState } from 'react'
import FastImage from 'react-native-fast-image'
import { View, Text } from 'react-native'

const ProductInterest = ({ navigation }) => {
  return (
    <View>
      <FastImage
        style={{ width: 200, height: 200, marginLeft: '23%', marginTop: 40 }}
        source={{
          uri:
            'https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png',
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={{ fontSize: 24, padding: 10 }}>
        Parabéns! Você agora está na fila de interesse para este produto.
      </Text>
    </View>
  )
}

export default ProductInterest
