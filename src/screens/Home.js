import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>Olá, usuário</Text>
                <Text style={{ fontSize: 20 }}>Se sentindo seguro hoje? <Ionicons name='happy' size={size = 20} color={color = '#97C993'} /></Text>
            </View>
            <View style={{ marginVertical: 15, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 26, fontStyle: 'italic' }}>Opp Solutions</Text>
            </View>
            <View style={styles.areaIten}>
                <Text style={styles.areaTitle}>Copa</Text>
                <Image
                    style={styles.areaImage}
                />
                <View style={styles.areaButton}>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => navigation.navigate('alert')}
                    >
                        <Ionicons name='alert-circle' color={color = '#94C190'} size={size = 30} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => navigation.navigate('details')}
                    >
                        <Ionicons name='help-circle' color={color = '#94C190'} size={size = 30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.areaIten}>
                <Text style={styles.areaTitle}>Recepção</Text>
                <Image
                    style={styles.areaImage}
                />
                <View style={styles.areaButton}>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => navigation.navigate('alert')}
                    >
                        <Ionicons name='alert-circle' color={color = '#94C190'} size={size = 30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name='help-circle' color={color = '#94C190'} size={size = 30} />
                    </TouchableOpacity>
                </View>
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
    areaIten: {
        gap: 5,
    },
    areaTitle: {
        fontSize: 30,
        fontWeight: '900',
    },
    areaImage: {
        height: 150,
        width: '100%',
        backgroundColor: 'red',
    },
    areaButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 15,
    },
    actionButton: {
        backgroundColor: '#B0E0AC',
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        width: '45%',
    },
});
