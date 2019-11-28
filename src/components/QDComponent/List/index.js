import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import QDItem from '../Item'

const QDList = () => {
  const questions = [
    {
      Ativo: true,
      Codigo: 1,
      DataCadastro: '2019-07-31T17:54:40',
      DataDesativacao: null,
      DataDesativacaoString: '',
      Nome: 'NAVIO - ARTE NAVAL',
    },
  ]

  return (
    <ScrollView>
      {questions.map(
        ({ Nome, Ativo, Codigo, DataCadastro, DataDesativacao }, key) => {
          return (
            <View key={key}>
              <QDItem
                name={Nome}
                active={Ativo}
                code={Codigo}
                createdAt={DataCadastro}
                unabledAt={DataDesativacao}
                icon="library-books"
              />
            </View>
          )
        }
      )}
    </ScrollView>
  )
}

export default QDList
