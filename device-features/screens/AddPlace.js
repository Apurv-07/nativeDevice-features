import React from 'react'
import { View } from 'react-native'
import PlaceForm from '../Components/PlaceForm'
import { insertPlace } from './database'

function AddPlace({navigation}) {
  async function createPlaceHandler(place){
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