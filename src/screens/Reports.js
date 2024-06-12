import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Reports({ navigation }) {
    const [reports, setReports] = useState(null);

    const updateList = () => {
        axios.get('http://192.168.0.239:3000/reports/report')
            .then(response => {
                // console.log(response.data);
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
                        <View style={styles.texts}>
                            <View style={styles.text}>
                                <Text style={{ fontWeight: '600', fontSize: 16 }}>Nome: </Text>
                                <Text style={{ fontSize: 16 }}>{report.name}</Text>
                            </View>
                            <View style={styles.text}>
                                <Text style={{ fontWeight: '600', fontSize: 16 }}>Status: </Text>
                                <Text style={{ fontSize: 16 }}>{report.status}</Text>
                            </View>
                        </View>
                        <Ionicons name='chevron-forward' size={size = 22} />
                    </TouchableOpacity>
                ))
            )}
            <View style={{ marginTop: 10, marginBottom: 25 }}>
                <Button
                    title='Atualizar'
                    onPress={updateList}
                />
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
        marginBottom: 5,
    },
    text: {
        flexDirection: 'row',
    },
});
