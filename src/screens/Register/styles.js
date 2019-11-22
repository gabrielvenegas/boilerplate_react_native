import { StyleSheet } from 'react-native'
import { button } from '../../shared/style/sharedStyles'
import colors from '../../constants/colors'
export default StyleSheet.create({
  logo: {
    width: '50%',
  },
  registerButton: {
    backgroundColor: colors.lightblue,
    ...button(),
  },
})
