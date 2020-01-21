import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import { buttonText } from '../../shared/style/sharedStyles'
import colors from '../../constants/colors'
import Modal, {
  ModalContent,
  ModalTitle,
  SlideAnimation,
} from 'react-native-modals'
import PaymentChoice from '../PaymentChoice'
import PaymentFinalStep from '../PaymentFinalStep'
import { ScrollView } from 'react-native-gesture-handler'

const ProductCard = ({ navigation, openPaymentModal, isDetail = false }) => {
  const [paymentModalVisibility, setPaymentModalVisibility] = useState(false)
  const [finalStepModalVisibility, setFinalStepModalVisibility] = useState(
    false
  )

  return (
    <View
      style={{
        borderWidth: 1,
        padding: 20,
      }}
    >
      <View
        style={{
          paddingTop: 10,
        }}
      >
        <Text
          style={{
            paddingBottom: 20,
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}
        >
          Macbook Pro 2015
        </Text>
        <FastImage
          style={{ width: 200, height: 200, marginLeft: '20%' }}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={{ paddingTop: 15 }}>
        <Text style={{ paddingTop: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
          amet quam urna. Nulla mattis interdum vestibulum. Nunc finibus massa
          dolor, sed viverra ex accumsan a.
        </Text>

        <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>R$1500,00</Text>

        {!isDetail ? (
          <View>
            <TouchableOpacity
              style={{
                marginTop: 10,
                padding: 15,
                backgroundColor: colors.lightGray,
              }}
              onPress={() => navigation.navigate('ProductDetail')}
            >
              <Text style={buttonText()}>Tenho Interesse</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 10,
                padding: 15,
                width: '45%',
                backgroundColor: colors.lightGray,
              }}
              onPress={() => navigation.navigate('ProductDetail')}
            >
              <Text style={buttonText()}>Reservar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 10,
                padding: 15,
                width: '45%',
                backgroundColor: colors.lightGray,
              }}
              onPress={() => setPaymentModalVisibility(true)}
            >
              <Text style={buttonText()}>Comprar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Modal
        visible={paymentModalVisibility}
        onTouchOutside={() => {
          setPaymentModalVisibility(false)
        }}
        onSwipeOut={event => {
          setPaymentModalVisibility(false)
        }}
        modalTitle={<ModalTitle title="Escolha o pagamento" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        swipeDirection="down"
        width={0.9}
        height={0.7}
      >
        <ModalContent>
          <PaymentChoice navigation={navigation} />
        </ModalContent>
      </Modal>

      <Modal
        visible={finalStepModalVisibility}
        onTouchOutside={() => {
          setFinalStepModalVisibility(false)
        }}
        onSwipeOut={event => {
          setFinalStepModalVisibility(false)
        }}
        modalTitle={<ModalTitle title="Parabéns pela compra!" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        swipeDirection="down"
        width={0.9}
        height={0.7}
      >
        <ModalContent>
          <PaymentFinalStep />
        </ModalContent>
      </Modal>
    </View>
  )
}

export default ProductCard
