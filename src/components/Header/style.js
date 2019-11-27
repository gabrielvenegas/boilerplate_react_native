import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const style = StyleSheet.create({
  header: {
    backgroundColor: colors.silverBlue,
  },
  subtitle: {
    backgroundColor: colors.yellow,
    alignItems: 'center',
    padding: 15,
  },
  subtitleText: {
    fontWeight: 'bold',
  },
})

export default style
