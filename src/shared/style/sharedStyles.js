import colors from '../../constants/colors'
const input = (rounded = true) => {
  return {
    backgroundColor: colors.white,
    padding: 7,
    borderRadius: rounded ? 30 : 0,
    fontSize: 16,
  }
}

/**
 * @param {bg} backgroundColor background color
 */

const button = (bg = 'transparent') => {
  return {
    backgroundColor: bg,
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

const containerCenter = () => {
  return {
    flex: 1,
    justifyContent: 'center',
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
    marginTop: 5,
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
