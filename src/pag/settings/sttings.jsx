import React from "react";
import { View, Text, Button } from "react-native";
import { Auth } from "aws-amplify";
import { Avatar } from "react-native-paper";
import { styles } from "./settings.styles";

export default function Settings({ state }) {
  async function logout() {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log("Error al salir");
    }
  }

  return (
    <View style={styles.container}>
      <Avatar.Image
        rounded
        style={styles.iconUser}
        source={require("../../../assets/Usuario.png")}
      />
      <Text style={styles.Text}>{state.attributes.email}</Text>
      <Button style={styles.button} title="Sing out" onPress={logout} />
    </View>
  );
}
