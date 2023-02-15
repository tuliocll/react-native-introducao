import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import logo from "./assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  async function login() {
    if (email === "") {
      alert("Informe o e-mail!");
      return;
    }

    if (password === "") {
      alert("Informe a senha!");
      return;
    }

    const response = await fetch(
      "https://uesb-estagio.free.beeceptor.com/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);

      navigation.navigate("Home");
      return;
    }

    alert("Usuario ou senha invalidos!");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.logoContainer}>
        <Image style={styles.logo} resizeMode="cover" source={logo} />
        <Text style={styles.logoText}>MeuAPP</Text>
      </View>

      <View>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={styles.input}
          placeholderTextColor="#ccc"
          placeholder="Digite seu e-mail"
        />
      </View>

      <View>
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={styles.input}
          placeholderTextColor="#ccc"
          placeholder="Digite a sua senha"
          secureTextEntry
        />
      </View>

      <View>
        <TouchableOpacity style={styles.btn} onPress={login}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAF9",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 13,
    color: "#5A5A5A",
  },
  input: {
    borderColor: "#EAECEB",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: 300,
    paddingVertical: 10,
    fontSize: 20,
  },
  btn: {
    borderColor: "#EAECEB",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#52ABCB",
    paddingHorizontal: 20,
    minWidth: 300,
    paddingVertical: 10,
    marginTop: 20,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 15,
    color: "#757575",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 30,
    color: "#2B2C2B",
    fontWeight: "bold",
    textAlign: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
});
