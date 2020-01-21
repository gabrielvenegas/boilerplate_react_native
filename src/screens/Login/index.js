import FormikTextInput from 'boilerplate_app/src/components/Formik/FormikTextInput'
import Link from 'boilerplate_app/src/components/Link'
import ModalError from 'boilerplate_app/src/components/Modal/ModalError'
import colors from 'boilerplate_app/src/constants/colors'
import images from 'boilerplate_app/src/constants/images'
import { LoginCreators } from 'boilerplate_app/src/store/ducks/login'
import { Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Yup from 'yup'
import styles from './styles'
import {
  containerCenter,
  containerLogo,
  containerSafeArea,
  containerForm,
  buttonText,
  button,
  input,
} from '../../shared/style/sharedStyles'
import authService from '../../services/authService'

const Login = ({ login, updateLogin, navigation }) => {
  const [showModalError, setShowModalError] = useState(false)
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email(),
    // .required(),
    senha: Yup.string(),
  })

  const requestLogin = async ({ email, senha }) => {
    try {
      // const { access_token } = await authService.login(email, senha, 'password')
      // updateLogin({
      //   token: access_token,
      // })
      navigation.navigate('Register')
    } catch (error) {
      setShowModalError(true)
    }
  }

  return (
    <ScrollView style={containerSafeArea()}>
      <ModalError
        testID="modalLoginError"
        testIDButtonOk="buttonOkModalLoginError"
        isVisible={showModalError}
        title="Ops!"
        message={`Ocorreu um problema ao autenticar. Verifique seu login e senha`}
        onPressClose={() => setShowModalError(false)}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'undefined'}
        style={containerForm()}
      >
        <View style={containerLogo()}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Formik
          initialValues={{ email: '', senha: '' }}
          onSubmit={requestLogin}
          validationSchema={LoginSchema}
        >
          {formikProps => (
            <View style={styles.containerForm}>
              <FormikTextInput
                testID="emailField"
                testIDErrorText="emailErrorText"
                name="name"
                keyboardType="email-address"
                {...formikProps}
                style={input()}
                errorStyle={{ borderBottomColor: '#FF4140' }}
                placeholder="Nome"
              />
              <FormikTextInput
                testID="passwordField"
                testIDErrorText="passwordErrorText"
                name="email"
                secureTextEntry
                {...formikProps}
                style={styles.passwordField}
                errorStyle={{ borderBottomColor: '#FF4140' }}
                placeholder="E-mail"
              />
              <TouchableOpacity
                testID="loginButton"
                style={button()}
                onPress={formikProps.handleSubmit}
              >
                <Text style={buttonText()}>Entrar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                testID="loginButton"
                style={button()}
                onPress={formikProps.handleSubmit}
              >
                <Text style={buttonText()}>Entrar com Facebook</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...LoginCreators,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
