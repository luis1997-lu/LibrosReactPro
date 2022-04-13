import React, { useState, useEffect } from "react";
import { View,TextInput,Button } from "react-native";
import { onActualizar,actualizar } from "../../services/servicesLibros";


export default function Actualizar({ libro }) {

  const [libros, setLibros] = useState({
    id: libro.id,
    titulo: libro.titulo,
    status: libro.status,
    autor: libro.autor,
    description: libro.description,
    isbn: libro.isbn,
  });

  const updateLibro = (id) => {
    actualizar(id);
  };


  useEffect(() => {
    let subscription;
    (async function subscribe() {
      subscription = await onActualizar(onLibros);
    })();
    return () => {
      subscription?.unsubscribe();
    };
  });
  const onLibros= () =>{
    console.log("Se ha actializado un libro");
  }

  return (
    <View>
      <TextInput
        onChangeText={(text) => {
          setLibros((current) => ({ ...current, titulo: text }));
        }}
        placeholder="Nombre"
      />
      <TextInput
        onChangeText={(text) => {
          setLibros((current) => ({ ...current, status: text }));
        }}
        placeholder="status"
      />
      <TextInput
        onChangeText={(text) => {
          setLibros((current) => ({ ...current, description: text }));
        }}
        placeholder="descripcion"
      />
      <TextInput
        onChangeText={(text) => {
          setLibros((current) => ({ ...current, isbn: text }));
        }}
        placeholder="isbn"
      />
      <TextInput
        onChangeText={(text) => {
          setLibros((current) => ({ ...current, autor: text }));
        }}
        placeholder="Autor"
      />
      <Button title={"Actualizar Libro"} onPress={()=> updateLibro(libros)} />
    </View>
  );
}
