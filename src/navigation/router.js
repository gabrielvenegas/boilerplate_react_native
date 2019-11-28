import { createDrawerNavigator } from 'react-navigation-drawer'
import { SideMenu } from '../components/SideMenu'
import { createAppContainer } from 'react-navigation'
import {
  Home,
  About,
  Profile,
  Mock,
  StudyPlan,
  Performance,
  Channel,
  TipsInfo,
} from '../screens/'
import HomeStack from './HomeStack'

const DrawerSideMenu = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    About,
    Profile,
    Mock,
    StudyPlan,
    Performance,
    Channel,
    TipsInfo,
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
  }
)

export default createAppContainer(DrawerSideMenu)
