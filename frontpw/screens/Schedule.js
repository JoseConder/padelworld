import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarDays, faLocationDot, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { FontFamily, Color } from "../GlobalStyles";

LocaleConfig.locales['es'] = {
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
  today: 'Hoy'
};
LocaleConfig.defaultLocale = 'es';

const Schedule = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require("../assets/vector-141.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Calendario</Text>
      </View>

      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendario}
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'purple' }
          }}
        />
      </View>

      <Text style={styles.mainTitle}>Mis Reservas</Text>
      <View style={styles.reservasContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {[
            { date: 'Lun 08 abr - 19:00 a 20:30', location: 'Norte • Cancha #1', key: 1},
            { date: 'Mar 09 abr - 20:00 a 21:30', location: 'Sur • Cancha #2', key: 2 },
            { date: 'Mié 10 abr - 18:00 a 19:30', location: 'Este • Cancha #3', key: 3 },
            { date: 'Jue 11 abr - 17:00 a 18:30', location: 'Oeste • Cancha #4', key: 4 },
            { date: 'Jue 11 abr - 17:00 a 18:30', location: 'Oeste • Cancha #4', key: 5 },
            { date: 'Jue 11 abr - 17:00 a 18:30', location: 'Oeste • Cancha #4', key: 6 },
            { date: 'Jue 11 abr - 17:00 a 18:30', location: 'Oeste • Cancha #4', key: 7 },
          ].map((reservation) => (
              <View key={reservation.key} style={styles.notificationContainer}>
                <View style={styles.iconColumn}>
                  <FontAwesomeIcon icon={faCalendarDays} style={styles.calendarIcon} />
                  <FontAwesomeIcon icon={faLocationDot} style={styles.locationIcon} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.reservationDate}>{reservation.date}</Text>
                  <Text style={styles.reservationLocation}>{reservation.location}</Text>
                </View>
                <FontAwesomeIcon icon={faChevronRight} style={styles.chevronIcon} />
              </View>
          ))}
        </ScrollView>
      </View>

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
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 40,
    padding:10,
    borderColor: '#CFCFCF',
    borderWidth: 2,

  },
  calendario: {
   
  },
  mainTitle: {
    fontSize: 22,
    margin: 16,
    textAlign: 'left',
    marginTop:50
  },
  reservasContainer: {
    flex: 1,
    padding: 10,
    backgroundColor:'#FFFFFF',
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  iconColumn: {
    alignItems: 'center',
    marginRight: 10,
  },
  calendarIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  locationIcon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  reservationDate: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  reservationLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  chevronIcon: {
    fontSize: 24,
    color: '#666',
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

export default Schedule;
