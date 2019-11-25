import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Login from 'boilerplate_app/src/screens/Login'
import Home from 'boilerplate_app/src/screens/Home'
import Register from 'boilerplate_app/src/screens/Register'
import { TouchableOpacity } from 'react-native'
const AppNavigator = createSwitchNavigator({
  Login,
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
          <IOSIcon name="ios-menu" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 15 },
    }),
  },
  Register,
})

export default createAppContainer(AppNavigator)
