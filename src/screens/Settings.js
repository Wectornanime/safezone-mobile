import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Settings() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='settings' size={size = 80} color={color = '#8BD784'} />
                <Text style={styles.title}>Configurações</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: '15px',
        alignItems: 'center',
        gap: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: '900',
    },
});
