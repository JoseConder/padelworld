import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { FontAwesome } from '@expo/vector-icons'; // Importa FontAwesome desde expo-vector-icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';



export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Barra de Padel World */}
            <View style={styles.padelWorldBar}>
                <Text style={styles.padelWorldText}>Padelworld</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <AntDesign name="user" size={28} style={styles.userIcon} />
                </TouchableOpacity>
            </View>


            {/* Contenido principal en ScrollView */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Contenido debajo de la barra de Padel World */}
                <TouchableOpacity   onPress={() => navigation.navigate('Notifications')} style={styles.pressableContainer}>
                    <View style={styles.rectangleView}>
                        <View style={styles.headerContainer}>
                            <Image
                                style={styles.userCircleIcon}
                                source={require("../assets/usercircle.png")}
                            />
                            {/* <FontAwesomeIcon icon={faCircleUser} size={50}  /> */}
                            <Text style={styles.greeting}>¡Hola, Sofía!</Text>
                        </View>
                        <View style={styles.notificationContainer}>
                            <FontAwesome name={'bell'} style={styles.bellFIcon} />
                            <Text style={styles.notifications}>4 notificaciones</Text>
                        </View>
                    </View>
                </TouchableOpacity>


                {/* Contenido de las reservas */}
                <Pressable style={styles.pressableContainer}>
                    <View style={styles.rectangleView2}>
                        <View style={styles.headerContainer}>
                            <Image
                                style={styles.reservationIcon}
                                source={require("../assets/image-7.png")}
                            />
                        </View>
                        <View style={styles.textButtonContainer}>
                            <Text style={styles.reservationText}>Actualmente no hay canchas reservadas</Text>
                            <TouchableOpacity  onPress={() => navigation.navigate('Courts')} style={styles.searchButton}>
                                <Text style={styles.searchButtonText}>Buscar canchas</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Pressable>
            </ScrollView>


            {/* Barra de navegación inferior */}
            <View style={styles.bottomBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        style={styles.bottomIcon}
                        source={require("../assets/home.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
                    <Image
                        style={styles.bottomIcon}
                        source={require("../assets/calendar.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    },
    padelWorldBar: {
        height: 94,
        backgroundColor: "#D2DE33",
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingTop:50


    },
    padelWorldText: {
        fontSize: 28,
        textAlign: 'left',
        fontFamily: FontFamily.poppinsMedium,
    
    },
    userIcon: {
       paddingBottom:10
      
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 80,
        paddingBottom: 80, // espacio para la barra inferior
    },
    pressableContainer: {
        marginBottom: 0,
    },
    rectangleView: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#CFCFCF',
    },
    rectangleView2: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderTopWidth: 1,
      borderTopColor: '#CFCFCF',
      borderBottomWidth: 1,
      borderBottomColor: '#CFCFCF',
      
  },
 
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userCircleIcon: {
        width: 70,
        height: 70,
        marginRight: 10,
        marginLeft:-20
    },
    greeting: {
        fontSize: 28,
        fontFamily: FontFamily.poppinsMedium,

    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -25,
        marginLeft: 60,
    },
    bellFIcon: {
        fontSize:18,
        marginRight: 5
    },
    notifications: {
        fontSize: 16,
        color: '#000',
        fontFamily: FontFamily.poppinsRegular,
        marginTop:5
       
    },
    reservationIcon: {
        width: 70,
        height: 70,
        marginRight: 10,
        marginLeft:-20,
        marginTop:20
    },
    reservationText: {
        fontSize: 16,
        color: '#000',
        fontFamily: FontFamily.poppinsRegular,
        
    },
    searchButton: {
        backgroundColor: '#D2DE33',
        borderRadius: 8,
        paddingVertical: 7,
        paddingHorizontal: 2,
        marginTop: 20,
        alignSelf: 'stretch', // Asegura que el botón ocupe todo el ancho disponible
        width: '100%', // Ocupa el 100% del ancho del contenedor padre
    },
    searchButtonText: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        fontFamily: FontFamily.poppinsMedium
    },
    bottomBar: {
        height: 85,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
        borderTopWidth: 1,
        borderColor: '#ddd',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    bottomIcon: {
        width: 30,
        height: 30,
    },
    textButtonContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
   
});


