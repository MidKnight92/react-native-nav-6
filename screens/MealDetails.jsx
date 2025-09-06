import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, useMemo } from "react";
import GeneralMealInfo from "../components/GeneralMealInfo";

export default function MealDetails({ route: { params: { mealId } }, navigation }) {
    const { id, title, affordability, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree } = useMemo(() => MEALS.find(({ id }) => id === mealId), [mealId]);
    useLayoutEffect(() => {
        navigation.setOptions({
            title
        })
    }, [mealId, navigation])
    return (
        <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text>{title}</Text>
            <GeneralMealInfo affordability={affordability} complexity={complexity} duration={duration} />
            <Text>Ingredients:</Text>
            {ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
            <Text>Steps:</Text>
            {steps.map((step, idx) => <Text key={`step-${idx}`}>{step}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
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