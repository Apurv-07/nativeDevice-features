import React, { useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native'
import {getCurrentPositionAsync, useForegroundPermissions, PermissionStatus} from 'expo-location'
import { useNavigation,useRoute,useIsFocused } from '@react-navigation/native';

function LocationPicker() {
    const [locationPermissionInformation, requestPermission]=useForegroundPermissions();
    const [pickedLocation, setPickedLocation] = useState()
    const isFocused=useIsFocused();
    const navigation=useNavigation();
    const route=useRoute();
    useEffect(()=>{
        if(isFocused&&route.params){
            var mapPickedLocation={lat:route.params.pickedLat, lng:route.params.pickedLng}
        }
        setPickedLocation(mapPickedLocation)
        
    }, [route, isFocused])
    async function verifyPermissions(){
        if(locationPermissionInformation.status===PermissionStatus.UNDETERMINED){
            const permissionResponse=await requestPermission();
            return permissionResponse.granted;
        }
        if(locationPermissionInformation.status===PermissionStatus.DENIED){
            Alert.alert(
                "Insufficient Permissions",
                "You need to grant location permissions to use this app"
            );
            return false
        }
        return true
    }
    async function getLocationHandler(){
        const havePermission=await verifyPermissions();
        if(!havePermission){
            return;
        }
        const location=await getCurrentPositionAsync()
        console.log(location)
    }
    async function pickOnMapHandler(){
        navigation.navigate('Map')
    }
  return (
    <View>
        <View style={styles.mapPreview}>
        </View>
        <View style={styles.actions}>
            <Button title='Locate User' onPress={getLocationHandler} />
            <Button title='Pick on Map' onPress={pickOnMapHandler} />
        </View>
    </View>
  )
}
const styles= StyleSheet.create({
    mapPreview:{
        width: '100%',
        height: 200,
        marginVertical: 8,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'purple',
        borderRadius: 4,
        marginBottom: 10,
    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})
export default LocationPicker