import { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

export default function ReportsDetails({ navigation, route }) {
    const { report } = route.params;
    const [errorMsg, setErrorMsg] = useState(null);
    const [options, setOptions] = useState(["Opção 1", "Opção 2", "Opção 3"]);
    const [region, setRegion] = useState({
        latitude: report.latitude, // Default latitude
        longitude: report.longitude, // Default longitude
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('A permissão para acessar o local foi negada!');
                Alert.alert('A permissão para acessar o local foi negada!');
                return;
            }
        })();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '700', marginBottom: 2 }}>{report.name}</Text>
            <Text style={{ fontSize: 18, fontWeight: '200' }}>{report.email}</Text>

            <View style={{ flexDirection: 'row', marginVertical: 4, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Status: </Text>
                    <Text style={{ fontSize: 18, fontWeight: '300' }}>{report.status}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log('ok')}
                >
                    <Ionicons name='create' size={size = 20} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{ fontSize: 22, fontWeight: '600' }}>Situação:</Text>
                <Text lineBreakMode='true' style={{ fontSize: 16, minHeight: 70 }}>{report.message}</Text>
            </View>
            <View style={{ marginBottom: 15 }}>
                <Text style={{ fontSize: 22, fontWeight: '600' }}>Mapa:</Text>
                {!errorMsg && (
                    <MapView
                        region={region}
                        style={{
                            width: '100%',
                            height: 300,
                        }}
                    >
                        <Marker coordinate={{
                            latitude: report.latitude,
                            longitude: report.longitude,
                        }}
                            title="Origem do reporte"
                        />
                    </MapView>
                )}
                {errorMsg && (
                    <View
                        style={{
                            width: '100%',
                            height: 300,
                            backgroundColor: '#d9d9d9',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Ionicons name='warning' size={size = 80} color={color = '#FFE976'} />
                        <Text style={{ fontSize: 16, }} >{errorMsg}</Text>
                    </View>
                )}

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 18,
        paddingTop: 18,
    },
});
