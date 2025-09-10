import MealList from "../components/MealList";
import { useFavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { useMemo } from "react";

export default function FavoriteScreen({navigation}) {
    const { favs } = useFavoriteContext();
    const mealLookup = useMemo(() => Object.fromEntries(MEALS.map(meal => [meal.id, meal])), [MEALS]);
     const handlePress = (id) => {
        navigation.navigate('MealDetails', {mealId : id})
    }
    const favoriteMeals = useMemo(() => favs.map(fav => mealLookup[fav]), [favs, mealLookup]);
    return <MealList meals={favoriteMeals} handlePress={handlePress}/>;
}