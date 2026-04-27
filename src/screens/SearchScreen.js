import axios from 'axios';
import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const SearchScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([])  ;
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const searchRecipe = async () => {
    if (!query) return;

    try {
      setLoading(true);
      setSearched(true);
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setResults(response.data.meals || []);
    } catch(error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput style={styles.input} placeholder="Cari resep... (contoh: Chicken)"
        value={query}
        onChangeText={(text) => { setQuery(text); setSearched(false);}}
        onSubmitEditing={searchRecipe} />
          <TouchableOpacity style={styles.searchButton} onPress={searchRecipe}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Cari</Text>
          </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color='#f4511e' style={{marginTop: 20}} />
      ) : (
        <FlatList data={results}
          keyExtractor={(item) => item.idMeal}
          ListEmptyComponent={searched && !loading && results.length===0 ? (
            <Text style={styles.emptyText}>Resep "{query}" tidak ditemukan.</Text>
          ) : null
        } 
          renderItem={({item}) => (
            <TouchableOpacity style={styles.card}
            onPress={() => navigation.navigate('Detail', {mealId: item.idMeal })}
            >
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.strMeal}</Text>
              <Text style={styles.category}>{item.strCategory}</Text>
            </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );

};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f5f5f5', padding: 15},
  searchBox: {flexDirection: 'row', marginBottom: 20},
  input: {flex: 1, backgroundColor: '#fff', paddingHorizontal: 15, borderRadius:8,
          borderWidth: 1, borderColor: '#ddd', height: 50 },
  searchButton: {backgroundColor: '#f4511e', justifyContent: 'center', 
          paddingHorizontal: 20, borderRadius: 8, marginLeft: 10 },
  card: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10,
          borderRadius: 8, overflow: 'hidden', elevation: 2},
  image: {width: 100, height: 100},
  info: { padding: 10, justifyContent: 'center'},
  title: {fontSize: 16, fontWeight: 'bold', width: 200},
  category: {color: '#666', marginTop: 5},
  emptyText: {textAlign: 'center', marginTop: 20, color: '#999'}
});

export default SearchScreen;
