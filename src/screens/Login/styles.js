import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const input = () => {
  return {
    backgroundColor: colors.white,
    padding: 7,
    borderRadius: 30,
    fontSize: 16,
  }
}

const button = () => {
  return {
    padding: 10,
    marginTop: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.white,
  }
}

const buttonText = () => {
  return {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 14,
    color: colors.white,
  }
}

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerSafeArea: {
    flex: 1,
  },
  containerLogo: {
    alignItems: 'center',
  },
  containerForm: {
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  emailField: { ...input() },
  passwordField: { ...input(), marginTop: 20 },
  loginButtonText: { ...buttonText() },
  loginButton: {
    backgroundColor: colors.lightblue,
    ...button(),
  },
  registerButtonText: { ...buttonText() },
  registerButton: {
    backgroundColor: colors.limeGreen,
    ...button(),
  },
  optionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 35,
  },
})
