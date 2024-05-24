import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily,Color} from "../GlobalStyles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require("../assets/vector-141.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Perfil</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo} onPress={() => navigation.navigate("Profile")}>
        {/* <Image style={styles.profileImage} source={require("../assets/usercircle1.png")} /> */}
        <FontAwesomeIcon icon={faCircleUser} size={50} color="#626465" style={styles.profileImage}/>
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Sofía González Lechuga</Text>
          <Text style={styles.emailText}>sofia@gmail.com</Text>
        </View>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {[
          { label: "Nombre", value: "Sofía" },
          { label: "Apellidos", value: "González Lechuga" },
          { label: "Correo electrónico", value: "sofia@gmail.com" },
          { label: "Fecha de nacimiento", value: "19/04/2002" }
        ].map((item, index) => (
          <View key={index} style={styles.formRow}>
            <View style={styles.inputRow}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>{item.label}</Text>
                <TextInput style={styles.input} value={item.value} editable={false} />
              </View>
              <TouchableOpacity style={styles.editButton}>
                <FontAwesomeIcon icon={faPencil} style={styles.editIcon}/>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.saveButton }  onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.saveButtonText}>Guardar ajustes</Text>
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
    tintColor: "#000000",
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
    paddingTop:30,
    padding:10
  },
  profileImage: {
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
    marginTop:-8
  },
  form: {
    backgroundColor: '#FFFFFF',
    paddingTop:20
  },
  formRow: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#CFCFCF',
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Asegura que los elementos estén distribuidos a lo largo del contenedor
    height: 60,
    paddingHorizontal:30
  },
  labelContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: FontFamily.poppinsMedium,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',

  },
  input: {
    fontSize: 14,
    fontFamily: FontFamily.poppinsRegular,
    flex: 1,
    paddingVertical: 0, // Asegura que el texto se ajuste correctamente
    width:'100%'
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Ajusta el tamaño del botón para que sea más pequeño
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  saveButton: {
    height: 50,
    backgroundColor: '#D2DE33',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 225,
  },
  saveButtonText: {
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
});

export default Profile;
