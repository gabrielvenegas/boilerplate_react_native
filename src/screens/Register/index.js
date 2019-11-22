import FormikTextInput from 'boilerplate_app/src/components/Formik/FormikTextInput'
import ModalError from 'boilerplate_app/src/components/Modal/ModalError'
import colors from 'boilerplate_app/src/constants/colors'
import images from 'boilerplate_app/src/constants/images'
import Link from 'boilerplate_app/src/components/Link'
import { Formik, FieldArray, Field } from 'formik'
import React, { useState } from 'react'
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Yup from 'yup'
import styles from './styles'
import {
  containerCenter,
  containerLogo,
  containerForm,
  containerSafeArea,
  buttonText,
  button,
  label,
  input,
} from '../../shared/style/sharedStyles'
import { LoginCreators } from 'boilerplate_app/src/store/ducks/login'
import { directive } from '@babel/types'

const Login = ({ updateLogin }) => {
  const [showModalError, setShowModalError] = useState(false)
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    cpf: Yup.string().required(),
    telefone: Yup.string().required(),
    nascimento: Yup.string().required(),
    senha: Yup.string().required(),
    confirmacao: Yup.string().required(),
  })

  const registerForm = [
    {
      key: 1,
      field: 'name',
      name: 'Nome',
      keyboardType: 'text',
    },
    {
      key: 2,
      field: 'birthDate',
      name: 'Data de nascimento',
      keyboardType: 'text',
    },
    {
      key: 3,
      field: 'email',
      name: 'E-mail',
      keyboardType: 'text',
    },
    {
      key: 4,
      field: 'cpf',
      name: 'CPF',
      keyboardType: 'text',
    },
    {
      key: 5,
      field: 'cellphone',
      name: 'Celular',
      keyboardType: 'text',
    },
  ]

  const _formFields = formikProps => {
    return registerForm.map(({ key, field, name, keyboardType }) => {
      return (
        <View key={key}>
          <Text style={label()}>{name}</Text>
          <FormikTextInput
            name={field}
            keyboardType={keyboardType}
            {...formikProps}
            style={input()}
            errorStyle={{ borderBottomColor: '#FF4140' }}
          />
        </View>
      )
    }, formikProps)
  }

  const requestRegister = async () => {
    updateLogin({
      token: 't=este',
    })
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[colors.darkGray, colors.silverBlue, colors.darkGray]}
      style={containerCenter()}
    >
      <SafeAreaView style={containerSafeArea()}>
        {/* <KeyboardAvoidingView behavior={'padding'}> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <ModalError
            isVisible={showModalError}
            title="Ops!"
            message={`Seu cadastro não foi encontrado, \n passa no RH!`}
            onPressClose={() => setShowModalError(false)}
          />
          <View style={containerLogo()}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={containerForm()}>
            <Formik
              initialValues={{
                name: '',
                birthDate: '',
                email: '',
                cpf: '',
                cell: '',
              }}
              onSubmit={requestRegister}
              validationSchema={LoginSchema}
            >
              {formikProps => (
                <>
                  <FieldArray
                    name="fields"
                    render={() => _formFields(formikProps)}
                  />
                  <View>
                    <TouchableOpacity
                      onPress={formikProps.handleSubmit}
                      style={button(colors.lightblue)}
                    >
                      <Text style={buttonText()}>Registrar</Text>
                    </TouchableOpacity>
                    <Link style={button()} to="Login">
                      <Text style={buttonText()}>Voltar</Text>
                    </Link>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
        {/* </KeyboardAvoidingView> */}
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
