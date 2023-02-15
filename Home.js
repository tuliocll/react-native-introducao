import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

export default function Home() {
  const data = [
    {
      id: 4,
      name: "Minerva",
      age: 159,
      profile: "https://i.pravatar.cc/150?u=886",
      description: "teste, blah lbha lbha",
    },
    {
      id: 680,
      name: "Ashlee",
      age: 985,
      profile: "https://i.pravatar.cc/150?u=135",
      description: "teste, blah lbha lbha",
    },
    {
      id: 857,
      name: "Bass",
      age: 866,
      profile: "https://i.pravatar.cc/150?u=158",
      description: "teste, blah lbha lbha",
    },
  ];

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.userListContainer}>
        <View>
          <Image style={styles.userListImage} source={{ uri: item.profile }} />
        </View>
        <View>
          <Text style={styles.userName}>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Olá, Fulano</Text>
      </View>

      <View style={styles.listContainer}>
        <FlatList data={data} renderItem={renderItem} />
        <TouchableOpacity style={styles.floatButton}>
          <Text style={styles.floatButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  header: {
    fontSize: 30,
    color: "#2B2C2B",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  headerContainer: {
    alignItems: "center",
  },
  userListContainer: {
    flexDirection: "row",
    width: 500,
    marginBottom: 20,
  },
  userListImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#52ABCA",
    elevation: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    justifyContent: "space-between",
    height: "100%",
  },
  floatButton: {
    backgroundColor: "#52ABCA",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginBottom: 100,
  },
  floatButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
