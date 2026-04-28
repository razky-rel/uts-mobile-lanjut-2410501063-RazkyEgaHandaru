import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          source={ require('../assets/images/razky.jpg')} style={styles.avatar}/>
        <Text style={styles.name}>Razky Ega Handaru</Text>
        <Text style={styles.nim}>NIM: 2410501063</Text>
        <Text style={styles.class}>Kelas: A / Pemrograman Mobile Lanjut</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Tema Aplikasi:</Text>
        <Text style={styles.value}>Tema A: ResepKita - Katalog Resep Kuliner</Text>
        <Text style={[styles.label, {marginTop: 15}]}>Credit API:</Text>
        <Text style={styles.value}>TheMealDB API (www.themealdb.com)</Text>
        <Text style={[styles.label, {marginTop: 15}]}>Deskripsi Tugas:</Text>
        <Text style={styles.description}>
          Aplikasi ini dikembangkan menggunakan React Native dan Expo sebagai bagian dari penilaian UTS. 
          Fitur mencakup pencarian resep, kategori makanan, detail instruksi memasak, serta manajemen resep favorit menggunakan Context API.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flexGrow: 1, backgroundColor: '#f5f5f5', alignItems: 'center', padding: 20 },
  headerContainer: { alignItems: 'center', marginBottom: 20, backgroundColor: '#fff', width: '100%', padding: 20, borderRadius: 15, elevation: 3 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 15, borderWidth: 3, borderColor: '#f4511e' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  nim: { fontSize: 16, color: '#666', marginTop: 5 },
  class: { fontSize: 16, color: '#666' },
  infoBox: { backgroundColor: '#fff', width: '100%', padding: 20, borderRadius: 15, elevation: 3 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#f4511e', marginBottom: 5 },
  value: {fontSize: 16, color: '#333', marginBottom: 5 },
  description: { fontSize: 14, color: '#555', lineHeight: 20, textAlign: 'justify' }
});

export default AboutScreen;