import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import appFirebase from '../credenciales';

const auth = getAuth(appFirebase);

export default function LoginScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sesion = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Sesion iniciada con exito');
      props.navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>¡Bienvenido a{' '}<Text style={styles.boldText}>PadelWorld</Text></Text>
        <Image source={require('../assets/PadelOscuro.png')} style={styles.logo} />
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Ingresa tus datos para iniciar sesión</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')} style={styles.registerLink}>
          <Text style={styles.registerText}>¿Aún no tienes cuenta?<Text style={styles.registerHighlight}> Regístrate aquí</Text></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={(texto) => setEmail(texto)}
          value={email}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput 
          style={styles.input} 
          secureTextEntry={true} 
          onChangeText={(texto) => setPassword(texto)}
          value={password}
        />
        <TouchableOpacity onPress={() => console.log("¿Olvidaste tu contraseña?")} style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={sesion} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>o inicia sesión con:</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity onPress={() => console.log("Iniciar sesión con Google")}>
          <FontAwesome name="google" size={65} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Iniciar sesión con Facebook")}>
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
    paddingTop: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 20,
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
    marginBottom: 30,
    padding: 8,
    borderWidth: 1,
    borderColor: '#dadada',
    borderRadius: 4,
    backgroundColor: 'white',
    height: 50,
  },
  forgotPassword: {
    marginTop: 8,
  },
  forgotPasswordText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#d2de33',
    padding: 12,
    borderRadius: 4,
    marginTop: 25,
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  loginButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    paddingTop: 25,
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
    paddingTop: 35,
  },
});

