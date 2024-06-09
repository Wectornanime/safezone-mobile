import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Alert({ navigation, route }) {
    const { area } = route.params;
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.container}>
                <Image
                    style={styles.areaImage}
                    source={{ uri: area.image }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Text style={styles.areaTitle}>{area.name}</Text>
                    <Ionicons name='alert-circle' color={color = '#FFE976'} size={size = 30} />
                </View>
                <Text style={styles.areaSubTitle}>Grupo IV: Ergonomia</Text>
                <Text style={styles.areaTitle2}>Recepetividade</Text>
                <Text style={styles.areaSubTitle2}>Avalie este risco:</Text>
                <View style={styles.riskyContainer}>
                    <MaterialCommunityIcons name="emoticon-happy" size={size = 33} color={colo = '#B0E0AC'} />
                    <MaterialCommunityIcons name="emoticon-neutral" size={size = 33} color={colo = '#FFE976'} />
                    <MaterialCommunityIcons name="emoticon-sad" size={size = 33} color={colo = '#FB6E6E'} />
                </View>
                <View style={styles.actionContainer}>
                    <TouchableOpacity
                        style={{ ...styles.actionButton, backgroundColor: '#FFF2B1' }}
                        onPress={() => navigation.navigate('report')}
                    >
                        <Text style={styles.text}>Reporte</Text>
                        <Ionicons name="megaphone" size={size = 20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.actionButton, backgroundColor: '#FFAEAE' }}>
                        <Text style={styles.text}>Emergência</Text>
                        <Ionicons name='alert-circle' size={size = 20} />
                    </TouchableOpacity>
                </View>
                <Image
                    source={{ require: area.floorplaner }}
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
        backgroundColor: '#d9d9d9',
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
    areaTitle2: {
        fontSize: 30,
        fontWeight: '600',
    },
    areaSubTitle2: {
        fontSize: 20,
        fontWeight: '200',
        fontStyle: 'italic',
    },
    riskyContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    actionContainer: {
        flexDirection: 'row',
        gap: 5,
    },
    actionButton: {
        padding: 5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
    },
    floorplaner: {
        backgroundColor: '#d9d9d9',
        width: 300,
        height: 300,
    },
})