import React, { useState,useContext } from 'react';
  import { StyleSheet,View, Image,Text } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import Logo from "../../assets/images/Logo.png"
  import Abia from "../../assets/Qapps/ABIA 3.png"
  import Adamawa from "../../assets/Qapps/ABIA.png"
  import AKWAIBOM from "../../assets/Qapps/AKWA IBOM.png"
  import Anambra from "../../assets/Qapps/ANAMBRA.png"
  import Bauchi from "../../assets/Qapps/BAUCHI 3.png"
  import Bayelsa from "../../assets/Qapps/BAYELSA.png"
  import Benue from "../../assets/Qapps/BENUE 4.png"
  import Borno from "../../assets/Qapps/BORNO 3.png"
  import Crossriver from "../../assets/Qapps/CROSS RIVER.png"
  import delta from "../../assets/Qapps/DELTA.png"
  import Ebonyi from "../../assets/Qapps/EBONYI.png"
  import Edo from "../../assets/Qapps/EDO.png"
  import Ekiti from "../../assets/Qapps/EKITI.png"
  import Enugu from "../../assets/Qapps/ENUGU.png"
  import Gombe from "../../assets/Qapps/GOMBE.png"
  import Imo from "../../assets/Qapp/Jigawa.png"
  import Jigawa from "../../assets/Qapps/JIGAWA.png"
  import Kaduna from "../../assets/Qapps/KADUNA 3.png"
  import Kano from "../../assets/Qapp/Kano 2.png"
  import Katsina from "../../assets/Qapps/KASTINA 3.png"
  import Kebbi from "../../assets/Qapps/KEBBI.png"
  import Kogi from "../../assets/Qapps/KOGGI.png"
  import Kwara from "../../assets/Qapps/KWARA.png"
  import lagos from "../../assets/Qapps/LAGOS.png"
  import Nasarawa from "../../assets/Qapp/Nassarawa.png"
  import Niger from "../../assets/Qapp/Niger.png"
  import Ogun from "../../assets/Qapps/OGUN.png"
  import Ondo from "../../assets/Qapps/ONDO.png"
  import Osun from "../../assets/Qapps/OSUN.png"
  import Oyo from "../../assets/Qapp/oyo.png"
  import Plateau from "../../assets/Qapp/Plateau.png"
  import Rivers from "../../assets/Qapps/RIVERS.png"
  import Sokoto from "../../assets/Qapp/Sokoto.png"
  import Taraba from "../../assets/Qapp/Taraba.png"
  import Yobe from "../../assets/Qapp/Yobe.png"
  import Zamfara from "../../assets/Qapp/Zamfara.png"
  // import Kano from "../../assets/Qapps/Kano.PNG"
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
        placeholder="Choose Your State"
        searchPlaceholder="Search..."
        // renderRightItem={image}
        value={value}
        onChange={item => {
          setValue(item.value);
          setState(item.value)
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
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
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
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
        width: 50,
        height: 50,
        marginRight: 5,
      },
  });