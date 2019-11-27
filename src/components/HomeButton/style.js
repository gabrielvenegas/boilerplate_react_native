import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'
import { button, buttonText } from '../../shared/style/sharedStyles'

const style = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    flexDirection: 'row',
    ...button(colors.silverBlue),
    borderRadius: 20,
    borderWidth: 0,
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
