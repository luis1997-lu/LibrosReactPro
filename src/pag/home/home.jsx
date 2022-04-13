import React, { useState, useEffect } from "react";
import {
  StatusBar,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  Modal,
  TextInput
} from "react-native";
import { list, eliminar } from "../../services/servicesLibros";
import Actualizar from "../actualizar";

export default function Home() {
  const [libros, setLibros] = useState([]);
  const [modal, setModal] = useState(false);

  async function mostrarLibros() {
    const librosObtenidos = await list();
    if (librosObtenidos) setLibros(librosObtenidos);
  }

  const eliminarLibro = (libro) => {
    eliminar(libro);
  };

  useEffect(() => {
    mostrarLibros();
  });

  return (
    <SafeAreaView>
      <View>
        {libros ? (
          libros.map((libro, index) => (
            <View key={index}>
              <Text>{libro.titulo}</Text>
              <Text>{libro.status}</Text>
              <Text>{libro.description}</Text>
              <Text>{libro.autor}</Text>
              <Text>{libro.isbn}</Text>
              <Button title="Borrar Libro" onPress={() => eliminarLibro(libro.id)}/>
              <Button title="Actualizar" onPress={()=> setModal(true)}/>
              <Modal
                animationType="slide"
                transparent={false}
                visible={modal}
                onRequestClose={() => {
                  setModal(!modal);
                }}
              >
                <Button 
                title="Atras"
                onPress={()=> setModal(!modal)}
                />
                <Actualizar libro={libro} />
              </Modal>
            </View>
          ))
        ) : (
          <Text>No hay Libros</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
