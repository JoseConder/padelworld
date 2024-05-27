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
        <Text style={styles.title}>Ajustes</Text>
      </View>
        <View style={[styles.profileInfo, styles.backgroundColor]}>
            <Text style={styles.profileName}>Accesibilidad</Text>
        </View>
      {/* Menu Info */}
      {/* Menu Info */}
      {/* Lista */}
      {[
        { title: 'Formato de fecha', icon: 'calendar', onPress: () => navigation.navigate("Settings") },
        { title: 'Formato de hora', icon: 'calendar', onPress: () => navigation.navigate("Settings") },
      ].map((notification, index) => (
        <TouchableOpacity key={index} style={styles.notificationContainer} onPress={notification.onPress}>
          <FontAwesome name={notification.icon} style={styles.notificationIcon} />
          <View style={styles.textContainer}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
          </View>
          <FontAwesome name="chevron-right" style={styles.chevronIcon} />
        </TouchableOpacity>
      ))}

      <View style={[styles.profileInfo, styles.backgroundColor]}> 
        <Text style={styles.profileName}>A cerca de</Text>
      </View>

      {/* Lista */}
      {[
        { title: 'Dirección', icon: 'map', onPress: () => navigation.navigate("Settings") },
        { title: 'Telefono', icon: 'phone', onPress: () => navigation.navigate("Settings") }
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
        <Text style={styles.closeSesionButtonText}>Guardar ajustes</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <Image style={styles.navIcon} source={require("../assets/home.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Schedule")}>
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
  backgroundColor: {
    backgroundColor: '#F3F3F3',
  },
});

export default Menu;
