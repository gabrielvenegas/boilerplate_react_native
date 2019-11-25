import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  navItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#eaeaea',
    padding: 10,
    width: '100%',
    height: 55,
  },
  navItemText: {
    paddingTop: 6,
    paddingLeft: 30,
    paddingBottom: 7,
  },
  cardPhoto: {
    flex: 0.5,
    flexDirection: 'row',
  },
  topAvatar: {
    paddingLeft: 10,
    paddingTop: 15,
  },
  topUserName: {
    padding: 15,
  },
  topUserNameText: {
    color: colors.white,
  },
  menuIcon: {
    position: 'absolute',
    paddingTop: '55%',
    paddingLeft: 5,
  },
})

export default style
