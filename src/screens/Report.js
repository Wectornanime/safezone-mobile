import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Report({ navigation }) {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: 37.78825, // Default latitude
    longitude: -122.4324, // Default longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permissão de localização não concedida',
          'Por favor, conceda permissão de localização para obter a localização.'
        );
        return;
      }
      let locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);
      setRegion({
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Descreva a situação</Text>
        <TextInput
          style={styles.input}
          numberOfLines={5}
          multiline={true}
        />
        <Text style={styles.title}>Adicionar mídia</Text>

        <View style={styles.workersContainer}>
          <Text style={styles.title}>Pessoas relacionadas</Text>
          <ScrollView
            horizontal
            style={styles.carrosel}
          >
            <View style={styles.carroselItem}>
              <Image
                style={styles.workerImage}
                source={require('../../assets/images/profiles/graca.png')}
              />
              <Text style={styles.workerName}>Graça</Text>
            </View>
            <View style={styles.carroselItem}>
              <Image
                style={styles.workerImage}
                source={require('../../assets/images/profiles/emma.png')}
              />
              <Text style={styles.workerName}>Emma</Text>
            </View>
            <View style={styles.carroselItem}>
              <Image
                style={styles.workerImage}
                source={require('../../assets/images/profiles/amanda.png')}
              />
              <Text style={styles.workerName}>Amanda</Text>
            </View>
            <View style={styles.carroselItem}>
              <Image
                style={styles.workerImage}
                source={require('../../assets/images/profiles/fernanda.png')}
              />
              <Text style={styles.workerName}>Fernanda</Text>
            </View>
            <View style={styles.carroselItem}>
              <Image
                style={styles.workerImage}
                source={require('../../assets/images/profiles/ju.png')}
              />
              <Text style={styles.workerName}>Ju</Text>
            </View>
          </ScrollView>
        </View>

        {location && (
          <MapView
            style={styles.map}
            region={region}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Sua Localização"
            />
          </MapView>
        )}

        <TouchableOpacity style={{ ...styles.actionButton, backgroundColor: '#B0E0AC' }}>
          <Text>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.actionButton, backgroundColor: '#FFB9B9' }}
          onPress={() => navigation.navigate('home')}
        >
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 18,
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 20
  },
  input: {
    backgroundColor: '#d9d9d9',
    minWidth: '100%',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlignVertical: 'top',
  },
  workersContainer: {
    width: '100%',
  },
  carrosel: {
    gap: 10,
  },
  carroselItem: {
    margin: 2,
    gap: 2,
    alignItems: 'center',
  },
  workerImage: {
    width: 60,
    height: 60,
  },
  actionButton: {
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    width: '45%',
  },
  map: {
    width: '100%',
    height: 150, 
  },
});
