import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily, Padding } from "../GlobalStyles";

const HOME = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homePosition]} />
      <View style={styles.homeItem} />
      <Text style={[styles.padelworld, styles.padelworldLayout]}>
        Padelworld
      </Text>
      <Pressable
        style={[styles.user, styles.userLayout]}
        onPress={() => navigation.navigate("Men")}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.calendar, styles.userLayout]}
        onPress={() => navigation.navigate("Calendario")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/calendar.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.homeInner, styles.homePosition]}
        onPress={() => navigation.navigate("Notificaciones")}
      />
      <View style={[styles.rectangleView, styles.homePosition]} />
      <Image
        style={styles.bellFIcon}
        contentFit="cover"
        source={require("../assets/bellf.png")}
      />
      <Image
        style={[styles.userCircleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/usercircle.png")}
      />
      <View style={[styles.homeInner1, styles.homeInner1Bg]}>
        <View style={[styles.componentChild, styles.homeInner1Bg]} />
      </View>
      <Pressable onPress={() => navigation.navigate("Notificaciones")}>
        <Text style={[styles.holaSofa, styles.holaSofaTypo]}>¡Hola, Sofía!</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Notificaciones")}>
        <Text style={[styles.notificaciones, styles.notificacionesTypo]}>
            4 notificaciones
        </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Notificaciones")}>
        <Text style={[styles.actualmenteNoHay, styles.buttonPosition]}>
            Actualmente no hay canchas reservadas
        </Text>
        </Pressable>
      <Image
        style={[styles.image7Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Pressable
        style={[styles.button, styles.buttonPosition]}
        onPress={() => navigation.navigate("Canchas")}
      >
      </Pressable>

        
        <Text style={[styles.buttonText1, styles.buttonTypo]}>
            Buscar canchas
        </Text>
      <Pressable
        style={[styles.home1, styles.userLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </Pressable>
      <Text style={[styles.padelworld1, styles.holaSofaTypo]}>Padelworld</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.homeChild1, styles.lineViewLayout]} />
      <View style={[styles.homeChild2, styles.homeChildLayout]} />
      <View style={[styles.homeChild3, styles.homeChildLayout]} />
      <View style={[styles.homeChild4, styles.homeChildLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  padelworldLayout: {
    height: 34,
    width: 368,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_9xl,
    lineHeight: 30,
  },
  userLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    height: 70,
    width: 70,
    position: "absolute",
  },
  homeInner1Bg: {
    backgroundColor: Color.textTextOnColor,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  holaSofaTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  notificacionesTypo: {
    height: 27,
    fontSize: FontSize.p_size,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    letterSpacing: 0,
  },
  buttonPosition: {
    left: 104,
    position: "absolute",
  },
  buttonTypo: {
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.p_size,
  },
  lineViewLayout: {
    height: 2,
    width: 392,
    borderTopWidth: 2,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    position: "absolute",
  },
  homeChildLayout: {
    width: 351,
    left: 18,
    height: 2,
    borderTopWidth: 2,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    position: "absolute",
  },
  homeChild: {
    top: 0,
    backgroundColor: Color.colorYellowgreen_200,
    height: 94,
  },
  homeItem: {
    top: 751,
    width: 394,
    height: 93,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  padelworld: {
    top: 58,
    color: Color.colorGray_500,
    fontFamily: FontFamily.poppinsMedium,
    width: 368,
    textAlign: "left",
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_9xl,
    left: 20,
    position: "absolute",
  },
  vectorIcon: {
    height: "83.43%",
    width: "58.29%",
    top: "8.29%",
    right: "20.86%",
    bottom: "8.29%",
    left: "20.86%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  user: {
    top: 54,
    left: 339,
    overflow: "hidden",
  },
  icon: {
    overflow: "hidden",
  },
  calendar: {
    left: 242,
    top: 774,
  },
  homeInner: {
    top: 163,
    height: 92,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  rectangleView: {
    top: 255,
    height: 119,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  bellFIcon: {
    top: 213,
    width: 18,
    height: 18,
    left: 102,
    position: "absolute",
    overflow: "hidden",
  },
  userCircleIcon: {
    left: 24,
    top: 174,
    overflow: "hidden",
  },
  componentChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: "100%",
    width: "100%",
  },
  homeInner1: {
    top: 356,
    width: 175,
    height: 115,
    display: "none",
    left: 20,
  },
  holaSofa: {
    top: 174,
    left: 102,
    height: 34,
    width: 368,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_9xl,
    lineHeight: 30,
    color: Color.colorBlack,
  },
  notificaciones: {
    top: 208,
    left: 124,
    width: 150,
    lineHeight: 30,
    height: 27,
    fontSize: FontSize.p_size,
    position: "absolute",
  },
  actualmenteNoHay: {
    top: 262,
    lineHeight: 25,
    width: 284,
    height: 27,
    fontSize: FontSize.p_size,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    letterSpacing: 0,
  },
  image7Icon: {
    top: 280,
    left: 20,
  },
  buttonText: {
    fontFamily: FontFamily.headingHeading03,
    color: Color.textTextOnColor,
    display: "none",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 18,
  },
  button: {
    top: 326,
    backgroundColor: Color.colorYellowgreen_100,
    width: 234,
    height: 32,
    alignItems: "center",
    paddingHorizontal: Padding.p_41xl,
    paddingVertical: Padding.p_mini,
    borderRadius: Border.br_5xs,
    left: 104,
  },
  buttonText1: {
    top: "41.22%",
    left: "40.51%",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  buttonText2: {
    top: "52.13%",
    left: "19.23%",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    lineHeight: 18,
    display: "none",
    position: "absolute",
  },
  image8Icon: {
    top: 368,
    left: 72,
    display: "none",
  },
  home1: {
    left: 105,
    top: 773,
  },
  padelworld1: {
    top: 59,
    height: 34,
    width: 368,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_9xl,
    lineHeight: 30,
    color: Color.colorBlack,
    left: 20,
  },
  lineView: {
    top: 752,
    left: 0,
  },
  homeChild1: {
    top: 93,
    left: -1,
  },
  homeChild2: {
    top: 254,
  },
  homeChild3: {
    top: 373,
  },
  homeChild4: {
    top: 162,
  },
  home: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default HOME;
