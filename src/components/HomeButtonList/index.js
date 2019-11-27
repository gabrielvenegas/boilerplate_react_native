import React, { Component } from 'react'
import HomeButton from '../HomeButton'

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
]

const HomeButtonList = () => {
  return listMenu.map(({ name, route, icon }, key) => {
    return <HomeButton key={key} title={name} to={route} icon={icon} />
  })
}

export default HomeButtonList
