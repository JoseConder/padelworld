import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Barra de Padel World */}
            <View style={styles.padelWorldBar}>
                <Text style={styles.padelWorldText}>Padelworld</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image
                        style={styles.userIcon}
                        source={require("../assets/usercircle.png")}
                    />
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
                            <Text style={styles.greeting}>¡Hola, Sofía!</Text>
                        </View>
                        <View style={styles.notificationContainer}>
                            <Image
                                style={styles.bellFIcon}
                                source={require("../assets/bellf.png")}
                            />
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
                <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
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
        backgroundColor: '#fff',
    },
    padelWorldBar: {
        height: 94,
        backgroundColor: Color.colorYellowgreen_200,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingBottom: 5,


    },
    padelWorldText: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        fontFamily: FontFamily.poppinsMedium
    },
    userIcon: {
        width: 40,
        height: 40,
      
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
        width: 40,
        height: 40,
        marginRight: 10,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: FontFamily.poppinsMedium,
        fontSize: FontSize.size_9xl
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 50,
    },
    bellFIcon: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    notifications: {
        fontSize: 16,
        color: '#000',
        fontFamily: FontFamily.poppinsRegular
       
    },
    reservationIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        fontFamily: FontFamily.poppinsMedium
    },
    bottomBar: {
        height: 85,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
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


