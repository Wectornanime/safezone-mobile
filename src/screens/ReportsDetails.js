import { ScrollView, StyleSheet, Text, } from 'react-native';

export default function ReportsDetails({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text>ReportsDetails is running!</Text>
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
