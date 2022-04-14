import React,{useEffect,useState} from "react";
import { View,TextInput,Button,StyleSheet} from "react-native";
import { onCrear, crear } from "../../services/servicesLibros";
import { styles } from "./crear.style";



export default function Crear({}) {
  const [libros, setLibros] = useState({
    titulo: null,
    status: null,
    autor: null,
    description: null,
    isbn: null,
  });

  const anadirLibro = () => {
    crear(libros);
  };
  

  const onLibroCreated = () => {
      console.log("Librio Creado");
  }

  useEffect(() => {
    let subscription;
    (async function subscribe() {
      subscription = await onCrear(onLibroCreated);
    })();
    return () => {
      subscription?.unsubscribe();
    };
  });
  return (
  <View style = {styles.container}>
    <TextInput style = {styles.TextInput}
       onChangeText={(text) => {
        setLibros((current) => ({ ...current, titulo: text }));
      }} 
      placeholder="Nombre" />
    <TextInput style = {styles.TextInput}
    onChangeText={(text) => {
      setLibros((current) => ({ ...current, status: text }));
    }}  
    placeholder="status" />
    <TextInput style = {styles.TextInput}
    onChangeText={(text) => {
      setLibros((current) => ({ ...current, description: text }));
    }} 
    placeholder="descripcion" />
    <TextInput style = {styles.TextInput}
    onChangeText={(text) => {
      setLibros((current) => ({ ...current, isbn: text }));
    }} 
    placeholder="isbn" />
     <TextInput style = {styles.TextInput}
    onChangeText={(text) => {
      setLibros((current) => ({ ...current, autor: text }));
    }} 
    placeholder="Autor" />
    <Button style = {styles.button}
      title={"Guardar Libro"}
      onPress={anadirLibro}
    />
  </View>
  )
}


