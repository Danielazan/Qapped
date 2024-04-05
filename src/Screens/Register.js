import React, { useState, useEffect, useContext } from 'react'
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
import Logo from '../../assets/images/Logo.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import Reg from "../components/stateDropdown"
import LgaDropdown from "../components/LgaDropdown"
import {GlobalContext} from "../contexts/index"

const Register = () => {
  const { height, width } = useWindowDimensions()

  const [zndR, setZndR] = useState(1)

  const [fristName, setFristName] = useState('')

  const [PassWord, setPassWord] = useState('')

  const {State, setState} = useContext(GlobalContext)

  useEffect(() => {
    alert(State)
    console.log(typeof(State))
  }, [State])
  

  const handleNext = () => {
    setZndR(2)
  }

  const handleBack = () => {
    setZndR(1)
  }

  const handleNextP = ()=>{
    setZndR(3)
  }

  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={{width:"100%", flex:1 }}
   >
   <ScrollView style={styles.container} onPress={Keyboard.dismiss}>
      
      <View
       style={styles.box}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.1 }]}
          resizeMode='contain'
        />

        <View style={{ width: '100%', paddingLeft: 12 }}>
          <Text style={{ fontSize: 24, color: 'white' }}>The</Text>
          <Text style={{ fontSize: 24, color: 'white' }}>Design</Text>

          <Text style={{ fontSize: 24, color: 'white' }}>Company</Text>
        </View>

        {zndR == 1 && (
          <View
            style={styles.inputs}
          >
        
         <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
              Frist Name
            </Text>
            <CustomInput
              width={250}
              placeholder='Enter your Email'
              Bwidth={2}
              height={42}
              Background='#4961ba'
              Radius={10}
              marginB={10}
              value={fristName}
              setvalue={setFristName}
            />

            <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
              Last Name
            </Text>

            <CustomInput
              width={250}
              placeholder='Enter your Email'
              Bwidth={2}
              height={42}
              Background='#4961ba'
              Radius={10}
              marginB={10}
            />

            <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
              Phone Nunmber
            </Text>

            <CustomInput
              width={250}
              placeholder='Enter your Email'
              Bwidth={2}
              height={42}
              Background='#4961ba'
              Radius={10}
              marginB={10}
            />

            <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
              NIN
            </Text>

            <CustomInput
              width={250}
              placeholder='Enter your Email'
              Bwidth={2}
              height={42}
              Background='#4961ba'
              Radius={10}
              marginB={4}
            />
           
           {/* <Reg/> */}
          </View>
        )} 
        
        {zndR == 2 &&  (
          <View style={styles.inputs}>
            <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
              Gender
            </Text>
            <CustomInput
              width={250}
              placeholder='Enter your Email'
              Bwidth={2}
              height={42}
              Background='#4961ba'
              Radius={10}
              marginB={10}
            />

            <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
              Phone Number
            </Text>

            <CustomInput
              width={250}
              placeholder='Enter your Email'
              Bwidth={2}
              height={42}
              Background='#4961ba'
              Radius={10}
              marginB={10}
            />

            <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
              PassWord
            </Text>

            <CustomInput
              width={250}
              placeholder='Enter your Email'
              Bwidth={2}
              height={42}
              Background='#4961ba'
              Radius={10}
              marginB={10}
            />

            <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
              Comfirm PassWord
            </Text>

            <CustomInput
              width={250}
              placeholder='Enter your Email'
              Bwidth={2}
              height={42}
              Background='#4961ba'
              Radius={10}
              marginB={4}
            />
          </View>
        )}

        {zndR == 3 &&  (
          <View style={styles.inputs}>
            <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
              FullName
            </Text>
            <CustomInput
              width={250}
              placeholder='Enter your Email'
              Bwidth={2}
              height={42}
              Background='#4961ba'
              Radius={10}
              marginB={10}
              value={fristName}
            />
          
            <Text style={{ fontSize: 20, color: 'white', marginBottom: 2 }}>
              State And Minerals
            </Text>

           <Reg/>

            <Text style={{ fontSize: 20, color: 'white', marginBottom: 4 }}>
              Local Goverment Area
            </Text>

            <LgaDropdown/>

            <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
              Place Of Residence
            </Text>

            <CustomInput
              width={250}
              placeholder='Enter your Email'
              Bwidth={2}
              height={42}
              Background='#4961ba'
              Radius={10}
              marginB={4}
            />
          </View>
        )}
      </View>
    

{/* buttons for Next */}
    <View style={[styles.down]}>
      {zndR == 1 ? (
        <View
          style={{
            width: '100%',
            paddingHorizontal: 12,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CustomButton
            width='45%'
            text='Continue'
            weight={200}
            textcolor='white'
            color='black'
            height={45}
            Bmargin={20}
            borderR={10}
            fontsize={20}
            items='center'
            padding={12}
            onPress={() => handleNext()}
          />
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            paddingHorizontal: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <CustomButton
            width='45%'
            text='Back'
            weight={200}
            textcolor='white'
            color='black'
            height={45}
            Bmargin={20}
            borderR={10}
            fontsize={20}
            items='center'
            padding={12}
            onPress={() => handleBack()}
          />

          <CustomButton
            width='45%'
            text='Next'
            weight={200}
            textcolor='white'
            color='black'
            height={45}
            Bmargin={20}
            borderR={10}
            fontsize={20}
            items='center'
            padding={12}
            onPress={() => handleNextP()}
          />
        </View>
      )}

      <CustomButton
        width='90%'
        text='Alreading Have An Account? Login'
        weight={400}
        textcolor='green'
        // color='black'
        height={55}
        Bmargin={20}
        borderR={40}
        fontsize={20}
        items='center'
        padding={14}
      />
    </View>

  </ScrollView>
   </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    flex:1,
    backgroundColor: '#1b39a9',
    // paddingLeft:12
    borderBottomLeftRadius: -100,
    borderBottomRightRadius: 150,
    paddingBottom: 20
    // transform : [ { scaleY : 0.5 } ],
  },
  logo: {
    width: '40%'
  },
  blueCurve: {},
  down: {
    width: '100%',
    // backgroundColor:"red",
    height: 'auto',
    alignItems: 'center',
    marginTop:16
  },
  inputs: {
    marginTop: 18,
    paddingLeft: 12,
    // alignItems: 'center',
    width: '100%'
  }
})

export default Register
