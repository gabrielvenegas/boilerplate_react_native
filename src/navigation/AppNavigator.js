import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: { header: null },
    },
    Auth: {
      screen: AuthStack,
      navigationOptions: { header: null },
    },
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
  }
)

export default createAppContainer(AppNavigator)
