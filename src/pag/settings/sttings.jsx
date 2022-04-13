import React from "react"
import { View,Text } from "react-native"


export default function Settings({state}){
    
    return (
        <View>
            <Text>{state.attributes.email}</Text>
        </View>
    )
}
