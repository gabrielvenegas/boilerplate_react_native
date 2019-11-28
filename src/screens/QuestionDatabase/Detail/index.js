import React, { useState } from 'react'
import { View, Text, TextInput, Picker, ScrollView } from 'react-native'
import { Formik } from 'formik'
import CustomHeader from '../../../components/Header'
import style from './style'
import RadioForm from 'react-native-simple-radio-button'
import colors from '../../../constants/colors'
import { CheckBox } from 'react-native-elements'

const Detail = ({ navigation }) => {
  const {
    state: { params },
  } = navigation

  const [subject, setSubject] = useState({})
  const [questionType, setQuestionType] = useState({})
  const [category, setCategory] = useState({})
  const [showAnswersFinal, setShowAnswersFinal] = useState(false)

  const renderSubjects = () => {
    const subjects = [
      {
        Ativo: true,
        Codigo: 1,
        DataCadastro: '2019-07-31T17:54:40',
        DataCadastroString: '31/07/2019',
        DataDesativacao: null,
        DataDesativacaoString: '',
        Disciplina: null,
        Importante: true,
        ImportanteString: 'Sim',
        Modulo: null,
        ModuloString: 'NAVIO - ARTE NAVAL',
        Nome: 'CAPÍTULO 1 - Nomenclatura do Navio',
      },
    ]

    return subjects.map(({ Nome, Codigo }, key) => {
      return <Picker.Item key={key} label={Nome} value={Codigo} />
    })
  }

  const renderQuestionTypes = () => {
    const questionTypes = ['Gerais', 'Números e Problemas', 'V ou F']
    return questionTypes.map((type, key) => {
      return <Picker.Item key={key} label={type} value={key} />
    })
  }

  const renderCategories = () => {
    const categories = [
      {
        Ativo: true,
        Codigo: 1,
        DataCadastro: '2019-07-31T17:54:40',
        DataCadastroString: '31/07/2019',
        DataDesativacao: null,
        DataDesativacaoString: '',
        Nome: 'Iniciante',
      },
    ]
    return categories.map(({ Nome, Codigo }, key) => {
      return <Picker.Item key={key} label={Nome} value={Codigo} />
    })
  }

  return (
    <ScrollView>
      <CustomHeader
        showSubtitle={true}
        subtitle="BANCO DE QUESTÕES"
        navigation={navigation}
        backButton={true}
      />
      <View>
        <View style={style.subtitle}>
          <Text>Módulo selecionado </Text>
          <Text style={style.subtitleText}>{params.name}</Text>
        </View>
        <Formik>
          {() => (
            <View style={style.container}>
              <View>
                <Text style={style.label}>Disciplinas</Text>
                <Picker
                  mode="dropdown"
                  style={style.input}
                  selectedValue={subject}
                  onValueChange={itemValue => setSubject(itemValue)}
                >
                  <Picker.Item label="Todas" value="" />
                  {renderSubjects()}
                </Picker>
              </View>
              <View>
                <Text style={style.label}>Tipo de questão</Text>
                <Picker
                  mode="dropdown"
                  style={style.input}
                  selectedValue={questionType}
                  onValueChange={itemValue => setQuestionType(itemValue)}
                >
                  <Picker.Item label="Todas" value="" />
                  {renderQuestionTypes()}
                </Picker>
              </View>
              <View>
                <Text style={style.label}>Categorias</Text>
                <Picker
                  mode="dropdown"
                  style={style.input}
                  selectedValue={category}
                  onValueChange={itemValue => setCategory(itemValue)}
                >
                  <Picker.Item label="Todas" value="" />
                  {renderCategories()}
                </Picker>
              </View>
              <View>
                <Text style={style.label}>
                  Quantidade de questões desejadas
                </Text>
                <TextInput
                  keyboardType="numeric"
                  style={style.input}
                  value="1"
                />
              </View>
              <View>
                <Text style={style.label}>Quando exibir o gabarito?</Text>
                <View style={style.input}>
                  <CheckBox
                    title="Apenas no final"
                    iconType="material"
                    uncheckedIcon="check-box-outline-blank"
                    checkedIcon="check-box"
                    checkedColor={colors.silverBlue}
                    uncheckedColor={colors.silverBlue}
                    checked={showAnswersFinal}
                    containerStyle={{
                      borderWidth: 0,
                      backgroundColor: 'transparent',
                      paddingLeft: 0,
                    }}
                    textStyle={{ fontWeight: 'normal', fontSize: 16 }}
                    onPress={() => setShowAnswersFinal(!showAnswersFinal)}
                  />
                </View>
              </View>
              <View>
                <Text style={style.label}>Exibir no gabarito</Text>
                <RadioForm
                  radio_props={[
                    { label: 'Apenas questões erradas', value: 0 },
                    { label: 'Apenas questões não resolvidas', value: 1 },
                  ]}
                  buttonColor={colors.silverBlue}
                  selectedButtonColor={colors.silverBlue}
                  animation={false}
                  initial={0}
                  onPress={value => {}}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  )
}

export default Detail
