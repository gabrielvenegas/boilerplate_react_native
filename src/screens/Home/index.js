import React from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native'
import CustomHeader from '../../components/Header'
import ProductCard from '../../components/ProductCard'

const Home = ({ navigation }) => (
  <ScrollView>
    <View>
      {/* <CustomHeader navigation={navigation} /> */}
      <View style={{ padding: 20 }}>
        <View>
          <TextInput
            placeholder="Buscar"
            keyboardType="web-search"
            style={{ borderWidth: 1, height: 50, padding: 10 }}
          />
        </View>
        <View>
          <Text
            style={{
              position: 'absolute',
              paddingTop: 20,
              fontSize: 18,
              fontStyle: 'italic',
            }}
          >
            Para você
          </Text>
          <View style={{ marginTop: '20%' }}>
            <ProductCard navigation={navigation} />
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
)

export default Home
