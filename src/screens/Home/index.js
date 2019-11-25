import React from 'react'
import { View, StatusBar } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'
import { Header } from 'react-native-elements'
import style from './style'
import colors from '../../constants/colors'
import TopLogo from '../../components/TopLogo'

const renderTopLogoComponent = () => {
  return <TopLogo />
}
const Home = () => (
  <View>
    <StatusBar backgroundColor={colors.silverBlue} barStyle="light-content" />
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={() => renderTopLogoComponent()}
      containerStyle={style.header}
    ></Header>
    <View></View>
  </View>
)

export default Home
