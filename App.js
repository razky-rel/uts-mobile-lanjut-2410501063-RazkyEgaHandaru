import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FavoritesProvider } from "./src/context/FavoritesContext";

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

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cari" component={SearchScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorit" component={FavoritesScreen} options={{ title: 'Resep Favorit' }}/>
      <Stack.Screen name="Detail" component={DetailScreen}/>

    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="Beranda"
                component={HomeStack}
                options={{ headerShown: false }}
              />
              <Tab.Screen name="Cari" component={SearchStack} options={{ headerShown: false }} />
              <Tab.Screen name="Favorit" component={FavoritesStack} options={{ headerShown: false }} />
              <Tab.Screen name="Tentang" component={AboutScreen} />
            </Tab.Navigator>
          </NavigationContainer>     
    </FavoritesProvider>
   
  );
}
