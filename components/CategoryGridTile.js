import { Pressable, View, Text } from "react-native";

export default function CategoryGridTile({ color, title }) {
    return (
        <View >
            <Pressable>
                <View style={{ backgroundColor: color }}>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}