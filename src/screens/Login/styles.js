import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'
import { input, buttonText, button } from '../../shared/style/sharedStyles'

export default StyleSheet.create({
  passwordField: { ...input(), marginTop: 20 },
  optionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 35,
  },
})
