import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert } from 'react-native';
import { db } from './firebase/firebaseconfig'; 
import { doc, setDoc } from 'firebase/firestore';
import InversionistaForm from './Frontend-StartCap/UsuarioForm';
import UsuarioForm from './Frontend-StartCap/InversionistaForm';

export default function App() {
  // Estados para manejar los datos del inversionista y usuario
  const [inversionistaData, setInversionistaData] = useState({
    id_inversionista: '',
    nombre1: '',
    nombre2: '',
    apellido1: '',
    apellido2: '',
    cedula: '',
    correo: '',
    localidad: '',
    id_Usuario: ''
  });

  const [usuarioData, setUsuarioData] = useState({
    id_Usuario: '',
    nombres: '',
    contraseña: '',
    rol: ''
  });

  // Función para guardar los datos del inversionista
  const guardarInversionista = async () => {
    if (inversionistaData.id_inversionista) {
      try {
        await setDoc(doc(db, 'inversionistas', inversionistaData.id_inversionista), inversionistaData);
        Alert.alert('Éxito', 'Datos del inversionista guardados correctamente');
      } catch (error) {
        console.error('Error al guardar inversionista: ', error);
        Alert.alert('Error', 'No se pudo guardar el inversionista');
      }
    } else {
      Alert.alert('Error', 'Debes completar todos los campos de inversionista');
    }
  };

  // Función para guardar los datos del usuario
  const guardarUsuario = async () => {
    if (usuarioData.id_Usuario) {
      try {
        await setDoc(doc(db, 'usuarios', usuarioData.id_Usuario), usuarioData);
        Alert.alert('Éxito', 'Datos del usuario guardados correctamente');
      } catch (error) {
        console.error('Error al guardar usuario: ', error);
        Alert.alert('Error', 'No se pudo guardar el usuario');
      }
    } else {
      Alert.alert('Error', 'Debes completar todos los campos de usuario');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Registro de Inversionistas y Usuarios</Text>
      
      {/* Formulario para inversionista */}
      <InversionistaForm 
        inversionistaData={inversionistaData} 
        setInversionistaData={setInversionistaData} 
        onSave={guardarInversionista} 
      />
      
      {/* Formulario para usuario */}
      <UsuarioForm 
        usuarioData={usuarioData} 
        setUsuarioData={setUsuarioData} 
        onSave={guardarUsuario} 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  }
});
