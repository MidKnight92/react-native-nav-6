import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <CategoryScreen />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
