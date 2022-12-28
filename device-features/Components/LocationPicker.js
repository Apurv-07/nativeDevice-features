import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

function LocationPicker() {
    function getLocationHandler(){

    }
    function pickOnMapHandler(){

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