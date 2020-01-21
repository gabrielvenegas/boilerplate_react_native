import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import { input, buttonText } from '../../shared/style/sharedStyles'
import style from './style'
import colors from '../../constants/colors'
import FastImage from 'react-native-fast-image'

const QrCodeProduct = ({ navigation }) => {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ paddingTop: '10%' }}>
        <FastImage
          style={{ width: 200, height: 200, marginLeft: '20%' }}
          source={{
            uri:
              'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={{ paddingTop: 15 }}>
          <Text
            style={{
              paddingBottom: 20,
              fontSize: 20,
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
          >
            Macbook Pro 2015
          </Text>
          <Text style={{ paddingTop: 10 }}>Cartão de Crédito</Text>
          <Text style={{ paddingTop: 10 }}>
            Retirada no Shopping Vila Velha
          </Text>
          <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>R$1500,00</Text>
          <View>
            <TouchableOpacity
              style={{
                marginTop: 10,
                padding: 15,
                backgroundColor: colors.lightGray,
              }}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={buttonText()}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default QrCodeProduct
