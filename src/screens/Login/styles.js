import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerSafeArea: {
    flex: 1,
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: '75%',
    height: 200,
    marginTop: '10%',
  },
  containerForm: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
    paddingBottom: 10,
  },
  emailField: {
    backgroundColor: colors.white,
    padding: 7,
    marginTop: 3,
    borderRadius: 30,
    fontSize: 16,
  },
  passwordField: {
    backgroundColor: colors.white,
    padding: 7,
    marginTop: 10,
    borderRadius: 30,
    fontSize: 16,
  },
  containerButtons: {
    flex: 2,
  },
  loginButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 14,
    color: colors.white,
  },
  loginButton: {
    backgroundColor: colors.lightblue,
    padding: 10,
    marginTop: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.white,
  },
  registerButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 14,
    color: colors.white,
  },
  registerButton: {
    backgroundColor: colors.limeGreen,
    padding: 10,
    marginTop: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.white,
  },
  // optionButton: {
  //   position: 'absolute',
  //   bottom: 150,
  //   width: '100%',
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   padding: 35,
  // },
})
