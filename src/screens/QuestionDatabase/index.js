import React, { Component } from 'react'
import CustomHeader from '../../components/Header'
import { View, Text, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../constants/colors'
import QDComponent from '../../components/QDComponent'

const QuestionDatabase = ({ navigation }) => {
  return (
    <View>
      <CustomHeader
        showSubtitle={true}
        subtitle="BANCO DE QUESTÕES"
        navigation={navigation}
      />
      <LinearGradient
        style={{ height: Dimensions.get('window').height * 0.83 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.darkGray, colors.silverBlue, colors.darkGray]}
      >
        <View>
          <QDComponent />
        </View>
      </LinearGradient>
    </View>
  )
}

export default QuestionDatabase
