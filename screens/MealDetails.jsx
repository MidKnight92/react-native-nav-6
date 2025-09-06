import { Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, useMemo } from "react";

export default function MealDetails({ route: { params: { mealId } }, navigation }) {
    const { id, title, affordability, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree } = useMemo(() => MEALS.find(({ id }) => id === mealId), [mealId]);
    useLayoutEffect(() => {
        navigation.setOptions({
            title
        })
    }, [mealId, navigation])
    return (
        <View>
            <Text>{title ?? 'Meal Title'}</Text>
        </View>
    )
}