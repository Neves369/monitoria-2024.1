import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}></View>

      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>

        {/* Componente de entrada de texto */}
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        {/* View que pode ser pressionada, possui as mesmas propriedades de um button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Botão de login pressionado")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 /* Ocupa toda a tela */,
  },
  backgroundContainer: {
    flex: 2 /* Ocupa 2/3 a tela */,
    backgroundColor: "#ff0000fd",
  },
  loginContainer: {
    flex: 1 /* Ocupa 1/3 a tela */,
    backgroundColor: "#0000ff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "space-between" /* Alinha verticalmente o conteúdo */,
    padding: 20 /* Adiciona padding ao container */,
  },
  title: {
    fontSize: 24,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%" /* Do tamanho do componente pai*/,
  },
  button: {
    padding: 10,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});

export default LoginScreen;
