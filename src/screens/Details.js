import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Details({ route }) {
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.container}>
                <Image
                    style={styles.areaImage}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Text style={styles.areaTitle}>Recepção</Text>
                    <Ionicons name='alert-circle' color={color = '#FFE976'} size={size = 30} />
                </View>
                <Text style={styles.areaSubTitle}>Grupo IV: Ergonomia</Text>
                <View style={styles.workersContainer}>
                    <Text style={{ fontWeight: '600', fontSize: 20 }}>Quem trabalha aqui?</Text>
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
                <Image
                    style={styles.floorplaner}
                />
            </View>
        </ScrollView>
    )
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
    areaImage: {
        height: 150,
        width: '100%',
        backgroundColor: 'red',
    },
    areaTitle: {
        fontSize: 30,
        fontWeight: '900',
    },
    areaSubTitle: {
        fontSize: 30,
        fontWeight: '200',
        fontStyle: 'italic',
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
    floorplaner: {
        backgroundColor: 'red',
        width: 300,
        height: 300,
    },
})