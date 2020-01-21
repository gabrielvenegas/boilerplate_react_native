import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Home, Profile, Messages } from '../screens'
import colors from '../constants/colors'
import IconBadge from 'react-native-icon-badge'
import { Text } from 'react-native'
import HomeStack from './HomeStack'

const initialRouteName = 'Home'

const tabBarOptions = {
  safeAreaInset: { bottom: 'always', top: 'never' },
  tabStyle: {
    backgroundColor: colors.white,
  },
  labelStyle: {
    color: colors.black,
  },
  activeTintColor: colors.white,
  inactiveTintColor: colors.white,
  activeBackgroundColor: colors.white,
  inactiveBackgroundColor: colors.white,
}

const TabNavigator = createBottomTabNavigator(
  {
    MyProfile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil',
        tabBarOptions,
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="account"
            size={25}
            color={colors.black}
          />
        ),
        keyboardHidesTabBar: false,
      },
    },
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Ofertas',
        tabBarOptions,
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" size={25} color={colors.black} />
        ),
        keyboardHidesTabBar: false,
      },
    },
    Message: {
      screen: Messages,
      navigationOptions: {
        title: 'Mesagens',
        tabBarOptions,
        tabBarIcon: () => (
          <IconBadge
            MainElement={
              <MaterialCommunityIcons
                name="email-outline"
                size={25}
                color={colors.black}
              />
            }
            BadgeElement={<Text style={{ color: 'white' }}>10</Text>}
            IconBadgeStyle={{
              left: 15,
              top: -4,
            }}
          />
        ),
        keyboardHidesTabBar: false,
      },
    },
  },
  {
    initialRouteName,
  }
)

export default TabNavigator
