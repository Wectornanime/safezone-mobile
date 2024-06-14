import { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function ReportsDetails({ navigation, route }) {
    const { report } = route.params;
    const [errorMsg, setErrorMsg] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [options, setOptions] = useState(["Em aberto", "Em análise", "Resolvido"]);
    const [imageUri, setImageUri] = useState(null);
    const [region, setRegion] = useState({
        latitude: report.latitude, // Default latitude
        longitude: report.longitude, // Default longitude
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });

    const handleEdit = () => {
        setModalVisible(true);
    };

    const handleOptionSelect = (option) => {
        report.status = option;
        setModalVisible(false);

        const newData = {
            name: report.name,
            message: report.message,
            email: report.email,
            longitude: report.longitude,
            latitude: report.latitude,
            status: report.status
        };

        axios.put(`http://192.168.0.239:3000/reports/report/${report._id}`, newData)
            .then(response => {
                console.log(response.data);
                Alert.alert('Dados atualizados com sucesso');
            })
            .catch(error => {
                console.error(error);
                Alert.alert('Erro ao atualizar os dados');
            });

    };

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
                    onPress={() => handleEdit()}
                >
                    <Ionicons name='create' size={size = 20} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Data e hora de criação: </Text>
                <Text style={{ fontSize: 18, fontWeight: '300' }}>{new Date(report.createdAt).toLocaleString()}</Text>
            </View>

            <View>
                <Text style={{ fontSize: 22, fontWeight: '600' }}>Situação:</Text>
                <Text lineBreakMode='true' style={{ fontSize: 16, minHeight: 70 }}>{report.message}</Text>
            </View>

            <View style={{ width: '100%' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mídia:</Text>
                <View
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: '#d9d9d9',
                        marginVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {!report.imageUrl && (
                        <>
                            <Ionicons name="alert-circle" size={size = 50} />
                            <Text>Imagem indisponível</Text>
                        </>
                    )}
                    {report.imageUrl && (
                        <Image source={{ uri: report.imageUrl }} style={{
                            width: '100%',
                            height: '100%',
                        }} />
                    )}
                </View>
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
            <View style={{ marginBottom: 25 }} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Escolha uma opção:</Text>
                    <FlatList
                        data={options}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.optionButton}
                                onPress={() => handleOptionSelect(item)}
                            >
                                <Text style={styles.optionText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>
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
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
    },
    optionButton: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: 16,
    },
});
