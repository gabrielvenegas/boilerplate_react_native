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
    email: Yup.string()
      .email()
      .required(),
    senha: Yup.string().required(),
  })

  const requestLogin = async ({ email, senha }) => {
    try {
      const { access_token } = await authService.login(email, senha, 'password')
      updateLogin({
        token: access_token,
      })
      navigation.navigate('Home')
    } catch (error) {
      setShowModalError(true)
    }
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[colors.darkGray, colors.silverBlue, colors.darkGray]}
      style={containerCenter()}
    >
      <SafeAreaView style={(containerSafeArea(), { paddingTop: '15%' })}>
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
                  name="email"
                  keyboardType="email-address"
                  {...formikProps}
                  style={input()}
                  errorStyle={{ borderBottomColor: '#FF4140' }}
                  placeholder="E-mail"
                />
                <FormikTextInput
                  testID="passwordField"
                  testIDErrorText="passwordErrorText"
                  name="senha"
                  secureTextEntry
                  {...formikProps}
                  style={styles.passwordField}
                  errorStyle={{ borderBottomColor: '#FF4140' }}
                  placeholder="Senha"
                />
                <TouchableOpacity
                  testID="loginButton"
                  style={button(colors.lightblue)}
                  onPress={formikProps.handleSubmit}
                >
                  <Text style={buttonText()}>Entrar</Text>
                </TouchableOpacity>
                <Link
                  testID="registerButton"
                  to="Register"
                  style={button(colors.limeGreen)}
                >
                  <Text style={buttonText()}>Registrar</Text>
                </Link>
              </View>
            )}
          </Formik>
          <View style={styles.optionButton}>
            <View>
              <Link>
                <Text style={{ color: colors.white }}>Como funciona</Text>
              </Link>
            </View>
            <View>
              <Link>
                <Text style={{ color: colors.white }}>Recuperar senha</Text>
              </Link>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
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
