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
  Keyboard,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Yup from 'yup'
import styles from './styles'
import userService from '../../services/userService'

const Login = ({ login, updateLogin, navigation }) => {
  const [showModalError, setShowModalError] = useState(false)
  const [shrinkLogo, setShrinkLogo] = useState(false)
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    senha: Yup.string().required(),
  })

  const requestLogin = async ({ email, senha }) => {
    try {
      const { token } = await userService.login(email, senha)
      updateLogin({
        token,
      })
      navigation.navigate('Home')
    } catch (error) {
      setShowModalError(true)
    }
  }

  const keyboardWillShow = event => {
    console.log(event)
    setShrinkLogo(true)
  }

  const keyboardWillHide = event => {}

  useEffect(() => {
    const keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      keyboardWillShow
    )
  }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'undefined'}
      style={styles.containerForm}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.darkGray, colors.silverBlue, colors.darkGray]}
        style={styles.container}
      >
        <SafeAreaView style={styles.containerSafeArea}>
          <ModalError
            testID="modalLoginError"
            testIDButtonOk="buttonOkModalLoginError"
            isVisible={showModalError}
            title="Ops!"
            message={`Seu cadastro não foi encontrado, \n passa no RH!`}
            onPressClose={() => setShowModalError(false)}
          />
          {/* <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'undefined'}
            style={styles.containerForm}
          > */}
          <View style={styles.containerLogo}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode={shrinkLogo ? 'center' : 'contain'}
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
                  style={styles.emailField}
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
                  style={styles.loginButton}
                  onPress={formikProps.handleSubmit}
                >
                  <Text style={styles.loginButtonText}>Entrar</Text>
                </TouchableOpacity>
                <Link
                  testID="registerButton"
                  to="Register"
                  style={styles.registerButton}
                >
                  <Text style={styles.registerButtonText}>Registrar</Text>
                </Link>
              </View>
            )}
          </Formik>
          {/* </KeyboardAvoidingView> */}

          {/* <View style={styles.optionButton}>
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
        </View> */}
        </SafeAreaView>
      </LinearGradient>
    </KeyboardAvoidingView>
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
