import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Login() {
    return(
        <View style={styles.padre}>
            <View>
                <Image source={require('../assets/logo.jpg')} style={styles.logo}/>
            </View>

            <View style={styles.tarjeta}>

                <View style={styles.cajaTexto}>
                    <TextInput placeholder="Correo Electronico" style={{paddingHorizontal: 15}}/>
                </View>

                <View style={styles.cajaTexto}>
                    <TextInput placeholder="Contraseña" style={{paddingHorizontal: 15}}/>
                </View>

                <View style={styles.padreBoton}>
                    <TouchableOpacity style={styles.cajaBoton}>
                        <Text style= {styles.textoBoton}>Iniciar Sesion</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
        </View>
    )
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