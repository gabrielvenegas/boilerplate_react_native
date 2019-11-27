import React, { Component } from 'react'
import style from './style'
import TopLogo from '../TopLogo'
import { View, StatusBar, Button, Text } from 'react-native'
import colors from '../../constants/colors'
import { Header, Icon } from 'react-native-elements'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import { DrawerActions } from 'react-navigation-drawer'
import Subtitle from './Subtitle'

const toggleMenu = navigation => {
  navigation.dispatch(DrawerActions.toggleDrawer())
}

const renderTopLogoComponent = () => {
  return <TopLogo />
}

const renderMenuButton = navigation => {
  return (
    <View>
      <TouchableNativeFeedback onPress={() => toggleMenu(navigation)}>
        <View>
          <Icon name="menu" type="material" color="#fff" />
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const CustomHeader = ({ navigation, subtitle, showSubtitle = false }) => {
  return (
    <View>
      <View>
        <StatusBar
          backgroundColor={colors.silverBlue}
          barStyle="light-content"
        />
        <Header
          leftComponent={() => renderMenuButton(navigation)}
          centerComponent={() => renderTopLogoComponent()}
          containerStyle={style.header}
        ></Header>
      </View>
      <View>{showSubtitle && <Subtitle subtitle={subtitle} />}</View>
    </View>
  )
}

export default CustomHeader
