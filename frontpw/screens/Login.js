import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import appFirebase from '../credenciales';
const auth = getAuth(appFirebase);


export default function Login(props) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const sesion = async()=>{
        try {
            await signInWithEmailAndPassword(auth, email, password)
            Alert.alert('Iniciando sesion', 'Accediendo...')
            props.navigation.navigate('Home')     
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.padre}>
            <View>
                <Image source={require('../assets/logo.jpg')} style= {styles.logo} />
            </View>

            <View style={styles.tarjeta}>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder="Correo Electronico"  style={{paddingHorizontal: 15}}
                    onChangeText={(text)=>setEmail(text)}/>
                </View>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder="Contraseña"  style={{paddingHorizontal: 15}} secureTextEntry={true}
                    onChangeText={(text)=>setPassword(text)}/>
                </View>

                <View style={styles.padreBoton}>
                    <TouchableOpacity style={styles.cajaBoton} onPress={sesion}>
                        <Text  style={styles.textoBoton}>Iniciar Sesion</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

        
    );
}

const styles = StyleSheet.create({
    
    padre:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },

    logo: {
        width: 200,
        height: 200,
        borderRadius: 50,
    },
    
    tarjeta: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    cajaTexto: {
        paddingVertical: 10,
        backgroundColor: 'cccccc40',
        borderRadius: 30,
        marginVertical: 10,
    },

    padreBoton: {
        alignItems: 'center'
    },
    cajaBoton: {
        backgroundColor: '#9fb24f',
        borderRadius: 30,
        paddingVertical: 20,
        width: 150,
        marginTop: 20
    },
    textoBoton: {
        textAlign: 'center',
        color: 'white'
    }


});
