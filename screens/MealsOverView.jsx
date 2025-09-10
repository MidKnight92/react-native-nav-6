import { useLayoutEffect, useMemo } from "react";
import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

export default function MealsOverView({ route: { params: { categoryId } }, navigation }) {
    const id = useMemo(() => categoryId, [categoryId])
    const categoryTitle = useMemo(
        () => CATEGORIES.find(({ id }) => id === categoryId).title,
        [categoryId]
    );
     const handlePress = (id) => {
        navigation.navigate('MealDetails', {mealId : id})
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryTitle, navigation])

    const meals = useMemo(() => MEALS.filter(({ categoryIds }) => categoryIds.indexOf(id) >= 0), [categoryId]);

    return <MealList meals={meals} handlePress={handlePress}/>;
}
