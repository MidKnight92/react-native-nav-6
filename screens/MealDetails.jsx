import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, useMemo, useCallback } from "react";
import GeneralMealInfo from "../components/GeneralMealInfo";
import ListInfo from "../components/ListInfo";
import Subtitle from "../components/Subtitle";
import IconButton from "../components/IconButton";

export default function MealDetails({ route: { params: { mealId } }, navigation }) {
    const { id, title, affordability, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree } = useMemo(() => MEALS.find(({ id }) => id === mealId), [mealId]);

    const pressHandler = useCallback(() => {
        console.log('hit');
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title,
            headerRight: () => (
                <IconButton handlePress={pressHandler} icon="star" color="#928f8fff" />
            )
        })
    }, [mealId, navigation])
    return (
        <ScrollView>
            <View>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <GeneralMealInfo affordability={affordability} complexity={complexity} duration={duration} />
                <View style={styles.listParentContainer}>

                    <View style={styles.listContainer}>
                        <Subtitle subtitle="Ingredients:" />
                        <ListInfo list={ingredients} category="ingredients" title={title}/>
                        <Subtitle subtitle="Steps:" />
                        <ListInfo list={steps} category="steps"  title={title} />
                    </View>
                </View>


            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
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
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 16,
        textAlign: 'center'
    },
    listContainer: {
        width: '80%',
    },
    listParentContainer: {
        alignItems: 'center',
        flex: 1
    }
});