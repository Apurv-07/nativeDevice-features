import { useIsFocused } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PlacesList from '../Components/PlacesList'

function AllPlaces({route}) {
  const isFocused=useIsFocused();
  const [loadedPlaces, setLoadedPlaces]=useState([])
  useEffect(()=>{
    if(isFocused&&route.params){
      setLoadedPlaces(curPlaces=>[...curPlaces, route.params.place])
    }
  }, [isFocused, route])
  return (
    <PlacesList places={loadedPlaces}/>
  )
}
const style=StyleSheet.create({
    
})
export default AllPlaces