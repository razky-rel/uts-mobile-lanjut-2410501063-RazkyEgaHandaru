import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFavorites } from "../context/FavoritesContext";


const FavoritesScreen = ({navigation}) => {
  const {favorites} = useFavorites();
 
  if (favorites.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyText}>Belum ada resep favorit</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={favorites} 
      keyExtractor={(item) => item.idMeal}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.card}
          onPress={() => navigation.navigate('Detail', {mealId: item.idMeal})}>
          <Image source={{uri: item.strMealThumb}} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.strMeal}</Text>
            <Text style={styles.category}>{item.strCategory}</Text>
          </View>
        </TouchableOpacity>
      )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10},
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  emptyText: { color: '#999', fontSize: 16},
  card: {flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10, 
    borderRadius: 8, overflow: 'hidden', elevation: 2 },
  image: {width: 90, height: 90},
  info: { padding: 10, justifyContent: 'center'},
  title: {fontSize: 16, fontWeight: 'bold'},
  category: {color: '#666', marginTop: 4 }
});

export default FavoritesScreen;
