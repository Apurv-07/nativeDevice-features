import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'

function PlaceForm() {
  const [enteredTitle, setEnteredTitle]=useState('')
  function changeTitleHandler(enteredText){
    setEnteredTitle(enteredText)
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput onChangeText={changeTitleHandler} />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  )
}
const styles=StyleSheet.create({
  form: {
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'blue'
  },
  input:{
    marginTop: 100,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: 'skyblue',
    borderBottomWidth: 2,
    backgroundColor: 'green'
  }
})
export default PlaceForm