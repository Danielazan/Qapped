import React, { useState,useContext } from 'react';
  import { StyleSheet,View, Image,Text } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import Logo from "../../assets/images/Logo.png"
  import Abia from "../../assets/Qapps/abia.jpg"
  import Adamawa from "../../assets/Qapps/adamawa.jpg"
  import AKWAIBOM from "../../assets/Qapps/Akwaibom.jpg"
  import Anambra from "../../assets/Qapps/Anambra.jpg"
  import Bauchi from "../../assets/Qapps/bauchi.jpg"
  import Bayelsa from "../../assets/Qapps/Bayelsa.jpg"
  import Benue from "../../assets/Qapps/benue.jpg"
  import Borno from "../../assets/Qapps/borno.jpg"
  import Crossriver from "../../assets/Qapps/cross river.jpg"
  import delta from "../../assets/Qapps/Delta.jpg"
  import Ebonyi from "../../assets/Qapps/Ebonyi.jpg"
  import Edo from "../../assets/Qapps/Edo.jpg"
  import Ekiti from "../../assets/Qapps/Ekiti.jpg"
  import Enugu from "../../assets/Qapps/Enugu.jpg"
  import Gombe from "../../assets/Qapps/Gombe.jpg"
  import Imo from "../../assets/Qapps/Imo.jpg"
  import Jigawa from "../../assets/Qapps/Jigawa.jpg"
  import Kaduna from "../../assets/Qapps/Kaduna.jpg"
  import Kano from "../../assets/Qapps/kano.jpg"

  import Katsina from "../../assets/Qapps/kastina.jpg"
  import Kebbi from "../../assets/Qapps/Kebbi.jpg"
  import Kogi from "../../assets/Qapps/Kogi.jpg"
  import Kwara from "../../assets/Qapps/Kwara.jpg"
  import lagos from "../../assets/Qapps/Lagos.jpg"
  import Nasarawa from "../../assets/Qapps/Nasarawa.jpg"
  import Niger from "../../assets/Qapps/niger.jpg"
  import Ogun from "../../assets/Qapps/Ogun.jpg"
  import Ondo from "../../assets/Qapps/Ondo.jpg"
  import Osun from "../../assets/Qapps/Osun.jpg"
  import Oyo from "../../assets/Qapps/Oyo.jpg"
  import Plateau from "../../assets/Qapps/Plateau.jpg"
  import Rivers from "../../assets/Qapps/Rivers.jpg"
  import Sokoto from "../../assets/Qapps/Sokoto.jpg"
  import Taraba from "../../assets/Qapps/taraba.jpg"
  import Yobe from "../../assets/Qapps/Yobe.jpg"
  import Zamfara from "../../assets/Qapps/Zamfara.jpg"
  import FCT from "../../assets/Qapps/FCT Abuja.jpg"
  import {GlobalContext} from "../contexts/index"
  

  

 const data = [
  {
    label: 'Abia State',
    value: 'Abia State',
    image: Abia
  },
  {
    label: 'Adamawa State',
    value: 'Adamawa State',
    image: Adamawa
  },
  {
    label: 'Akwa Ibom State',
    value: 'AkwaIbom State',
    image: AKWAIBOM
  },
  {
    label: 'Anambra State',
    value: 'Anambra State',
    image: Anambra
  },
  {
    label: 'Bauchi State',
    value: 'Bauchi State',
    image: Bauchi
  },
  {
    label: 'Bayelsa State',
    value: 'Bayelsa State',
    image: Bayelsa
  },
  {
    label: 'Benue State',
    value: 'Benue State',
    image: Benue
  },
  {
    label: 'Borno State',
    value: 'Borno State',
    image: Borno
  },
  {
    label: 'Cross River State',
    value: 'CrossRiver State',
    image: Crossriver
  },
  {
    label: 'Delta State',
    value: 'Delta State',
    image: delta
  },
  {
    label: 'Ebonyi State',
    value: 'Ebonyi State',
    image: Ebonyi
  },
  {
    label: 'Edo State',
    value: 'Edo State',
    image: Edo
  },
  {
    label: 'Ekiti State',
    value: 'Ekiti State',
    image: Ekiti
  },
  {
    label: 'Enugu State',
    value: 'Enugu State',
    image: Enugu
  },
  {
    label: 'Gombe State',
    value: 'Gombe State',
    image: Gombe
  },
  {
    label: 'Imo State',
    value: 'Imo State',
    image: Imo
  },
  {
    label: 'Jigawa State',
    value: 'Jigawa State',
    image: Jigawa
  },
  {
    label: 'Kaduna State',
    value: 'Kaduna State',
    image: Kaduna
  },
  {
    label: 'Kano State',
    value: 'Kano State',
    image: Kano
  },
  {
    label: 'Katsina State',
    value: 'Katsina State',
    image: Katsina
  },
  {
    label: 'Kebbi State',
    value: 'Kebbi State',
    image: Kebbi
  },
  {
    label: 'Kogi State',
    value: 'Kogi State',
    image: Kogi
  },
  {
    label: 'Kwara State',
    value: 'Kwara State',
    image: Kwara
  },
  {
    label: 'Lagos State',
    value: 'Lagos State',
    image: lagos
  },
  {
    label: 'Nasarawa State',
    value: 'Nasarawa State',
    image: Nasarawa
  },
  {
    label: 'Niger State',
    value: 'Niger State',
    image: Niger
  },
  {
    label: 'Ogun State',
    value: 'Ogun State',
    image: Ogun
  },
  {
    label: 'Ondo State',
    value: 'Ondo State',
    image: Ondo
  },
  {
    label: 'Osun State',
    value: 'Osun State',
    image: Osun
  },
  {
    label: 'Oyo State',
    value: 'Oyo State',
    image: Oyo
  },
  {
    label: 'Plateau State',
    value: 'Plateau State',
    image: Plateau
  },
  {
    label: 'Rivers State',
    value: 'Rivers State',
    image: Rivers
  },
  {
    label: 'Sokoto State',
    value: 'Sokoto State',
    image: Sokoto
  },
  {
    label: 'Taraba State',
    value: 'Taraba State',
    image: Taraba
  },
  {
    label: 'Yobe State',
    value: 'Yobe State',
    image: Yobe
  },
  {
    label: 'Zamfara State',
    value: 'Zamfara State',
  image: Zamfara
  },
  {
    label: 'FCT Abuja',
    value: 'FCT Abuja',
  image: FCT
  }
];


  const Reg = () => {
    const [value, setValue] = useState(null);

    const {State, setState} = useContext(GlobalContext)

    

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Choose Your State of Origin"
        searchPlaceholder="Search..."
        // renderRightItem={image}
        value={value}
        onChange={item => {
          setValue(item.value);
          setState(item.value)
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="white" name="Safety" size={20} />
        )}

        renderItem={(item, index) => (
        <View style={styles.option}>
        <Text style={styles.label}>{item.label}</Text>
          <Image source={item.image} style={styles.image} />
          
        </View>
      )}
      />
    );
  };

  export default Reg;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
      color:"white"
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
      color:"white"
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        width:"100%",
        justifyContent: 'space-between',
        paddingHorizontal:12,
        marginBottom:12,
      },
    image: {
        width: 200,
        height: 200,
        marginRight: 5,
      },
  });