import { StyleSheet, Text, View } from "react-native";

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Ini Halaman DetailScreen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailScreen;
