import { createStackNavigator } from 'react-navigation-stack'
import { Home, Detail } from '../../screens'

const HomeStack = createStackNavigator(
  {
    Home,
    Detail,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

export default HomeStack
