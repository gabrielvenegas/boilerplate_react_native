import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'

const openMenu = (navigation, item) => {
  navigation.dispatch(DrawerActions.toggleDrawer())
}
const Home = ({ navigation }) => (
  <View>
    <Text>Main</Text>
    <Button onPress={() => openMenu(navigation)} title="Detail Page" />
  </View>
)

export default Home
