import { StyleSheet, Text, View } from "react-native";
import { useMemo } from "react";

export default function MealsOverView({ route: { params: categoryId } }) {
    const id  = useMemo(() => categoryId.categoryId ,[categoryId])
    console.log(id)
    return (
        <View style={styles.container}>
            <Text>{categoryId.categoryId}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})