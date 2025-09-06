import { View, Text, Pressable, StyleSheet, Image, Platform } from "react-native"
import GeneralMealInfo from "./GeneralMealInfo"

export default function MealItem({ id, duration, complexity, affordability, imageUrl, title, pressHandler }) {
    return (
        <View style={styles.container}>
            <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => pressed ? styles.buttonPressed : null} onPress={() => pressHandler(id)}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <GeneralMealInfo affordability={affordability} duration={duration} complexity={complexity} />
                </View>

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'

    },
    buttonPressed: {
        opacity: 0.25
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8
    },
});