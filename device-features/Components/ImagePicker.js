import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import React, { useState } from 'react'
import { Alert, Button, Image, StyleSheet, View, Text } from 'react-native'

function ImagePicker({onTakeImage}) {
    var [useCameraPermissionsInformation, requestPermission] = useCameraPermissions();
    var [pickedImage, setPickedImage]=useState("")

    async function verifyPermissions(){
        const havePermission=await verifyPermissions();
        if(!havePermission){
            return;
        }
        if(useCameraPermissionsInformation.status===PermissionStatus.UNDETERMINED){
            const permissionResponse=await requestPermission();
            return permissionResponse.granted;
        }
        if(useCameraPermissionsInformation.status===PermissionStatus.DENIED){
            Alert.alert(
                "Insufficient Permissions",
                "You need to grant permissions to use this app"
            );
            return false
        }
        return true
    }
    async function takeImageHandler(){
        const image=await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        await setPickedImage(pickedImage=image.assets[0].uri)
        onTakeImage(pickedImage);
    }
    let imagePreview=<Text style={styles.imagePreview}>No image taken yet</Text>
    if (pickedImage){
        imagePreview=<Image style={styles.image} source={{uri:pickedImage}} />
    }
  return (
    <View>
        {imagePreview}
        <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  )
}

const styles=StyleSheet.create({
    imagePreview:{
        width: '100%',
        height: 200,
        marginVertical: 8,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'purple',
        borderRadius: 4,
        marginBottom: 10,
    },
    image:{
        width: '100%',
        height: 200,
        marginBottom: 10,
    }
})
export default ImagePicker