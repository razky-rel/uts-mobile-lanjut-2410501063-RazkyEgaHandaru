import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchCategories();
    setRefreshing(false);
  };

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setCategories(response.data.categories);
      setError(null);
    } catch (err) {
      setError('Gagal memuat data. Cek koneksi internet anda');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#f4511e" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pilih Kategori</Text>
      <FlatList 
        data={categories}
        keyExtractor={(item) => item.idCategory}
        numColumns={2}
        refreshControl={<RefreshControl  refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.categoryCard}
            onPress={() => navigation.navigate('Browse', { categoryName: item.strCategory})} 
            >
              <Image source={{ uri: item.strCategoryThumb }} style={styles.catImage} />
              <Text style={styles.catTitle}>{item.strCategory}</Text>
            </TouchableOpacity>
        )}  
      />
    </View>
    );
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding:10  },
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  header: {fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginLeft:5},
  categoryCard: {flex: 1, margin:5, backgroundColor: '#f9f9f9', borderRadius:10, 
    alignItems: 'center', padding:10, elevation: 2},
  catImage: {width: 100, height: 100, resizeMode: 'contain'},
  catTitle: { marginTop:5, fontWeight: 'bold'},
});

export default HomeScreen;
