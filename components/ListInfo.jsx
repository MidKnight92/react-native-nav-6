import { View, Text, StyleSheet } from "react-native"

export default function ListInfo({ list, category, title }) {
    return (
        <>
            {list.map((item) => (
                <View style={styles.list}>
                    <Text key={`${category}-${title}-${Date.now()}-${Math.random()}`}>{item}</Text> 
                    </View>
                ))
            }
        </>
    )
}

const styles = StyleSheet.create({
    list: {
        marginVertical: 4,
        borderRadius: 6,
        backgroundColor: '#ddddddff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 12,
        alignItems: 'center'
    }
});