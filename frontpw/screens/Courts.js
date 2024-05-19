import React from "react";
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Courts = () => {
  const navigation = useNavigation();

  // Sample data for the courts (replace with data from backend)
  const courts = [
    {
      id: "1",
      name: "Cancha #1",
      location: "Norte",
      times: ["18:30", "19:00"],
      image: require("../assets/court1.png"), // replace with actual image paths
    },
    {
      id: "2",
      name: "Cancha #2",
      location: "Sur 2",
      times: ["18:30"],
      image: require("../assets/court2.png"),
    },
    {
      id: "3",
      name: "Cancha #3",
      location: "Sur",
      times: ["18:30"],
      image: require("../assets/court3.png"),
    },
    // Add more court objects as needed
  ];

  

  const renderCourtItem = ({ item }) => (

    

    <View style={styles.courtItem}>
      <Image source={item.image} style={styles.courtImage} />
      <View style={styles.courtDetails}>
        <Text style={styles.courtName}>{item.name}</Text>
        <Text style={styles.courtLocation}>{item.location}</Text>
        <View style={styles.timeContainer}>
          {item.times.map((time, index) => (
            <Text key={index} style={styles.timeSlot}>
              {time}
            </Text>
          ))}
        </View>
      </View>
      
      <Image
        source={require("../assets/chevronright.png")}
        style={styles.arrowIcon}
      />
    </View>
  );

  return (
    <View style={styles.notificaciones}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/vector-141.png")}
            style={styles.backIcon}
          />
        </Pressable>
        <Text style={styles.title}>Canchas</Text>
      </View>

      <View style={styles.marginVertical} />


      {/* Time Button dynamically populated */}
      <Pressable style={styles.timeButton}>
        <Text style={styles.timeButtonText}>
          {courts.length > 0 ? `Hoy ${courts[0].times[0]}` : "Hoy"}
        </Text>
      </Pressable>

      <FlatList
        data={courts}
        renderItem={renderCourtItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.courtsList}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("HOME")}
        >
          <Image
            style={styles.navIcon}
            source={require("../assets/home.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("CALENDARIO")}
        >
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
    backgroundColor: "#F3F3F3",
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
  timeButton: {
    height: 41,
    backgroundColor: "#D2DE33",
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 280,
    borderRadius: 8,
    marginLeft:12 ,
    top:-10
  },
  timeButtonText: {
    fontSize: 16,
    color: "#000",
    fontFamily: FontFamily.poppinsMedium,
  },
  marginVertical: {
    height: 20, // Adjust this value to change the vertical margin between the header and the list
  },
  courtsList: {
    paddingBottom: 100, // to ensure bottom navigation is not overlapped
  },
  courtItem: {
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: '#CFCFCF',
    flexDirection: "row",
    alignItems: "center",
    padding: 9,
  
  },
  courtImage: {
    width: 148,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  courtDetails: {
    flex: 1,
  },
  courtName: {
    fontSize: 18,
    color: "#000",
    fontFamily: FontFamily.poppinsMedium,
    top:14
  },
  courtLocation: {
    fontSize: 16,
    color: "#666",
    marginVertical: 8,
    fontFamily: FontFamily.poppinsExtraLight,
  },
  timeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  timeSlot: {
    backgroundColor: "#D2DE33",
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 14,
    color: "#000",
    fontFamily: FontFamily.poppinsMedium,
  },
  arrowIcon: {
    width: 10,
    height: 20,
    tintColor: "#000",
  },
  bottomNav: {
    height: 85,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderTopWidth: 1,
    borderColor: "#DDD",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navButton: {
    alignItems: "center",
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default Courts;
