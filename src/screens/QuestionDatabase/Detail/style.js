import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../constants/colors'
import { input } from '../../../shared/style/sharedStyles'

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    color: colors.darkGray,
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 5,
  },
  input: {
    // ...input(false),
    // // backgroundColor: colors.lightGray,
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: colors.lightGray,
    backgroundColor: colors.lightGray,
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.lightGray,
  },
  subtitleText: {
    fontWeight: 'bold',
  },
})

export default style
