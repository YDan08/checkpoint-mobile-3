import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { api } from "./api"

export const App = () => {
  const [clima, setClima] = useState()
  const [nomeCidade, setNomeCidade] = useState()
  const [descricao, setDescricao] = useState()
  const pegarClima = async () => {
    await api
      .get(
        "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=-23.56&lon=-46.65&units=metric&lang=pt"
      )
      .then(response => {
        setNomeCidade(response.data.city_name)
        setClima(response.data.data[1].app_temp)
        setDescricao(response.data.data[0].weather.description)
      })
      .catch(error => console.log(error))
  }

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.paragraph}>Checkpoint 3</Text>
        <Text style={[styles.largeText, styles.textStyle]}>{nomeCidade}</Text>
        <Text style={[styles.smallText, styles.textStyle]}>{descricao}</Text>
        <Text style={[styles.largeText, styles.textStyle]}>{Math.round(clima)}°</Text>
        <TouchableOpacity style={styles.button} onPress={() => pegarClima()}>
          <Text style={styles.textButton}>Atualizar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    textAlign: "center",
    color: "white",
  },
  largeText: {
    fontSize: 36,
  },
  smallText: {
    fontSize: 22,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 8,
    width: 200,
    marginTop: 16,
  },
  textButton: {
    fontSize: 16,
    textAlign: "center",
  },
})
