import React, { Component } from 'react'
import style from './style'
import TopLogo from '../TopLogo'
import { View, StatusBar, Button, Text } from 'react-native'
import colors from '../../constants/colors'
import { Header, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
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
      <TouchableOpacity onPress={() => toggleMenu(navigation)}>
        <View>
          <Icon name="menu" type="material" color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const renderBackButton = navigation => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View>
          <Icon name="arrow-back" size={28} type="material" color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const CustomHeader = ({
  navigation,
  subtitle,
  showSubtitle = false,
  backButton = false,
}) => {
  return (
    <View>
      <View>
        <StatusBar
        // backgroundColor={colors.silverBlue}
        // barStyle="light-content"
        />
        <Header
          // leftComponent={() =>
          //   backButton
          //     ? renderBackButton(navigation)
          //     : renderMenuButton(navigation)
          // }
          centerComponent={() => renderTopLogoComponent()}
          containerStyle={style.header}
        ></Header>
      </View>
      <View>{showSubtitle && <Subtitle subtitle={subtitle} />}</View>
    </View>
  )
}

export default CustomHeader
