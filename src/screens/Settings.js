import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Settings() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='settings' size={size = 80} color={color = '#8BD784'} />
                <Text style={styles.title}>Configurações</Text>
            </View>
            <View style={styles.userDetails}>
                <Image
                    source={{ uri: 'https://freesvg.org/img/abstract-user-flat-4.png' }}
                    style={{ width: 50, height: 50 }} 
                />
                <Text style={styles.text}>Usuario</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        gap: 10,
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
    userDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    text: {
        fontSize: 20,
    },
});
