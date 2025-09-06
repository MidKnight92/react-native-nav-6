import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoryScreen from './screens/CategoryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverView from './screens/MealsOverView';
import MealDetails from './screens/MealDetails';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={screenOptions}>
        <Stack.Screen name="MealCategories" component={CategoryScreen}
          options={{
            title: 'Meal Categories'
          }} />
        <Stack.Screen name="Meal" component={MealsOverView} />
        <Stack.Screen name="MealDetails" component={MealDetails} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });


const screenOptions = {
  headerStyle: {
    backgroundColor: '#cccccc'
  },
  headerTintColor: '#383e5dcc',
}