import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoryScreen from './screens/CategoryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverView from './screens/MealsOverView';
import MealDetails from './screens/MealDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator style={screenOptions} screenOptions={{ drawerContentStyle: '#7cc0d5ff', drawerInactiveTintColor: 'gray', drawerActiveTintColor: 'black' }}>
      <Drawer.Screen name="Categories" component={CategoryScreen} options={{ drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} /> }} />
      <Drawer.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} /> }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={screenOptions}>
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ title: 'All Categories', headerShown: false }} />
        <Stack.Screen name="Meal" component={MealsOverView} />
        <Stack.Screen name="MealDetails" component={MealDetails} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#cccccc'
  },
  headerTintColor: '#383e5dcc',
}