import React, { Component } from 'react'
import CustomHeader from '../../components/Header'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { Formik } from 'formik'
import { input, label, buttonText } from '../../shared/style/sharedStyles'
import style from './style'
import colors from '../../constants/colors'
import { Icon } from 'react-native-elements'

const logout = () => {}

const Profile = ({ navigation }) => {
  return (
    <View>
      {/* <CustomHeader navigation={navigation} /> */}
      <View style={{ padding: 20 }}>
        <View
          style={{
            height: '88%',
            borderWidth: 1,
            marginTop: '20%',
            padding: 20,
          }}
        >
          <View
            style={{
              position: 'absolute',
              height: 200,
              width: 200,
              borderRadius: 200,
              top: -70,
              left: '23%',
              backgroundColor: colors.lightGray,
              zIndex: 10000,
            }}
          >
            <Icon
              containerStyle={style.icon}
              name="person"
              type="material"
              size={150}
              color="#fff"
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 'bold',
                fontStyle: 'italic',
                bottom: 20,
              }}
            >
              Alterar foto
            </Text>
            <Icon
              containerStyle={{ bottom: 15 }}
              name="camera-alt"
              type="material"
              size={30}
              color="#000"
            />
          </View>
          <Formik>
            {() => (
              <View style={{ paddingTop: '25%' }}>
                <Text style={style.label}>Nome</Text>
                <TextInput
                  style={input(false)}
                  editable={false}
                  value="Gabriel Enrique"
                />
                <Text style={style.label}>E-mail</Text>
                <TextInput
                  style={input(false)}
                  editable={false}
                  value="bielenegas@hotmail.com"
                />
                <Text style={style.label}>Senha</Text>
                <TextInput
                  style={input(false)}
                  editable={false}
                  value="27998479940"
                />
                <TouchableOpacity
                  testID="loginButton"
                  style={{
                    padding: 15,
                    marginTop: 15,
                    marginBottom: 10,
                    backgroundColor: colors.lightGray,
                    width: '100%',
                  }}
                >
                  <Text style={buttonText()}>Cobrança</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  testID="logoutButton"
                  style={{
                    padding: 15,
                    marginBottom: 10,
                    backgroundColor: colors.lightGray,
                    width: '100%',
                  }}
                  onPress={() => navigation.navigate('Auth')}
                >
                  <Text style={buttonText()}>Sair</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  )
}

export default Profile
