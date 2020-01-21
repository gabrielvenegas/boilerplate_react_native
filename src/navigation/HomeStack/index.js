import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import ProductDetail from '../../screens/Product/Detail'
import { Home } from '../../screens'
import CustomHeader from '../../components/Header'
import QrCodeProduct from '../../screens/QrCodeProduct'
import ProductInterest from '../../screens/ProductInterest'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { header: null },
    },
    ProductDetail: {
      screen: ProductDetail,
      navigationOptions: { header: CustomHeader },
    },
    QrCodeProduct: {
      screen: QrCodeProduct,
      navigationOptions: { header: null },
    },
    ProductInterest: {
      screen: ProductInterest,
      navigationOptions: { header: CustomHeader },
    },
  },
  {
    initialRouteName: 'Home',
  }
)

export default HomeStack
