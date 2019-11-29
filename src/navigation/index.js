import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DrawerSideMenu from './drawer'
import AuthStack from './AuthStack'

const AppNavigator = createSwitchNavigator({
  AuthStack,
  Home: {
    screen: DrawerSideMenu,
  },
})

export default createAppContainer(AppNavigator)
