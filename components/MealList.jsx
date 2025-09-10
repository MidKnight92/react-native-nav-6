import {View, StyleSheet, FlatList} from 'react-native';
import MealItem from './MealItem'; 

export default function MealList({meals, handlePress}) {
    const renderMealItem = ({ item: { id, duration, complexity, affordability, imageUrl, title } }) => (
        <MealItem
            id={id}
            duration={duration}
            complexity={complexity}
            affordability={affordability}
            imageUrl={imageUrl}
            title={title}
            pressHandler={handlePress}
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
});