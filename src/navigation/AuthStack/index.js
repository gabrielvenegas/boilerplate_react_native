import { createStackNavigator } from 'react-navigation-stack'
import { Login, Register } from '../../screens/'
import { createAppContainer } from 'react-navigation'
const AuthStack = createStackNavigator(
  {
    Login,
    Register,
  },
  {
    initialRouteName: 'Login',
  }
)

export default createAppContainer(AuthStack)
