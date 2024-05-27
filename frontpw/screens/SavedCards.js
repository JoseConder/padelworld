import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily } from "../GlobalStyles";
import { FontAwesome } from '@expo/vector-icons'; // Importa FontAwesome desde expo-vector-icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV  } from '@fortawesome/free-solid-svg-icons';

const SavedCards = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require("../assets/vector-141.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Tarjetas de débito/credito</Text>
      </View>
      < Component />
    
      <TouchableOpacity style={styles.closeSesionButton} onPress={() => navigation.navigate("Payment")}>
            <Text style={styles.closeSesionButtonText}>Pagar Reserva</Text>
      </TouchableOpacity>
      
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

const Component = () => {
    const navigation = useNavigation();
    const renderPlaceholderCards = () => {
      const placeholderCards = [
        { number: "**** **** **** 1234", exp: "12/24" },
        { number: "**** **** **** 5678", exp: "06/25" },
        { number: "**** ****** 9012", exp: "03/26" }
      ];
  
      return placeholderCards.map((card, index) => (
        <View key={index} style={styles.cardContainer}>
          <Text style={styles.cardNumber}>{card.number}</Text>
          <Text style={styles.cardExp}>Exp: {card.exp}</Text>
          <FontAwesomeIcon icon={faEllipsisV} style={styles.optionsIcon} />
        </View>
      ));
    };
  
    return (
      <View style={styles.cardbox}>
        <Text style={styles.ctitle}>Tarjetas guardadas</Text>
        <View style={styles.cardList}>
          {renderPlaceholderCards()}
        </View>
        <View style={styles.addButtonContainer}>
          <Button title="Agregar tarjeta" onPress={() => navigation.navigate("AddCard")} />
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
      fontFamily: "Poppins-Medium",
      marginBottom: 10,
    },
    ctitle: {
      alignSelf: "center",
      fontSize: 20,
      fontWeight: "600",
      color: "#000000",
      fontFamily: "Poppins-Medium",
      marginBottom: 10,
    },
    cardContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#000000"
    },
    cardNumber: {
      fontSize: 16,
      color: "#000000",
      fontFamily: "Poppins-Regular",
    },
    cardExp: {
      fontSize: 16,
      color: "#000000",
      fontFamily: "Poppins-Regular",
    },
    optionsIcon: {
      fontSize: 24,
      color: "#000000",
    },
    addButtonContainer: {
      marginTop: 20,
    },
    saveButton: {
      height: 50,
      backgroundColor: '#D2DE33',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginHorizontal: 20,
      marginTop: 20,
    },
    saveButtonText: {
      fontSize: 16,
      color: '#000000',
      fontFamily: "Poppins-Medium",
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
      cardbox: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
      }
  });
  
  export default SavedCards;