import React from 'react'
import { View } from 'react-native'
import CustomHeader from '../../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import QuestionDatabase from '../QuestionDatabase'

const Home = ({ navigation }) => (
  <View>
    {/* <CustomHeader navigation={navigation} /> */}
    <ScrollView>
      {/* <HomeButtonList /> */}
      <QuestionDatabase navigation={navigation} />
    </ScrollView>
  </View>
)

export default Home
