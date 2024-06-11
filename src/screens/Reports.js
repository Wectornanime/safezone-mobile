import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Reports({ navigation }) {
    const [reports, setReports] = useState(null);

    useEffect(() => {
        axios.get('http://172.26.46.161:3000/reports/report')
            .then(response => {
                // console.log(response.data);
                setReports(response.data);
            })
            .catch(error => {
                console.error(error);
            });
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
