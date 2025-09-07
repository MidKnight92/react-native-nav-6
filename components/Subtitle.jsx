import { View, Text, StyleSheet } from "react-native"
export default function Subtitle({ subtitle }) {
    return (
        <>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 4
    },
    subtitleContainer: {
        borderColor: 'white',
        borderRadius: 3,
        borderBottomWidth: 2,
        marginHorizontal: 24,
        marginTop: 12,
        marginBottom: 4,
        padding: 2,
    },
});