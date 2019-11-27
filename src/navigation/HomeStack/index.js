import { createStackNavigator } from 'react-navigation-stack'
import { Home, Mock } from '../../screens'

const HomeStack = createStackNavigator(
  {
    Home,
    Mock,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

export default HomeStack
