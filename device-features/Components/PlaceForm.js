import React, { useCallback, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Place } from '../models/place'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'
import Button from './UI/Button'

function PlaceForm({oncreatePlace}) {
  const [enteredTitle, setEnteredTitle]=useState('')
  const [pickedLocation, setPickedLocation]=useState();
  const [selectedImage, setSelectedImage]=useState();
  function changeTitleHandler(enteredText){
    setEnteredTitle(enteredText)
  }
  function takeImageHandler(imageUri){
    setSelectedImage(imageUri)
  }
  const pickLocationHandler=useCallback((location)=>{
    setPickedLocation(location)
  }, [])
  function savePlaceHandler(){
    const placeData=new Place(enteredTitle, selectedImage)
    oncreatePlace(placeData);
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput onChangeText={changeTitleHandler} />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
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