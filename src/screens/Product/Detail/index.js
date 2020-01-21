import React from 'react'
import { View, ScrollView } from 'react-native'
import ProductCard from '../../../components/ProductCard'

// const PaymentModal = ({
//   paymentModalVisibility,
//   setPaymentModalVisibility,
// }) => {
//   return (
//     <Modal
//       visible={paymentModalVisibility}
//       onTouchOutside={() => {
//         setPaymentModalVisibility(false)
//       }}
//     >
//       <ModalContent>
//         <View>
//           <Text>Teste</Text>
//         </View>
//       </ModalContent>
//     </Modal>
//   )
// }

// const openPaymentModal = setVisibility => {
//   setVisibility(true)
// }
const ProductDetail = ({ navigation }) => {
  return (
    <ScrollView style={{ marginTop: 10, padding: 10 }}>
      <ProductCard navigation={navigation} isDetail={true} />
    </ScrollView>
  )
}

export default ProductDetail
