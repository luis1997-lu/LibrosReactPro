
import { Text } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalContext } from "../context/global/global.context";
import Home from "../pag/home";
import Settings from "../pag/settings";
import Actualizar from "../pag/actualizar";
import Crear from "../pag/crear";
const options = ({route}) => ({
    tabBarIcon: ({focused, color, size}) =>{
      let iconName;
  
      if(route.name === "Home"){
        iconName = focused
        ? "home-outline"
        : "home-outline"
      } else if(route.name === "Crear"){
        iconName = "duplicate-outline"
      } else if(route.name === "Settings"){
          iconName = "ios-information-circle"
      } else if(route.name === "")
      return <Ionicons name={iconName} size={size} color={color} />
    },
    tabBarActiveTintColor: "#00ADE0",
    tabBarInactiveTintColor: "gray",
  });


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Main Component exported

export default function MainNavigator({}){
  const { logout, userInfo } = useContext(GlobalContext);
  
    return(
        <NavigationContainer>
           <Tab.Navigator screenOptions={options}>
                <Tab.Screen name="Home" 
                children={(props) => (<Home />)} />
                <Tab.Screen name="Settings" 
                children={(props) => (<Settings onPress={logout} state={userInfo}/>) } />
                
                <Tab.Screen name="Crear" component={Crear} />
           </Tab.Navigator>
           
        </NavigationContainer>
    )
}