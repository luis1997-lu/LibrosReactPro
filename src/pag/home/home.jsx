import React, { useState, useEffect } from "react";
import {StatusBar,Text,View,Button,ScrollView,SafeAreaView,Modal,TextInput,StyleSheet,SectionList} from "react-native";
import { list, eliminar } from "../../services/servicesLibros";
import Actualizar from "../actualizar";
import { styles } from "./home.style";

export default function Home() {

  const [visible, setVisible] = React.useState(false);
  const [libros, setLibros] = useState([]);
  const [modal, setModal] = useState(false);

  const hideDialog = () => setVisible(false);
  


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
    <ScrollView visible={visible} onDismiss={hideDialog}>
    <SafeAreaView >
   
      <View  >
        {libros ? (
          libros.map((libro, index) => (
            <View key={index} style = {styles.container} >
              <Text style = {styles.TextInput}>Titulo: {libro.titulo}</Text>
              <Text style = {styles.TextInput}>Status: {libro.status}</Text>
              <Text style = {styles.TextInput}>Descripcion: {libro.description}</Text>
              <Text style = {styles.TextInput}>Autor: {libro.autor}</Text>
              <Text style = {styles.TextInput}>ISBN:{libro.isbn}</Text>
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
                <Button style={styles.Button}
                title="Atras"
                onPress={()=> setModal(!modal)}
                />
                <Actualizar libro={libro} style = {styles.Button} />
              </Modal>
            </View>
          ))
        ) : (
          <Text>No hay Libros</Text>
        )}
      </View>
      
    </SafeAreaView>
    </ScrollView>
  );
}


