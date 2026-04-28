import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFavorites } from '../context/FavoritesContext';

const DetailScreen = ({route}) => {
  const { mealId } = route.params;
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchDetail();
    setRefreshing(false);
  };

  const {toggleFavorite, isFavorite} = useFavorites();


  const fetchDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        setMeal(response.data.meals[0]);
      } catch(err) {
        setError("Gagal memuat detail resep. Cek koneksi internet anda")
      }finally{
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchDetail();
  }, [mealId]);

  if (loading) return <View style= {styles.center}>
    <ActivityIndicator size="large" color='#f4511e'/></View>;
  
  if (error) {
    return (
      <View style= {styles.center}>
        <Text>{error}</Text>
        <TouchableOpacity style={styles.button} onPress={fetchDetail}>
          <Text style={{ color: '#f5f5f5'}}>Coba Lagi</Text>
        </TouchableOpacity>
      </View>
    );

  }


  const ingredients = [];
  for (let i = 1; i<=20; i++){
    const ingredient = meal[`strIngredient${i}`];
    const measure= meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <ScrollView style={styles.container}
     refreshControl={<RefreshControl  refreshing={refreshing} onRefresh={onRefresh} />}>
      <Image source={{uri: meal.strMealThumb}} style={styles.image}/>
      <View style={styles.content}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
          <View style={{flex: 1}}>
            <Text style= {styles.title}>{meal.strMeal}</Text>
            <Text style= {styles.category}>{meal.strCategory} | {meal.strArea}</Text>
          </View>
            <TouchableOpacity onPress={() => toggleFavorite(meal)}>
              <Text style={{ fontSize: 30, color: isFavorite(meal.idMeal) ? 'red' : '#ccc' }} >
                <Ionicons name={isFavorite(meal.idMeal) ? 'heart' : 'heart-outline'}
                size={32} color={isFavorite(meal.idMeal) ? 'red' : '#ccc'} />
              </Text>
            </TouchableOpacity>
        </View>

        
        <View style={styles.section}>
          <Text style= {styles.sectionTitle} >Bahan-bahan:</Text>
          {ingredients.map((item, index) => (
            <Text key={index} style={styles.ingredientText}>• {item}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instruksi Memasak:</Text>
          <Text style={styles.instructions} >{meal.strInstructions}</Text>
        </View>
      </View>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff'},
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {width: '100%', height: 300},
  content: {padding: 20},
  title: { fontSize: 24, fontWeight: 'bold', color: '#333'},
  category: { fontSize: 16, color: '#666', marginBottom: 20},
  section: {marginBottom: 20},
  sectionTitle: {fontSize: 18, fontWeight: 'bold', marginBottom: 10, borderBottomWidth: 1,
    borderBottomColor: '#eee', paddingBottom: 5},
  ingredientText:{ fontSize:16, marginBottom: 5, color: '#444'},
  instructions: {fontSize: 16, lineHeight: 24, textAlign: 'justify', color: '#444'},
  button: {marginTop: 10, backgroundColor: '#f4511e', padding: 10, borderRadius: 5}
});

export default DetailScreen;
