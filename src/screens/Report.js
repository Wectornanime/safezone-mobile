import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Report({ route }) {
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Descreva a situação</Text>
                <TextInput
                    style={styles.input}
                    numberOfLines={5}
                    lineBreakStrategyIOS="true"
                />
                <Text style={styles.title}>Adicionar mídia</Text>

                <View style={styles.workersContainer}>
                    <Text style={styles.title}>Pessoas relacionadas</Text>
                    <ScrollView
                        horizontal
                        style={styles.carrosel}
                    >
                        <View style={styles.carroselItem}>
                            <Image
                                style={styles.workerImage}
                            />
                            <Text style={styles.workerName}>Graça</Text>
                        </View>
                        <View style={styles.carroselItem}>
                            <Image
                                style={styles.workerImage}
                            />
                            <Text style={styles.workerName}>Emma</Text>
                        </View>
                        <View style={styles.carroselItem}>
                            <Image
                                style={styles.workerImage}
                            />
                            <Text style={styles.workerName}>Amanda</Text>
                        </View>
                        <View style={styles.carroselItem}>
                            <Image
                                style={styles.workerImage}
                            />
                            <Text style={styles.workerName}>Fernanda</Text>
                        </View>
                        <View style={styles.carroselItem}>
                            <Image
                                style={styles.workerImage}
                            />
                            <Text style={styles.workerName}>Ju</Text>
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={{...styles.actionButton, backgroundColor: '#B0E0AC'}}>
                    <Text>Enviar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{...styles.actionButton, backgroundColor: '#FFB9B9'}}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
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
    title: {
        fontWeight: '600',
        fontSize: 20
    },
    input: {
        backgroundColor: '#d9d9d9',
        minWidth: '100%',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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
        backgroundColor: 'red',
    },
    actionButton: {
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        width: '45%',
    },
})