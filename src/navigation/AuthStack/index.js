import React from 'react'
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack'
import { Login, Register } from '../../screens/'
import { createAppContainer } from 'react-navigation'
import colors from '../../constants/colors'
const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        title: 'Login',
      }),
    },
    Register: {
      screen: Register,
      navigationOptions: ({ navigation }) => ({
        title: 'Complete seu cadastro',
        headerBackTitleStyle: { color: colors.black },
        headerLeft: (
          <HeaderBackButton onPress={() => navigation.goBack(null)} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Login',
  }
)

export default AuthStack
