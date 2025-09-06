import { View, Text, StyleSheet } from "react-native";

export default function GeneralMealInfo({ duration, complexity, affordability }) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>
                {duration} {duration > 1 ? 'minutes' : 'minute'}
            </Text>
            <Text style={styles.detailItem}>
                {complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
                {affordability.toUpperCase()}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
});