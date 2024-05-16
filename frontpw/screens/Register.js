import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>¡Bienvenido a{' '}<Text style={styles.boldText}>PadelWorld</Text></Text>
        <Image source={require('../assets/PadelOscuro.png')} style={styles.logo} />
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Crea tu cuenta para comenzar a reservar</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={styles.registerLink}>
          <Text style={styles.registerText}>¿Ya tienes cuenta?<Text style={styles.registerHighlight}> Inicia sesion aquí</Text></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput 
          style={styles.input} 
        />
        <Text style={styles.label}>Apellidos</Text>
        <TextInput 
          style={styles.input} 
        />
        <Text style={styles.label}>Correo</Text>
        <TextInput 
          style={styles.input} 
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput 
          style={styles.input}
          secureTextEntry={true} 
        />
      </View>
      <TouchableOpacity onPress={() => console.log("Registrarse")} style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Crear cuenta</Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>o Registrate con:</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity onPress={() => console.log("Registrarse con Google")}>
          <FontAwesome name="google" size={65} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Registrarse con Facebook")}>
          <FontAwesome name="facebook" size={65} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    padding: 16,
    flex: 1,
    paddingTop: 70,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 35,
  },
  boldText: {
    fontWeight: 'bold',
  },
  logo: {
    width: 125,
    height: 125,
  },
  subHeader: {
    width: '100%',
  },
  subHeaderText: {
    fontSize: 20,
    paddingBottom: 20,
  },
  registerLink: {
    marginTop: 8,
  },
  registerText: {
    fontSize: 20,
  },
  registerHighlight: {
    color: '#d4de88',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    paddingTop: 30,
  },
  label: {
    fontSize: 14,
  },
  input: {
    marginTop: 4,
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#dadada',
    borderRadius: 4,
    backgroundColor: 'white',
    height: 50,
  },
  registerButton: {
    backgroundColor: '#d2de33',
    padding: 12,
    borderRadius: 4,
    marginTop: 25,
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  registerButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    paddingTop: 15,
  },
  divider: {
    backgroundColor: 'gray',
    height: 1,
    flex: 1,
  },
  dividerText: {
    fontSize: 18,
    marginHorizontal: 4,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 15,
  },
});

