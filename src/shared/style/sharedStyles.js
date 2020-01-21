import colors from '../../constants/colors'
const input = (rounded = false) => {
  return {
    padding: 15,
    borderRadius: rounded ? 20 : 0,
    fontSize: 16,
    borderBottomWidth: 1,
  }
}

/**
 * @param {bg} backgroundColor background color
 */

const button = (bg = 'transparent') => {
  return {
    backgroundColor: bg,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.black,
    marginTop: 10,
    marginBottom: 10,
  }
}

const buttonText = () => {
  return {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 14,
    color: colors.black,
  }
}

const containerCenter = () => {
  return {
    flex: 1,
  }
}

const containerLogo = () => {
  return {
    alignItems: 'center',
  }
}

const containerForm = () => {
  return {
    marginHorizontal: 15,
    justifyContent: 'center',
  }
}

const containerSafeArea = () => {
  return {
    flex: 1,
  }
}

const label = () => {
  return {
    color: colors.white,
    marginBottom: -10,
  }
}

export {
  input,
  button,
  buttonText,
  containerCenter,
  containerLogo,
  containerForm,
  containerSafeArea,
  label,
}
