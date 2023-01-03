import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { insertPlace } from '../screens/database'

function PlaceItem({place, onSelect}) {
  console.log("The place is")
  console.log(place)
  var promise=new Promise((resolve,reject)=>{
    if (place){
      resolve("The data was insert")
    }else{
      reject("The data was not successful")
    }
  })
  promise.then((data)=>{
    console.log(data)
    insertPlace(place)
  }).catch(err=>console.log(err))
  return (
    <Pressable style={({pressed})=>[styles.item, pressed&&styles.pressed]} onPress={onSelect}>
        <Image style={styles.image} source={{uri: place.imageUri}} />
        <View style={styles.info}>
          <Text style={styles.title}>{place.title}</Text>
          <Text>{place.address}</Text>
        </View>
    </Pressable>
  )
}
const styles=StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: 'blue',
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 2,
    padding: 5,
    margin: 5,
    marginRight: 10,
  },
  pressed:{
    opacity: 0.9
  },
  image:{
    flex: 1,
    height: 100,
  },
  info:{
    flex: 2,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,

  },
  title:{
    fontWeight: 'bold',
    fontSize: 18,
    color: 'grey',
    marginLeft: 20,
  },
})
export default PlaceItem