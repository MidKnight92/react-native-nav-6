import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from '../data/dummy-data';

export default function CategoryScreen({ navigation }) {
    const handlePress = (id) => {
        navigation.navigate("Meal", {categoryId: id})
    }
    return <FlatList numColumns={2} data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={(category) => <CategoryGridTile title={category.item.title} color={category.item.color} handlePress={handlePress} id={category.item.id}/>} />
}
