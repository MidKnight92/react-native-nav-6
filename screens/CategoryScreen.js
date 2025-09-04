import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from '../data/dummy-data';

export default function CategoryScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={(category) => <CategoryGridTile title={category.item.title} color={category.item.color} />} />  
}
