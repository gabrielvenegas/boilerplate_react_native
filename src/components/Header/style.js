import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const style = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
