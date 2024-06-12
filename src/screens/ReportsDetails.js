import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ReportsDetails({ navigation, route }) {
    const { report } = route.params;
    useEffect(() => console.log(report), []);
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={{ fontSize: 22, fontWeight: '600' }}>Situação:</Text>
                <Text lineBreakMode='true' style={{fontSize: 16, minHeight: 70 }}>{report.name}</Text>
            </View>
            <View>
                <Text style={{ fontSize: 22, fontWeight: '600' }}>Situação:</Text>
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
