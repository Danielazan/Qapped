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
    Pressable,
    ScrollViewComponent
  } from 'react-native'
  import React, { useState, useEffect, useContext } from 'react'
import { FlashList } from '@shopify/flash-list'

const Table = () => {
  return (
    <View style={styles.container}>
      <Text>Table</Text>

      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    
  })

export default Table