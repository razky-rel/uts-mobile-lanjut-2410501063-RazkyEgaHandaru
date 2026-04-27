import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BrowseScreen = ({ route, navigation }) => {
  const {categoryName} = route.params || {categoryName: 'Seafood'};
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchMeals();
    setRefreshing(false);
  };

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
      setMeals(response.data.meals);
      setError(null);
    } catch (err) {
      setError('Gagal memuat data. Cek koneksi internet anda');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigation.setOptions({title: `Resep ${categoryName}`});
    fetchMeals();
  }, [categoryName]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#f4511e" />
        <Text>Sedang masak resep...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
        <TouchableOpacity style={styles.button} onPress={fetchMeals}>
          <Text style={{ color: '#f5f5f5'}}>Coba Lagi</Text>
        </TouchableOpacity>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <FlatList 
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { mealId: item.idMeal})} 
            >
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <Text style={styles.title}>{item.strMeal}</Text>
            </TouchableOpacity>
        )} 
        refreshControl={
          <RefreshControl  refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
    );
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding:10  },
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  card: {backgroundColor: '#ffffff', marginBottom: 15, borderRadius: 10, overflow: 'hidden', elevation: 3},
  image: {width: '100%', height: 200},
  title: { padding: 10, fontSize: 16, fontWeight: 'bold'},
  button: {marginTop: 10, backgroundColor: '#f4511e', padding: 10, borderRadius: 5}
});

export default BrowseScreen;
