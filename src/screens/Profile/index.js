import React, { Component } from 'react'
import CustomHeader from '../../components/Header'
import { View, TextInput, Text } from 'react-native'
import { Formik } from 'formik'
import { input, label } from '../../shared/style/sharedStyles'
import style from './style'

const Profile = ({ navigation }) => {
  return (
    <View>
      <CustomHeader
        subtitle="MEUS DADOS"
        showSubtitle={true}
        navigation={navigation}
      />

      <Formik>
        {() => (
          <View style={style.container}>
            <Text style={style.label}>Nome</Text>
            <TextInput
              style={input(false)}
              editable={false}
              value="Gabriel Enrique"
            />
            <Text style={style.label}>Celular</Text>
            <TextInput
              style={input(false)}
              editable={false}
              value="27998479940"
            />
            <Text style={style.label}>E-mail</Text>
            <TextInput
              style={input(false)}
              editable={false}
              value="bielenegas@hotmail.com"
            />
            <Text style={style.label}>Data de Cadastro</Text>
            <TextInput
              style={input(false)}
              editable={false}
              value="11/19/2019"
            />
          </View>
        )}
      </Formik>
    </View>
  )
}

export default Profile
