import FormikTextInput from 'boilerplate_app/src/components/Formik/FormikTextInput'
import ModalError from 'boilerplate_app/src/components/Modal/ModalError'
import colors from 'boilerplate_app/src/constants/colors'
import images from 'boilerplate_app/src/constants/images'
import Link from 'boilerplate_app/src/components/Link'
import { Formik, FieldArray } from 'formik'
import React, { useState } from 'react'
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
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
import authService from '../../services/authService'

const Register = () => {
  const [showModalError, setShowModalError] = useState(false)
  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    cpf: Yup.string().required(),
    birthDate: Yup.date().required(),
    cell: Yup.string().required(),
  })

  const registerForm = [
    {
      key: 1,
      field: 'name',
      name: 'Nome',
      keyboardType: 'default',
    },
    {
      key: 2,
      field: 'birthDate',
      name: 'Data de nascimento',
      keyboardType: 'number-pad',
    },
    {
      key: 3,
      field: 'email',
      name: 'E-mail',
      keyboardType: 'default',
    },
    {
      key: 4,
      field: 'cpf',
      name: 'CPF',
      keyboardType: 'number-pad',
    },
    {
      key: 5,
      field: 'cell',
      name: 'Celular',
      keyboardType: 'phone-pad',
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

  const requestRegister = async ({ name, birthDate, email, cpf, cell }) => {
    const { token } = await authService.register({
      name,
      birthDate,
      email,
      cpf,
      cell,
    })
  }

  return (
    <View style={containerCenter()}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.darkGray, colors.silverBlue, colors.darkGray]}
        style={{ height: Dimensions.get('window').height }}
      >
        {/* <SafeAreaView style={containerSafeArea()}> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <ModalError
            isVisible={showModalError}
            title="Ops!"
            message={`Seu cadastro não foi encontrado.`}
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
                name: 'Gabriel',
                birthDate: '17051996',
                email: 'bielvenegas@hotmail.com',
                cpf: '34431948856',
                cell: '27998479940',
              }}
              onSubmit={requestRegister}
              validationSchema={RegisterSchema}
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
        {/* </SafeAreaView> */}
      </LinearGradient>
    </View>
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
)(Register)
