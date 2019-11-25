import React, { Component } from 'react'
import Home from '../screens/Home'
import Login from '../screens/Login'
import { createDrawerNavigator } from 'react-navigation-drawer'
import SideMenu from '../components/SideMenu'
import { createAppContainer } from 'react-navigation'
const DrawerSideMenu = createDrawerNavigator(
  {
    Home,
    Login,
    // Mock,
    // StudyPlan,
    // Performance,
    // Channel,
    // TipsInfo,
    // About,
    // Profile,
    // Logout,
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
  }
)

export default createAppContainer(DrawerSideMenu)
