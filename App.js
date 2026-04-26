import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AboutScreen from "./src/screens/AboutScreen";
import BrowseScreen from "./src/screens/BrowseScreen";
import DetailScreen from "./src/screens/DetailScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Utama" component={HomeScreen} options={{ title: "Beranda" }}/>
      <Stack.Screen name="Browse" component={BrowseScreen} options={{ title: "Daftar Resep" }}/> 
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Beranda"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Cari" component={SearchScreen} />
        <Tab.Screen name="Favorit" component={FavoritesScreen} />
        <Tab.Screen name="Tentang" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
