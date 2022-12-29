import React, { useCallback, useLayoutEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import IconButton from '../Components/UI/IconButton';
function Map({navigation}) {
    const [selectedLocation, setSelectedLocation]=useState({});
    const region ={
        // latitude: 37.78,
        // longitude: -122.43,
        latitude: 25.5941,
        longitude: 85.1376,
        latitudeDelta: 0.922,
        longitudeDelta: 0.0421,
    }
    function selectLocationHandler(event){
        const lat=event.nativeEvent.coordinate.latitude;
        const lng=event.nativeEvent.coordinate.longitude;
        setSelectedLocation({lat: lat, lng: lng})
        console.log(selectedLocation)
    }
    const savePickedLocationHandler= useCallback(()=>{
        if (!selectedLocation){
            Alert.alert(
                'No location',
                'Please add a location'
            );
            return;
        }

        navigation.navigate('AddPlace', { pickedLat: selectedLocation.lat, pickedLng: selectedLocation.lng})
    }, [navigation, selectedLocation])
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ({tintColor})=><IconButton icon="save" size={24} color={tintColor} onPress={savePickedLocationHandler} />
        })
    },[navigation,, savePickedLocationHandler])
  return (
    <MapView initialRegion={region} style={styles.map} onPress={selectLocationHandler}>
        {/* {selectedLocation && <Marker title="Picked Location" coordinate={{
            latitude:selectedLocation.lat,
            longitude:selectedLocation.lng
        }} />} */}
        {selectedLocation && <Marker coordinate={{
            longitude: selectedLocation.lng ? selectedLocation.lng : 0,
            latitude: selectedLocation.lat ? selectedLocation.lat : 0
        }} title={'owner location'} />}
    </MapView>
  )
}
const styles=StyleSheet.create({
    map:{
        flex: 1,
    }
})

export default Map