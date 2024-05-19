import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";


const NOTIFICACIONES = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notificaciones}>

    <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={require("../assets/vector-141.png")} style={styles.backIcon} />
        </Pressable>
        <Text style={styles.title}>Notificaciones</Text>
    </View>

      {/* Notifications List */}
      {[
        { message: '¡Tu reservación ha sido cancelada!', details: 'Tu reservación para el día 20/04/2024...', key: 1 },
        { message: 'Tu pago no ha sido procesado', details: 'Tu pago del día 19/04/2024 no ha sido...', key: 2 },
        { message: '¡Tu reservación ha sido cancelada!', details: 'Tu reservación para el día 25/05/2024...', key: 3 },
        { message: 'Tu pago no ha sido procesado', details: 'Tu pago del día 17/04/2024 no ha sido...', key: 4 },
      ].map((notification) => (
        <View key={notification.key} style={styles.notificationContainer}>
          <Image
            style={styles.bellIcon}
            source={require("../assets/bellf.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.notificationTitle}>{notification.message}</Text>
            <Text
              style={styles.notificationDetails}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {notification.details}
            </Text>
          </View>
        </View>
      ))}

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("HOME")}>
          <Image
            style={styles.navIcon}
            source={require("../assets/home.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("CALENDARIO")}>
          <Image
            style={styles.navIcon}
            source={require("../assets/calendar.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificaciones: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  notificationContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#DDD',
  },
  header: {
    height: 94,
    backgroundColor: "#D2DE33", 
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,

  },
  backButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#000000",
    marginRight: 16,
    bottom:-20
  },
  backIcon: {
    width: 7,
    height: 14,
    tintColor: "#000000",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    bottom:-28,
    fontFamily: FontFamily.poppinsMedium

  },
  bellIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 15,
    color: '#000',
    marginTop: 5,
    fontFamily: FontFamily.poppinsMedium


  },
  notificationDetails: {
    fontSize: 14,
    color: '#666',
    fontFamily: FontFamily.poppinsExtraLight


  },
  bottomNav: {
    height: 85,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderTopWidth: 1,
    borderColor: '#DDD',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navButton: {
    alignItems: 'center',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
  navText: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
});

export default NOTIFICACIONES;