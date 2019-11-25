import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, View } from 'react-native'
import styles from './style'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../constants/colors'
import { Avatar, Icon } from 'react-native-elements'

const SideMenu = ({ navigation }) => {
  const menu = () => {
    const listMenu = [
      {
        name: 'Home',
        route: 'Home',
        icon: 'home',
      },
      {
        name: 'Simulados',
        route: 'Mock',
        icon: 'list',
      },
      {
        name: 'Planos de Estudo',
        route: 'StudyPlan',
        icon: 'library-books',
      },
      {
        name: 'Desempenho',
        route: 'Performance',
        icon: 'show-chart',
      },
      {
        name: 'Canal Praticando',
        route: 'Channel',
        icon: 'play-arrow',
      },
      {
        name: 'Dicas e Informações',
        route: 'TipsInfo',
        icon: 'help-outline',
      },
      {
        name: 'Sobre o App',
        route: 'About',
        icon: 'info-outline',
      },
      {
        name: 'Meus Dados',
        route: 'Profile',
        icon: 'person',
      },
      {
        name: 'Sair',
        route: 'Login',
        icon: 'exit-to-app',
      },
    ]

    return listMenu.map(({ name, route, icon }, index) => {
      return (
        <TouchableNativeFeedback key={index} style={{ flexDirection: 'row' }}>
          <View style={styles.menuIcon}>
            <Icon name={icon} type="material" />
          </View>
          <View style={styles.navItem}>
            <Text
              style={styles.navItemText}
              onPress={() => navigation.navigate(route)}
            >
              {name}
            </Text>
          </View>
        </TouchableNativeFeedback>
      )
    })
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.darkGray, colors.silverBlue]}
        style={styles.cardPhoto}
      >
        <View style={styles.topAvatar}>
          <Avatar
            rounded
            size="large"
            containerStyle={{ borderWidth: 2, borderColor: '#f0b008' }}
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
        </View>
        <View style={styles.topUserName}>
          <Text style={styles.topUserNameText}>Olá, Gabriel</Text>
        </View>
      </LinearGradient>
      <ScrollView>
        <View>{menu()}</View>
      </ScrollView>
    </View>
  )
}

SideMenu.propTypes = {
  navigation: PropTypes.object,
}

export default SideMenu
