import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Inversionistas(props) {
  return (
    <View style={styles.contenedor}>
      <Image style={styles.imagen} source={props.foto} />
      <View style={styles.textoContenedor}>
        <Text style={styles.nombre}>
          {props.nombre} en {props.pais}
        </Text>
        <Text style={styles.cargo}>{props.cargo}</Text>
        <Text style={styles.inversionistas}>{props.inversionistas}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    minHeight: 250,
    backgroundColor: '#6495ED',
    marginVertical: 10,
  },
  imagen: {
    width: '100%',
    height: 250,
    flex: 2,
  },
  textoContenedor: {
    flex: 2,
    justifyContent: 'center',
    padding: 10,
  },
  nombre: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
  cargo: {
    fontStyle: 'italic',
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
  inversionistas: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
});

export default Inversionistas;