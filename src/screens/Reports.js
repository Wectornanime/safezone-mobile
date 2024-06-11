import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Reports({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>Olá, usuário</Text>
                <Text style={{ fontSize: 20 }}>Se sentindo seguro hoje? <Ionicons name='happy' size={size = 20} color={color = '#97C993'} /></Text>
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
