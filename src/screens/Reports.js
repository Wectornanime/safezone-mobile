import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Reports({ navigation }) {
    const apiUrl = process.env.API_URL;
    const [reports, setReports] = useState(null);

    const updateList = () => {
        const api = `${apiUrl}reports/report`;
        axios.get(api)
            .then(response => {
                // console.log(response.data);
                setReports(null);
                setReports(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        updateList();
    }, []);

    return (
        <ScrollView style={styles.container}>
            {reports && (
                reports.map((report, index) => (
                    <TouchableOpacity
                        style={styles.containerItens}
                        key={index}
                        onPress={() => navigation.navigate('reportsDetails', { report })}
                    >
                        <View>
                            <View style={styles.text}>
                                <Text style={{ fontWeight: '600', fontSize: 16 }}>Nome: </Text>
                                <Text style={{ fontSize: 16 }}>{report.name}</Text>
                            </View>
                            <View style={styles.text}>
                                <Text style={{ fontWeight: '600', fontSize: 16 }}>Status: </Text>
                                <Text style={{ fontSize: 16 }}>{report.status}</Text>
                            </View>
                            <View style={styles.text}>
                                <Text style={{ fontWeight: '200', fontSize: 16 }}>{new Date(report.createdAt).toLocaleString()}</Text>
                            </View>
                        </View>
                        <Ionicons name='chevron-forward' size={size = 24} />
                    </TouchableOpacity>
                ))
            )}
            <View style={{ marginTop: 10, marginBottom: 25, alignItems: 'center', }}>
                <TouchableOpacity
                    style={{ borderRadius: 5, width: 100, backgroundColor: '#B0E0AC', padding: 5, alignItems: 'center', }}
                    onPress={() => updateList()}
                >
                    <Text style={{ fontSize: 16, fontWeight: '600', }}>Atualizar</Text>
                </TouchableOpacity>
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
    containerItens: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    text: {
        flexDirection: 'row',
    },
});
