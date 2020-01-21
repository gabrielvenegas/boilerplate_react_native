import React, { useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import CustomHeader from '../../components/Header'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import colors from '../../constants/colors'
import { NavigationActions } from 'react-navigation'

const list = [
  {
    name: 'Achamos um produto pra você!',
    avatar_url: 'https://unsplash.it/400/400?image=1',
    subtitle: 'Acreditamos que você se interessará por este produto!',
  },
]

const listInterest = [
  {
    name: 'Macbook Pro 2015',
    avatar_url: 'https://unsplash.it/400/400?image=1',
    subtitle: 'Você é o número #3 deste produto!',
  },
]

const renderRow = ({ name, avatar_url, subtitle }, navigation) => {
  return (
    <View>
      <ListItem
        leftAvatar={{
          title: name,
          source: { uri: avatar_url },
          showEditButton: true,
        }}
        title={name}
        subtitle={subtitle}
        chevron
        bottomDivider
        onPress={() => NavigationActions.navigate('QRCodeProduct')}
      />
    </View>
  )
}

const Messages = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return selectedIndex === 0 ? (
    <View>
      <View>
        <SegmentedControlTab
          values={['Notificações', 'Meus Pedidos']}
          selectedIndex={selectedIndex}
          onTabPress={setSelectedIndex}
          tabsContainerStyle={{ padding: 10 }}
        />
      </View>
      <View style={{ padding: 10 }}>
        <FlatList
          data={list}
          renderItem={({ item }) => renderRow(item, navigation)}
          keyExtractor={({ id }) => id}
        ></FlatList>
      </View>
    </View>
  ) : (
    <View>
      <View>
        <SegmentedControlTab
          values={['Notificações', 'Meus Pedidos']}
          selectedIndex={selectedIndex}
          onTabPress={setSelectedIndex}
          tabsContainerStyle={{ padding: 10 }}
        />
      </View>
      <View style={{ padding: 10 }}>
        <FlatList
          data={listInterest}
          renderItem={({ item }) => renderRow(item, navigation)}
          keyExtractor={({ id }) => id}
        ></FlatList>
      </View>
    </View>
  )
}

export default Messages
