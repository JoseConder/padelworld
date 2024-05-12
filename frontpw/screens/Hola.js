import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import appFirebase from '../credenciales';

const auth = getAuth(appFirebase);

export default function LoginScreen(props) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const sesion = async () => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Sesion iniciada con exito')
        props.navigation.navigate('Home')

    } catch (error) {
        console.log(error)
    }
}
  return (
    <View style={{ backgroundColor: '#F3F3F3', padding: 16, flex: 1, paddingTop: 70}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <Text style={{ fontSize: 35}}>¡Bienvenido a{' '}<Text style={{ fontWeight: 'bold'}}>PadelWorld</Text></Text>
        <Image source={require('../assets/PadelOscuro.png')} style={{ width: 125, height: 125 }} />
      </View>
      <View style={{ width: '100%' }}>
        <Text style={{ fontSize: 20, paddingBottom: 20}}>Ingresa tus datos para iniciar sesión</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={{ marginTop: 8 }}>
          <Text style={{ fontSize: 20 }}>¿Aún no tienes cuenta?<Text style = {{color: '#d4de88', fontSize: 20, fontWeight: 'bold'}}> Regístrate aquí</Text></Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', paddingTop: 30 }}>
        <Text style={{ fontSize: 14,}}>Correo electrónico</Text>
        <TextInput style={{ marginTop: 4, marginBottom: 30, padding: 8, borderWidth: 1, borderColor: '#dadada', borderRadius: 4, backgroundColor : 'white', height: 50}} 
        onChangeText={(texto) => setEmail(texto)}/>
        <Text style={{ fontSize: 14}}>Contraseña</Text>
        <TextInput style={{ marginTop: 4, padding: 8, borderWidth: 1, borderColor: '#dadada', borderRadius: 4, backgroundColor : 'white', height: 50 }} 
        secureTextEntry={true} onChangeText={(texto) => setPassword(texto)} />
        <TouchableOpacity onPress={() => console.log("¿Olvidaste tu contraseña?")} style={{ marginTop: 8 }}>
          <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={sesion} style={{ backgroundColor: '#d2de33', padding: 12, borderRadius: 4, marginTop: 25, width: '100%', height: 50 }}>
        <Text style={{ color: 'black', textAlign: 'center', fontSize: 16 }}>Iniciar sesión</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 16, paddingTop:25 }}>
        <View style={{ backgroundColor: 'gray', height: 1, flex: 1 }} />
        <Text style={{ fontSize: 18, marginHorizontal: 4}}>o inicia sesión con:</Text>
        <View style={{ backgroundColor: 'gray', height: 1, flex: 1 }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 35}}>
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

