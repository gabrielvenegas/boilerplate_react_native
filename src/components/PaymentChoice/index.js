import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import { input, buttonText } from '../../shared/style/sharedStyles'
import style from './style'
import colors from '../../constants/colors'
import { ScrollView } from 'react-native-gesture-handler'

const PaymentChoice = ({ navigation }) => {
  return (
    <ScrollView>
      <Formik>
        {() => (
          <View style={{ paddingTop: '10%' }}>
            <Text style={style.label}>Cartão de crédito</Text>
            <TextInput
              style={input(false)}
              editable={false}
              value="Gabriel Enrique"
            />
            <Text style={style.label}>Cartão de débito</Text>
            <TextInput
              style={input(false)}
              editable={false}
              value="bielenegas@hotmail.com"
            />
            <Text style={style.label}>Pagar na retirada</Text>
            <TextInput
              style={input(false)}
              editable={false}
              value="27998479940"
            />
            <TouchableOpacity
              testID="loginButton"
              style={{
                padding: 15,
                marginTop: '10%',
                marginBottom: 10,
                backgroundColor: colors.lightGray,
                width: '100%',
              }}
              onPress={() => {
                navigation.navigate('QrCodeProduct')
              }}
            >
              <Text style={buttonText()}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

export default PaymentChoice
