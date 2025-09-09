import { View, Text, StyleSheet } from "react-native"

export default function ListInfo({ list, category, title }) {
    return (
        <>
            {list.map((item, index) => (
                <View style={styles.list} key={`${category}-${title}-${index}`}>
                    <Text>{item}</Text> 
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