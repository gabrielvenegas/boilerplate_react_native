import { StyleSheet } from 'react-native'
import { button, buttonText } from '../../../shared/style/sharedStyles'
import colors from '../../../constants/colors'

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    ...button(colors.silverBlue),
    borderRadius: 30,
    borderWidth: 3,
    borderColor: colors.yellow,
    height: 70,
  },
  icon: {
    padding: 7,
  },
  buttonText: {
    ...buttonText(),
    paddingTop: 12,
    paddingLeft: 30,
    fontSize: 16,
  },
})

export default style
