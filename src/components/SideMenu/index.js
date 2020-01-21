import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, View } from 'react-native'
import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../constants/colors'
import { Avatar, Icon } from 'react-native-elements'

const listMenu = [
  {
    name: 'Home',
    route: 'Home',
    icon: 'home',
  },
  {
    name: 'Compras',
    route: 'Mock',
    icon: 'list',
  },
  {
    name: 'Perfil',
    route: 'StudyPlan',
    icon: 'library-books',
  },
  {
    name: 'Sair',
    route: 'Performance',
    icon: 'show-chart',
  },
]

const menu = navigation => {
  return listMenu.map(({ name, route, icon }, index) => {
    return (
      <TouchableOpacity key={index} style={{ flexDirection: 'row' }}>
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
      </TouchableOpacity>
    )
  })
}

const SideMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
      <ScrollView>
        <View>{menu(navigation)}</View>
      </ScrollView>
    </View>
  )
}

SideMenu.propTypes = {
  navigation: PropTypes.object,
}

export { SideMenu, listMenu }
