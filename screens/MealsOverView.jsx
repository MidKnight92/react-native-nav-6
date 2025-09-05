import { FlatList, StyleSheet, Text, View } from "react-native";
import { useMemo } from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverView({ route: { params: categoryId } }) {
    const id = useMemo(() => categoryId.categoryId, [categoryId])
    const meals = useMemo(() => MEALS.filter(({ categoryIds }) => categoryIds.indexOf(id) >= 0), [categoryId]);
    const renderMealItem = ({ item: { duration, complexity, affordability, imageUrl, title } }) => (
        <MealItem
            duration={duration}
            complexity={complexity}
            affordability={affordability}
            imageUrl={imageUrl}
            title={title}
        />
    );
    return (
        <View style={styles.container}>
            <FlatList data={meals} renderItem={renderMealItem} keyExtractor={meal => meal.id} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})