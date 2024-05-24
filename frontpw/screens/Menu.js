import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily } from "../GlobalStyles";
import { FontAwesome } from '@expo/vector-icons'; // Importa FontAwesome desde expo-vector-icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Image } from "react-native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require("../assets/vector-141.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Menú</Text>
      </View>

      {/* Menu Info */}
      <TouchableOpacity  style={styles.profileInfo} onPress={() => navigation.navigate("Profile")}>
        {/* <Image style={styles.profileImage} source={require("../assets/usercircle1.png")} /> */}
        {/* <FontAwesome name="user-circle" style={styles.profileImage} /> */}
        <FontAwesomeIcon icon={faCircleUser} size={50} color="#626465" style={styles.profileImage}/>
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Sofía González Lechuga</Text>
          <Text style={styles.emailText}>sofia@gmail.com</Text>
        </View>
      </TouchableOpacity>

      {/* Lista */}
      {[
        { title: 'Notificaciones', icon: 'bell', onPress: () => navigation.navigate("Notifications") },
        { title: 'Mis datos de Pago', icon: 'credit-card', onPress: () => navigation.navigate("PaymentData") },
        { title: 'Ajustes', icon: 'gear', onPress: () => navigation.navigate("Settings") },
        { title: 'Eliminar Cuenta', icon: 'times', onPress: () => navigation.navigate("DeleteAccount") },
      ].map((notification, index) => (
        <TouchableOpacity key={index} style={styles.notificationContainer} onPress={notification.onPress}>
          <FontAwesome name={notification.icon} style={styles.notificationIcon} />
          <View style={styles.textContainer}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
          </View>
          <FontAwesome name="chevron-right" style={styles.chevronIcon} />
        </TouchableOpacity>
      ))}


      <TouchableOpacity style={styles.closeSesionButton} onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.closeSesionButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <Image style={styles.navIcon} source={require("../assets/home.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Calendario")}>
          <Image style={styles.navIcon} source={require("../assets/calendar.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
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
    bottom: -20,
  },
  backIcon: {
    width: 7,
    height: 14,
    color: "#626465",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    bottom: -28,
    fontFamily: FontFamily.poppinsMedium,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
    padding: 10,
  },
  profileImage: {
    fontSize:50,
    color: '#626465',
    borderRadius: 25,
    marginRight: 15,
  },
  profileTextContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontFamily: FontFamily.poppinsRegular,
  },
  emailText: {
    fontSize: 18,
    fontFamily: FontFamily.poppinsExtraLight,
    marginTop: -8,
  },
  closeSesionButton: {
    height: 50,
    backgroundColor: '#D2DE33',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 340,
  },
  closeSesionButtonText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: FontFamily.poppinsMedium,
  },
  bottomNav: {
    height: 85,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderTopWidth: 2,
    borderColor: '#CFCFCF',
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
  notificationContainer: {
    width: '100%',
    height: 35,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    justifyContent: 'space-between',
  },
  notificationIcon: {
    fontSize: 24,
    color: '#000',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  notificationTitle: {
    fontSize: 18,
    color: '#000',
    fontFamily: FontFamily.poppinsRegular,
  },
  chevronIcon: {
    color: '#000',
    fontSize: 18,
  },
});

export default Menu;
