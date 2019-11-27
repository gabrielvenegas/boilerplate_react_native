import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../constants/colors'

const style = StyleSheet.create({
  image: {},
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstTextContainer: {
    width: Dimensions.get('window').width / 2,
    paddingTop: 130,
    paddingLeft: 15,
    textAlign: 'center',
  },
  firstText: {
    fontFamily: 'Open Sans',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerReverse: {
    // flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: Math.round(Dimensions.get('window').height * 0.7),
    paddingLeft: 15,
  },
})

export default style
