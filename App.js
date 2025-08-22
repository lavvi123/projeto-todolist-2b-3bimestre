import { StatusBar } from 'expo-status-bar';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logo from './assets/pngegg (13).png'
import pngAdd from './assets/pngAdd.png'
import { useState } from 'react';

export default function App() {
  const [tarefa, setTarefa] = useState(" ");

  const btnAdicionar = () => {
    Alert.alert("TODO List", "Valor: " + tarefa);
    setTarefa("")
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewLogo} >
        <Image source={logo} style={styles.logo} /> 
        <Text>TODO List</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput placeholder='Digite a tarefa' value={tarefa}
        onChangeText={setTarefa}/>
        <TouchableOpacity onPress={btnAdicionar}>
        <Image source={pngAdd} style={styles.pngAdd} />
        </TouchableOpacity>
       
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,


  },
  logo: {
    height: 128,
    width: 128,
  },
  viewInput: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  pngAdd: {
    width: 32,
    height:32
  },
  viewLogo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }

});
