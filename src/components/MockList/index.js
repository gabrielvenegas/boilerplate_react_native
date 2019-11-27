import React, { Component, useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const MockList = () => {
  const [mockList, setMockList] = useState([])

  return mockList.length > 0 ? (
    <View>
      <FlatList>
        <Text>Foram encontrados vários simulados</Text>
      </FlatList>
    </View>
  ) : (
    <View style={{ alignItems: 'center', paddingTop: 50 }}>
      <Text>Nenhum simulado encontrado</Text>
    </View>
  )
}

// const mapStateToProps = state => ({
//     mockList: state.mockList,
//   })

//   const mapDispatchToProps = dispatch =>
//     bindActionCreators(
//       {
//         ...MockCreators,
//       },
//       dispatch
//     )

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(MockList)

export default MockList
