import AppNavigator from 'boilerplate_app/src/navigation'
import React from 'react'
import { setLocale } from 'yup'
import YupMessages from './src/components/Formik/YupMessages'
setLocale(YupMessages)
import { Provider } from 'react-redux'
import setupRedux from 'boilerplate_app/src/store'
const { store, persistor } = setupRedux()
import { PersistGate } from 'redux-persist/integration/react'
import DrawerSideMenu from './src/navigation/drawer'
import 'react-native-gesture-handler'
if (__DEV__) {
  import('./src/utils/reactotron')
}

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DrawerSideMenu />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
