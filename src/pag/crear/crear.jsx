import React,{useEffect,useState} from "react";
import { View,TextInput,Button } from "react-native";
import { onCrear, crear } from "../../services/servicesLibros";

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
      console.log("Se ha creado un libro");
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
  <View>
    <TextInput
       onChangeText={(text) => {
        setLibros((current) => ({ ...current, titulo: text }));
      }} 
      placeholder="Nombre" />
    <TextInput
    onChangeText={(text) => {
      setLibros((current) => ({ ...current, status: text }));
    }}  
    placeholder="status" />
    <TextInput
    onChangeText={(text) => {
      setLibros((current) => ({ ...current, description: text }));
    }} 
    placeholder="descripcion" />
    <TextInput
    onChangeText={(text) => {
      setLibros((current) => ({ ...current, isbn: text }));
    }} 
    placeholder="isbn" />
     <TextInput
    onChangeText={(text) => {
      setLibros((current) => ({ ...current, autor: text }));
    }} 
    placeholder="Autor" />
    <Button
      title={"Guardar Libro"}
      onPress={anadirLibro}
    />
  </View>
  )
}
