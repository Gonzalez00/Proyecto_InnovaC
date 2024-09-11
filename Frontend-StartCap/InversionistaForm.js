import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../firebase/firebaseconfig';
import { doc, setDoc } from 'firebase/firestore';

const InversionistaForm = () => {
  const [nombre1, setNombre1] = useState('');
  const [nombre2, setNombre2] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [id_Usuario, setId_Usuario] = useState('');

  const guardarInversionista = async () => {
    try {
      await setDoc(doc(db, "inversionistas", "uniqueID"), {
        nombre1: nombre1,
        nombre2: nombre2,
        apellido1: apellido1,
        apellido2: apellido2,
        cedula: cedula,
        correo: correo,
        localidad: localidad,
        id_Usuario: id_Usuario,
      });
      alert("Inversionista guardado!");
    } catch (error) {
      console.error("Error al guardar inversionista:", error);
      alert("Hubo un error al guardar el inversionista.");
    }
  };

  return (
    <View style={styles.container}>
      <Text> Primer Nombre:</Text>
      <TextInput style={styles.input} value={nombre1} onChangeText={setNombre1} />

      <Text> Segundo Nombre:</Text>
      <TextInput style={styles.input} value={nombre2} onChangeText={setNombre2} />

      <Text> Primer Apellido:</Text>
      <TextInput style={styles.input} value={apellido1} onChangeText={setApellido1} />

      <Text>Segundo Apellido:</Text>
      <TextInput style={styles.input} value={apellido2} onChangeText={setApellido2} />

      <Text>Cédula:</Text>
      <TextInput style={styles.input} value={cedula} onChangeText={setCedula} />

      <Text>Correo:</Text>
      <TextInput style={styles.input} value={correo} onChangeText={setCorreo} />

      <Text>Localidad:</Text>
      <TextInput style={styles.input} value={localidad} onChangeText={setLocalidad} />

      <Text>ID Usuario:</Text>
      <TextInput style={styles.input} value={id_Usuario} onChangeText={setId_Usuario} />

      <Button title="Registrarse" onPress={guardarInversionista} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginVertical: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: '#007BFF', // Color del borde
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
  },
});

export default InversionistaForm;
