import React, { Component } from 'react'
import CustomHeader from '../../components/Header'

const StudyPlan = ({ navigation }) => {
  return (
    <CustomHeader
      subtitle="PLANOS DE ESTUDO"
      showSubtitle={true}
      navigation={navigation}
    />
  )
}

export default StudyPlan
