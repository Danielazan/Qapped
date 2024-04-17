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
import Reg from '../components/stateDropdown'
import LgaDropdown from '../components/LgaDropdown'
import { GlobalContext } from '../contexts/index'
import * as ImagePicker from 'expo-image-picker'
import { Entypo } from '@expo/vector-icons'

const Register = ({ navigation }) => {
  const { height, width } = useWindowDimensions()

  const [zndR, setZndR] = useState(1)

  const [fristName, setFristName] = useState('')

  const [PassWord, setPassWord] = useState('')

  const [LastName, setLastName] = useState('')

  const [phoneNumber, setPhoneNumber] = useState('')

  const [gender, setGender] = useState('')

  const [Nin, setNin] = useState('')

  const FullNames = `${fristName} ${LastName}`

  const [image, setImage] = useState(null)

  const [resident, setResident] = useState("")

  const { State, setState ,FullName,setFullName} = useContext(GlobalContext)

  useEffect(() => {
    alert(FullName)
    
  }, [FullName])

  const handleNext = () => {
    setFullName(`${fristName} ${LastName}`)
    setZndR(2)
  }

  const handleBack = () => {
    setZndR(1)
  }

  const handleNextP = () => {
    setZndR(3)
  }

  const handlePay = () => {
    navigation.navigate('Pay')
  }

  // const removeImage = async () => {
  //   try{
  //     saveImage(null);
  //   } catch ({ message }) {
  //   }
  // };

  const pickImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      // saveImage(result.assets[0].uri);
      setImage(result.assets[0].uri)
    }
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={{ width: '100%', flex: 1 }}>
      <ScrollView style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.box}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.1 }]}
            resizeMode='contain'
          />
          <View style={styles.image}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                fontWeight: 600,
                marginLeft: 12
              }}
            >
              Profile Pic
            </Text>
            {
              <Image
                source={{ uri: image }}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 100,
                  backgroundColor: '#6378c4'
                }}
              />
            }
            <Entypo
              name='camera'
              size={27}
              color='white'
              style={{ position: 'absolute', bottom: -15, right: 2 }}
              onPress={pickImage}
            />
          </View>

          <View style={{ width: '100%', paddingLeft: 12 }}>
            <Text style={{ fontSize: 24, color: 'white' }}>Mineral</Text>
            <Text style={{ fontSize: 24, color: 'white' }}>Equity</Text>

            <Text style={{ fontSize: 24, color: 'white' }}>Allocation</Text>
          </View>

          {zndR == 1 && (
            <View style={styles.inputs}>
              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                Surname
              </Text>
              <CustomInput
                width={250}
                placeholder='SurName Eg Joe'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={10}
                value={fristName}
                setvalue={setFristName}
              />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                Frist Name
              </Text>

              <CustomInput
                width={250}
                placeholder='Frist Name eg Pete'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={10}
                value={LastName}
                setvalue={setLastName}
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
                value={phoneNumber}
                setvalue={setPhoneNumber}
              />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                National Identification Number NIN
              </Text>

              <CustomInput
                width={250}
                placeholder='Enter your Email'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={4}
                value={Nin}
                setvalue={setNin}
              />

              {/* <Reg/> */}
            </View>
          )}

          {zndR == 2 && (
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
                value={gender}
                setvalue={setGender}
              />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                Email
              </Text>

              <CustomInput
                width={250}
                placeholder='Enter your Email'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={10}
                value={phoneNumber}
                setvalue={setPhoneNumber}
              />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                Password
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
                Comfirm Password
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

          {zndR == 3 && (
            <View style={styles.inputs}>
              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                Full Name
              </Text>
              <CustomInput
                width={250}
                placeholder='Enter your Email'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={10}
                value={FullName}
              />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 2 }}> 
                State and Minerals
              </Text>

              <Reg />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 4 }}>
                Local Goverment Area
              </Text>

              <LgaDropdown />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                Place Of Residence
              </Text>

              <CustomInput
                width={250}
                placeholder='Where do you Live'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={4}
                value={resident}
                setvalue={setResident}
              />
            </View>
          )}
        </View>

        {/* buttons for Next */}
        <View style={[styles.down]}>
          {zndR == 1 && (
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
          )}

          {zndR == 2 && (
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

          {zndR == 3 && (
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
                text='Register Without Pay'
                weight={600}
                textcolor='white'
                color='black'
                height={45}
                Bmargin={20}
                borderR={10}
                fontsize={15}
                items='center'
                padding={12}
                onPress={() => handleBack()}
              />

              <CustomButton
                width='45%'
                text='Register With Pay'
                weight={600}
                textcolor='white'
                color='black'
                height={45}
                Bmargin={20}
                borderR={10}
                fontsize={18}
                items='center'
                padding={12}
                onPress={() => handlePay()}
              />
            </View>
          )}

          <CustomButton
            width='90%'
            text='Alreading have an account? Login'
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
    flex: 1,
    backgroundColor: '#1b39a9',
    // paddingLeft:12
    borderBottomLeftRadius: -100,
    borderBottomRightRadius: 150,
    paddingBottom: 20,
    position: 'relative'
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
    marginTop: 16
  },
  inputs: {
    marginTop: 18,
    paddingLeft: 12,
    // alignItems: 'center',
    width: '100%'
  },
  image: {
    position: 'absolute',
    width: 150,
    height: 150,
    // backgroundColor: 'red',
    borderRadius: 100,
    right: 20,
    top: 40,
    alignItems: 'center'
  }
})

export default Register
