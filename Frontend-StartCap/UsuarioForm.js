import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function UsuarioForm({ usuarioData = {}, setUsuarioData, onSave }) {
  return (
    <View>
      <Text style={styles.title}>Formulario Usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="ID Usuario"
        value={usuarioData.id_Usuario || ''}
        onChangeText={(value) => setUsuarioData({ ...usuarioData, id_Usuario: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombres"
        value={usuarioData.nombres || ''}
        onChangeText={(value) => setUsuarioData({ ...usuarioData, nombres: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={usuarioData.contraseña || ''}
        onChangeText={(value) => setUsuarioData({ ...usuarioData, contraseña: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Rol"
        value={usuarioData.rol || ''}
        onChangeText={(value) => setUsuarioData({ ...usuarioData, rol: value })}
      />

      <Button title="Guardar Usuario" onPress={onSave} />
    </View>
  );
}


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
