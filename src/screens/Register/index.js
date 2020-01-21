import FormikTextInput from 'boilerplate_app/src/components/Formik/FormikTextInput'
import ModalError from 'boilerplate_app/src/components/Modal/ModalError'
import colors from '../../constants/colors'
import { Formik, FieldArray } from 'formik'
import React, { useState, useEffect } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Yup from 'yup'
import styles from './styles'
import {
  containerForm,
  buttonText,
  button,
  label,
  input,
} from '../../shared/style/sharedStyles'
import { LoginCreators } from 'boilerplate_app/src/store/ducks/login'
import paymentPlanService from '../../services/paymentPlanService'
import { Icon } from 'react-native-elements'
import Swiper from 'react-native-swiper'

const Register = ({ navigation }) => {
  const [showModalError, setShowModalError] = useState(false)
  const [, setPaymentPlans] = useState([])
  const list = [{ key: 'Masculino' }, { key: 'Feminino' }]

  useEffect(() => {
    getPaymentPlans().then(data => {
      setPaymentPlans(data)
    })
  }, [])

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
      field: 'cpf',
      name: 'Cpf',
      keyboardType: 'default',
    },
    {
      key: 4,
      field: 'phone',
      name: 'Tel',
      keyboardType: 'number-pad',
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
            placeholder={name}
            errorStyle={{ borderBottomColor: '#FF4140' }}
          />
        </View>
      )
    }, formikProps)
  }

  const getPaymentPlans = async () => {
    const { data } = await paymentPlanService.list()
    return data
  }

  const requestRegister = async () => {}

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ModalError
          isVisible={showModalError}
          title="Ops!"
          message={`Seu cadastro não foi encontrado.`}
          onPressClose={() => setShowModalError(false)}
        />
        <View style={containerForm()}>
          <Text
            style={{
              paddingTop: 10,
              fontSize: 20,
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
          >
            Complete seus dados
          </Text>
          <Formik
            initialValues={{
              name: '',
              birthDate: '',
              email: '',
              cpf: '',
              cell: '',
            }}
            onSubmit={requestRegister}
            validationSchema={RegisterSchema}
          >
            {formikProps => (
              <View>
                <FieldArray
                  name="fields"
                  render={() => _formFields(formikProps)}
                />
              </View>
            )}
          </Formik>
          <Text
            style={{
              paddingTop: 15,
              paddingBottom: 15,
              fontSize: 20,
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
          >
            Interesses
          </Text>
          <View style={{ borderWidth: 1 }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                marginBottom: 15,
                fontWeight: 'bold',
                marginTop: 15,
                fontStyle: 'italic',
              }}
            >
              Sexo:
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.8,
                width: '80%',
                alignSelf: 'center',
              }}
            />
            <Swiper
              style={styles.wrapper}
              height={250}
              dotColor={colors.lightGray}
              activeDotColor={colors.gray}
              loop={false}
            >
              <View
                style={{
                  flex: 1,
                }}
              >
                <FlatList
                  data={list}
                  keyExtractor={item => item}
                  renderItem={({ item }) => (
                    <View>
                      <TouchableOpacity>
                        <Text
                          style={{
                            paddingLeft: 20,
                            paddingTop: 10,
                            paddingBottom: 10,
                          }}
                        >
                          {item.key}
                        </Text>
                        <View
                          style={{ position: 'absolute', right: 20, top: 10 }}
                        >
                          <Icon type="material" name="keyboard-arrow-right" />
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
              <View style={{ flex: 1 }}></View>
            </Swiper>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={button()}
          >
            <Text style={buttonText()}>Concluir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
