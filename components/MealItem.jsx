import { View, Text } from "react-native"
export default function MealItem({meal}){
    console.log(meal)
    return (
        <View>
            <Text>{meal.title}</Text>
        </View>
    )
}