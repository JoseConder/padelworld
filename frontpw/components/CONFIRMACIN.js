import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CONFIRMACIN = ({ onClose }) => {
  const navigation = useNavigation();

  const handleYes = () => {
    onClose(); // Cierra el componente inmediatamente
    setTimeout(() => {
      navigation.navigate("Login"); // Luego navega a la pantalla de Login
    }, 0); // Navega inmediatamente después
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <View style={styles.confirmacion}>
      <View style={styles.confirmacionInner} />
      <Pressable
        style={[styles.confirmacionChild, styles.yesButton]}
        onPress={handleYes}
      >
        <Text style={[styles.s, styles.sTypo]}>Sí</Text>
      </Pressable>

      <Pressable
        style={[styles.rectanglePressable, styles.noButton]}
        onPress={handleClose}
      >
        <Text style={[styles.no, styles.sTypo]}>No</Text>
      </Pressable>

      <Text style={styles.deseasCerrarTuSesion}>¿Deseas cerrar tu sesión?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmacion: {
    width: 280,
    height: 140,
    maxWidth: "100%", 
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 50,
  },
  confirmacionInner: {
    width: "100%",
    height: "100%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.textTextOnColor,
  },
  sTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  deseasCerrarTuSesion: {
    textAlign: "center",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
    top: 20,
  },
  yesButton: {
    backgroundColor: Color.colorPalegreen,
    position: "absolute",
    left: 40,
    top: 90,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
  },
  noButton: {
    backgroundColor: Color.colorLightcoral,
    position: "absolute",
    right: 40,
    top: 90,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
  },
});

export default CONFIRMACIN;
