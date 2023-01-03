import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPlace from "./screens/AddPlace";
import AllPlaces from "./screens/AllPlaces";
import Map from "./screens/Map";
import IconButton from "./Components/UI/IconButton";
import { useEffect } from "react";
import { initialWindowMetrics } from "react-native-safe-area-context";
import { init } from './screens/database'
export default function App() {
  var Stack = createNativeStackNavigator();
  useEffect(()=>{
    init()
  },[])
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "blue" },
            headerTintColor: "whitesmoke",
            contentStyle: { backgroundColor: "grey" },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{ title: "Add a new place" }}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import AllPlaces from './screens/AllPlaces';
// import AddPlace from './screens/AddPlace';
// import {NavigationContainer} from '@react-navigation/native'
// import {createStackNavigator} from '@react-navigation/native-stack'

// const stack=createStackNavigator()

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <NavigationContainer>
//       <StatusBar style="dark" />
//       <stack.Navigator>
//         <stack.Screen name="AllPlaces" component={AllPlaces}/>
//         <stack.Screen name="AddPlace" component={AddPlace}/>
//       </stack.Navigator>
//       </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 40
//   },
// });
