import MealList from "../components/MealList";
import { useFavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, useMemo } from "react";
import { Text, StyleSheet } from "react-native";

export default function FavoriteScreen({ navigation }) {
    const { favs } = useFavoriteContext();
    const mealLookup = useMemo(() => Object.fromEntries(MEALS.map(meal => [meal.id, meal])), [MEALS]);
    const handlePress = (id) => {
        navigation.navigate('MealDetails', { mealId: id })
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Favorite Meals'
        });
    }, []);
    const favoriteMeals = useMemo(() => favs.map(fav => mealLookup[fav]), [favs, mealLookup]);
    return (
        <>
            {
                favoriteMeals.length > 0 ? <MealList meals={favoriteMeals} handlePress={handlePress} /> : <View style={styles.container}><Text style={styles.text}>No favorite meals selected.</Text></View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})