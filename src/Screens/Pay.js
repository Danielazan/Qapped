import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable
} from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import Logo from '../../assets/images/Logo.png'
import { Paystack, paystackProps } from 'react-native-paystack-webview'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { GlobalContext } from '../contexts'

const Pay = () => {
  const { height, width } = useWindowDimensions()

  const [amount, setAmount] = useState('100,000')

  const paystackWebViewRef = useRef(paystackProps.PayStackRef)

  const { FullName } = useContext(GlobalContext)

  return (
    <KeyboardAvoidingView behavior='padding' style={{ width: '100%', flex: 1 }}>
      <ScrollView style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.box}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.1 }]}
            resizeMode='contain'
          />
          <Text style={styles.payment}>Make Payment</Text>
        </View>

        <View style={styles.znd}>

          <Text style={{
            fontSize:25,
            color:"white",
            fontWeight:600,

          }}>Name</Text>
          <CustomInput
            width={250}
            placeholder='Frist Name Eg Joe'
            Bwidth={2}
            height={42}
            Background='#4961ba'
            Radius={10}
            marginB={10}
            value={FullName}
            // setvalue={setFristName}
          />
          
          <Text style={{
            fontSize:25,
            color:"white",
            fontWeight:600,

          }}>Amount</Text>
          <CustomInput
            width={250}
            placeholder='Last Name eg Pete'
            Bwidth={2}
            height={42}
            Background='#4961ba'
            Radius={10}
            marginB={10}
            value={amount}
            // setvalue={}
          />

          <CustomButton
            width='45%'
            text=' Pay'
            weight={600}
            textcolor='white'
            color='green'
            height={45}
            Bmargin={20}
            borderR={10}
            fontsize={18}
            items='center'
            padding={12}
            onPress={() => paystackWebViewRef.current.startTransaction()}
          />
          <Paystack
            paystackKey='pk_live_d547e8f41ad5b447ceee003ed40395d4a1c05bc7'
            amount={'100000.00'}
            billingEmail='micaequityallocation@gmail.com'
            billingMobile='08104231934'
            billingName='MicaTechAllocation'
            currency='NGN'
            activityIndicatorColor='green'
            onCancel={e => {
              // handle response here
            }}
            onSuccess={res => {
              // handle response here
            }}
            // autoStart={true}
            ref={paystackWebViewRef}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b39a9'
  },
  box: {
    flex: 1,
    backgroundColor: '#1b39a9',
    alignItems: 'center',
    paddingBottom: 20
  },
  znd: {
    backgroundColor: '#6a6a6a',
    width: '100%',
    height: '100%',
    marginTop:20,
    alignItems:"center",
    justifyContent:"space-evenly",
    paddingVertical:12
  },
  payment: {
    fontSize: 24,
    color: 'white',
    marginTop: 10
  }
})

export default Pay
