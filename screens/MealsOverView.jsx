import { FlatList, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect, useMemo } from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { CATEGORIES } from "../data/dummy-data";

export default function MealsOverView({ route: { params: { categoryId } }, navigation }) {
    const id = useMemo(() => categoryId, [categoryId])
    const categoryTitle = useMemo(
        () => CATEGORIES.find(({ id }) => id === categoryId).title,
        [categoryId]
    );
    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryTitle, navigation])

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