import React, { useState,useContext,useEffect } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import AntDesign from '@expo/vector-icons/AntDesign'
import {
Abia,
Adamawa,
AkwaIbom,
Anambra,
Bauchi,
Bayelsa,
Benue,
Borno,
CrossRiver,
Delta,
Ebonyi,
Edo,
Ekiti,
Enugu,
Gombe,
Imo,
Jigawa,
Kaduna,
Kano,
Katsina,
Kebbi,
Kogi,
Kwara,
Lagos,
Nasarawa,
Niger,
Ogun,
Ondo,
Osun,
Oyo,
Plateau,
Rivers,
Sokoto,
Taraba,
Yobe,
Zamfara,
} from "./Local"
import {GlobalContext} from "../contexts/index"


const LgaDropdown = () => {
    const [data, setData] = useState(Abia)

  const [value, setValue] = useState(null)

  const {State, setState} = useContext(GlobalContext)


  const handleStateChange = (value) => {
    switch (value) {
        case "Abia State":
            setData(Abia);
            break;
        case "Adamawa State":
            setData(Adamawa);
            break;
        case "AkwaIbom State":
            setData(AkwaIbom);
            break;
        // Add cases for all 36 states in a similar manner
        case "Anambra State":
            setData(Anambra);
            break;
        case "Bauchi State":
            setData(Bauchi);
            break;
        case "Bayelsa State":
            setData(Bayelsa);
            break;
        case "Benue State":
            setData(Benue);
            break;
        case "Borno State":
            setData(Borno);
            break;
        case "CrossRiver State":
            setData(CrossRiver);
            break;
        case "Delta State":
            setData(Delta);
            break;
        case "Ebonyi State":
            setData(Ebonyi);
            break;
        case "Edo State":
            setData(Edo);
            break;
        case "Ekiti State":
            setData(Ekiti);
            break;
        case "Enugu State":
            setData(Enugu);
            break;
        case "Gombe State":
            setData(Gombe);
            break;
        case "Imo State":
            setData(Imo);
            break;
        case "Jigawa State":
            setData(Jigawa);
            break;
        case "Kaduna State":
            setData(Kaduna);
            break;
        case "Kano State":
            setData(Kano);
            break;
        case "Katsina State":
            setData(Katsina);
            break;
        case "Kebbi State":
            setData(Kebbi);
            break;
        case "Kogi State":
            setData(Kogi);
            break;
        case "Kwara State":
            setData(Kwara);
            break;
        case "Lagos State":
            setData(Lagos);
            break;
        case "Nasarawa State":
            setData(Nasarawa);
            break;
        case "Niger State":
            setData(Niger);
            break;
        case "Ogun State":
            setData(Ogun);
            break;
        case "Ondo State":
            setData(Ondo);
            break;
        case "Osun State":
            setData(Osun);
            break;
        case "Oyo State":
            setData(Oyo);
            break;
        case "Plateau State":
            setData(Plateau);
            break;
        case "Rivers State":
            setData(Rivers);
            break;
        case "Sokoto State":
            setData(Sokoto);
            break;
        case "Taraba State":
            setData(Taraba);
            break;
        case "Yobe State":
            setData(Yobe);
            break;
        case "Zamfara State":
            setData(Zamfara);
            break;
        default:
            setData("Other"); // Handle other states
    }
}

useEffect(() => {
    
    

    State && handleStateChange(State)
  }, [State])

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
      labelField='label'
      valueField='value'
      placeholder='Choose Your State'
      searchPlaceholder='Search...'
      // renderRightItem={image}
      value={value}
      onChange={item => {
        setValue(item.value)

      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color='black' name='Safety' size={20} />
      )}
      renderItem={(item, index) => (
        <View style={styles.option}>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      )}
    />
  )
}

export default LgaDropdown

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5
  },
  icon: {
    marginRight: 5
  },
  placeholderStyle: {
    fontSize: 16
  },
  selectedTextStyle: {
    fontSize: 16
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 12
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 5
  }
})
