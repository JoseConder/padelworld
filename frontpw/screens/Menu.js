import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import DeleteAccount from "../components/DeleteAccount";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { TouchableOpacity } from "react-native";
import CONFIRMACIN from "../components/CONFIRMACIN";

const MEN = () => {
  const [rectangle4Visible, setRectangle4Visible] = useState(false);
  const [buttonContainerVisible, setButtonContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openRectangle4 = useCallback(() => {
    setRectangle4Visible(true);
  }, []);

  const closeRectangle4 = useCallback(() => {
    setRectangle4Visible(false);
  }, []);

  const openButtonContainer = useCallback(() => {
    setButtonContainerVisible(true);
  }, []);

  const closeButtonContainer = useCallback(() => {
    setButtonContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.men}>

        {/* Rectangulo perfil */}
        <TouchableOpacity  onPress={() => navigation.navigate("Profile")}>
          <Pressable
            style={[styles.menChild, styles.menChildPosition]}
            onPress={() => navigation.navigate("Profile")} 
          />
          <Image
          style={styles.userCircleIcon}
          contentFit="cover"
          source={require("../assets/usercircle1.png")}
          />
          <Text style={[styles.user, styles.men1Layout]}>
            Sofía González Lechuga
          </Text>
          <Text style={styles.useremail}>sofia@gmail.com</Text>
        </TouchableOpacity>
        

      {/* Rectangulo de notificaciones */}
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <View style={[styles.menItem, styles.menLayout]} />
          <Image
            style={[styles.bellF, styles.iconLayout]}
            source={require("../assets/bellf.png")}
          />
          <Text style={styles.notificaciones}>Notificaciones</Text>
        </TouchableOpacity>

         {/* Rectangulo Mis datos de pago */}
         <TouchableOpacity onPress={() => navigation.navigate("SavedCards")}>
          <Pressable
            style={[styles.menInner, styles.menLayout]}
            onPress={() => navigation.navigate("SavedCards")}
          >
            <View style={[styles.componentChild, styles.iconLayout1]} />
          </Pressable>
          <Image
            style={[styles.creditCardIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/creditcard.png")}
          />
          <Text style={[styles.misDatosDe, styles.ajustesLayout]}>
          Mis datos de pago
          </Text>
        </TouchableOpacity>


        {/* Rectangulo de ajustes  */}
        
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <View style={[styles.rectanglePressable, styles.menLayout]} />

          <Image
            style={[styles.cogIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/cog.png")}
          />
          <Text style={[styles.ajustes, styles.ajustesLayout]}>Ajustes</Text>
        </TouchableOpacity>

        <View style={[styles.lineView, styles.lineViewBorder]} />
        <View style={[styles.menChild2, styles.menChildLayout]} />
        <View style={[styles.menChild3, styles.menChildLayout]} />
        <View style={[styles.menChild4, styles.menChildLayout]} />
        <View style={[styles.menChild5, styles.menChildLayout]} />
        <View style={[styles.menChild6, styles.menChildLayout]} />



        <Pressable
          style={[styles.menChild1, styles.menLayout]}
          onPress={openRectangle4}
        />
        <Text style={[styles.eliminarCuenta, styles.ajustesLayout]}>
          Eliminar cuenta
        </Text>
        <Image
            style={[styles.xIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/x.png")}
          />

        {/* Imgenes flechas derechas  */}
        <Image
          style={[styles.chevronRightIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />
        <Image
          style={[styles.chevronRightIcon1, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />
        <Image
          style={[styles.chevronRightIcon2, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />
        <Image
          style={[styles.chevronRightIcon3, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />


        <Pressable style={styles.button} onPress={openButtonContainer}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </Pressable>

        {/* Barra superior */}
        <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={require("../assets/vector-141.png")} style={styles.backIcon} />
        </Pressable>
        <Text style={styles.title}>Canchas</Text>
    </View>


        {/* Barra inferior */}
        <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
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

      {/* interacciones de los componentes */}
      <Modal animationType="fade" transparent visible={rectangle4Visible}>
        <View style={styles.rectangle4Overlay}>
          <Pressable style={styles.rectangle4Bg} onPress={closeRectangle4} />
          <DeleteAccount onClose={closeRectangle4} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={buttonContainerVisible}>
        <View style={styles.buttonContainerOverlay}>
          <Pressable
            style={styles.buttonContainerBg}
            onPress={closeButtonContainer}
          />
          <CONFIRMACIN onClose={closeButtonContainer} />
        </View>
      </Modal>


    </>
  );
};

const styles = StyleSheet.create({

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
  menChildPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  menLayout: {
    height: 35,
    width: 390,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    height: 18,
    width: 18,
    left: 13,
    position: "absolute",
  },
  lineViewBorder: {
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    position: "absolute",
  },
  menChildLayout: {
    width: 386,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    position: "absolute",
  },
  men1Layout: {
    height: 50,
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 30,
    letterSpacing: 0,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  ajustesLayout: {
    width: 203,
    left: 37,
    fontSize: FontSize.size_lg,
    height: 50,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 30,
    letterSpacing: 0,
    position: "absolute",
  },
  chevronIconLayout: {
    height: 20,
    width: 10,
    left: 365,
    position: "absolute",
    overflow: "hidden",
  },
  homeLayout: {
    width: 35,
    height: 35,
    position: "absolute",
  },
  menChild: {
    top: 94,
    height: 121,
    backgroundColor: Color.textTextOnColor,
  },
  componentChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.textTextOnColor,
    position: "absolute",
  },
  menInner: {
    top: 248,
  },
  creditCardIcon: {
    top: 255,
    overflow: "hidden",
  },
  menItem: {
    top: 214,
    backgroundColor: Color.textTextOnColor,
  },
  icon: {
    overflow: "hidden",
  },
  bellF: {
    top: 224,
  },
  rectanglePressable: {
    top: 283,
    backgroundColor: Color.textTextOnColor,
  },
  rectangle4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  menChild1: {
    top: 318,
    backgroundColor: Color.textTextOnColor,
  },
  xIcon: {
    top: 326,
    overflow: "hidden",
  },
  userCircleIcon: {
    top: 120,
    left: 4,
    width: 70,
    height: 70,
    position: "absolute",
    overflow: "hidden",
  },
  lineView: {
    top: 93,
    borderTopWidth: 3,
    width: "100%",
    height: 3,
  },
  menChild2: {
    top: 249,
  },
  menChild3: {
    top: 215,
  },
  menChild4: {
    top: 318,
  },
  menChild5: {
    top: 286,
  },
  menChild6: {
    top: 353,
  },
  user: {
    top: 127,

    fontFamily: FontFamily.poppinsRegular,
    left: 72,
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 30,
    letterSpacing: 0,
    fontSize: FontSize.size_3xl,
  },
  useremail: {
    top: 160,
    fontWeight: "200",
    fontFamily: FontFamily.poppinsExtraLight,
    fontSize: FontSize.size_lg,
    height: 50,
    width: 260,
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 30,
    letterSpacing: 0,
    left: 72,
    position: "absolute",
  },
  notificaciones: {
    top: 218,
    width: 132,
    left: 37,
    fontSize: FontSize.size_lg,
    height: 50,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 30,
    letterSpacing: 0,
    position: "absolute",
  },
  misDatosDe: {
    top: 251,
  },
  ajustes: {
    top: 286,
  },
  eliminarCuenta: {
    top: 320,
  },
  cogIcon: {
    top: 292,
    overflow: "hidden",
  },
  chevronRightIcon: {
    top: 222,
  },
  chevronRightIcon1: {
    top: 293,
  },
  chevronRightIcon2: {
    top: 329,
  },
  chevronRightIcon3: {
    top: 258,
  },
  buttonContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  buttonText: {
    fontSize: FontSize.p_size,
    lineHeight: 18,
    fontFamily: FontFamily.headingHeading03,
    color: Color.colorBlack,
    textAlign: "center",
    fontWeight: "500",
  },
  button: {
    top: 640,
    left: 20,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorYellowgreen_100,
    width: 350,
    height: 51,
    alignItems: "center",
    paddingHorizontal: Padding.p_41xl,
    paddingVertical: Padding.p_mini,
    position: "absolute",
  },
  rectangleView: {
    top: 0,
    backgroundColor: Color.colorYellowgreen_200,
    height: 94,
  },
  leftChild: {
    top: -1,
    left: -1,
    borderRadius: Border.br_8xs,
    borderColor: Color.colorBlack,
    borderWidth: 1.5,
    width: 32,
    height: 32,
    borderStyle: "solid",
    position: "absolute",
  },
  leftItem: {
    top: 11,
    left: 12,
    borderRadius: Border.br_12xs,
    width: 5,
    height: 10,
    position: "absolute",
  },
  left: {
    top: 2,
    left: 2,
    width: 30,
    height: 30,
    position: "absolute",
  },
  iconexlineTwoToneleftSqua: {
    height: "4.15%",
    width: "8.97%",
    top: "5.92%",
    right: "85.9%",
    bottom: "89.93%",
    left: "5.13%",
    position: "absolute",
  },
  men1: {
    top: 54,
    left: 60,
    fontFamily: FontFamily.poppinsMedium,
    width: 190,
    fontWeight: "500",
    height: 23,
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 30,
    letterSpacing: 0,
    fontSize: FontSize.size_3xl,
  },
  menChild7: {
    top: 751,
    width: 394,
    height: 93,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  calendar: {
    left: 242,
    top: 774,
  },
  home: {
    left: 105,
    top: 773,
  },
  menChild8: {
    top: 752,
    borderTopWidth: 2,
    width: 392,
    height: 2,
    left: 0,
  },
  men: {

    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: '#F3F3F3',
  },
});

export default MEN;
