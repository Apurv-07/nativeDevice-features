import React from 'react'
import { View } from 'react-native'
import PlaceForm from '../Components/PlaceForm'

function AddPlace({navigation}) {
  function createPlaceHandler(place){
    navigation.navigate('AllPlaces', {
      place: place
    })
  }
  return (
    <View>
       <PlaceForm oncreatePlace={createPlaceHandler}/> 
    </View>
  )
}

export default AddPlace