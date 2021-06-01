import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableHighlight, } from 'react-native';

export default function App() {

  const [valor1, setValor1  ] = useState(0);
  const [valor2, setValor2  ] = useState(0);
  const [resultado, setResultado] = useState(0);

  const x = parseFloat(valor1);
  const y = parseFloat(valor2); 
    
  const soma=()=>{
    
    setResultado(x+y);

  }

  const subtrai=()=>{
    
    setResultado(x-y);

  }

  const divide=()=>{
    
    setResultado(x/y);

  }

  const Multiplica=()=>{
    
    setResultado(x*y);

  }

  const limpar=()=>{
    
    setResultado(x === 0 && y === 0 );
    

  }


  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar backgroundColor="#F88F55" barStyle="light-content" />

        <Text style={styles.title} > CALCULANDO  </Text>

       <TextInput style={styles.input} 
        value={valor1}
        onChangeText={(valor1)=>setValor1(valor1)}
        placeholder=" Primeiro - Valor "
        keyboardType="numeric" 
       /> 

       <TextInput 
        style={styles.input} 
        value={valor2}
        onChangeText={(valor2)=>setValor2(valor2)}
        placeholder="Segundo - Valor "
        keyboardType="numeric"
       /> 
      
      <Text style={styles.resultado} > Resultado : <Text style={styles.apresenta_resultado} >{resultado}</Text> </Text>

    
      <TouchableHighlight
      style={styles.btn} onPress={soma}>
      <Text>SOMA</Text>
      </TouchableHighlight>

      <TouchableHighlight
      style={styles.btn} onPress={subtrai}>
      <Text>SUBTRAÇÃO</Text>
      </TouchableHighlight>

      <TouchableHighlight
      style={styles.btn} onPress={divide}>
      <Text>DIVISÃO</Text>
      </TouchableHighlight>

      <TouchableHighlight
      style={styles.btn} onPress={Multiplica}>
      <Text>MULTIPLICAÇÃO</Text>
      </TouchableHighlight>

      <TouchableHighlight
      style={styles.btn_clear} onPress={limpar} type="reset">
      <Text>Limpa Resultado</Text>
      </TouchableHighlight>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    title:{
      fontSize:42,
      alignItems:'center',
      textAlign:'center',
      fontWeight:'bold',
        },
 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    backgroundColor:'#63A8B1',
    borderRadius:10,
    alignSelf:'stretch',
    fontSize:30,
    color:'#F88F55',
    textAlign:'center',
    padding:1,
    margin:9,
    fontSize: 35,
    // alignItems:'center'
    
  },

  resultado:{
    fontWeight:'bold',
    fontSize:25,
    margin:10,
    
    //backgroundColor:'#F88F55'
    // alignItems: 'center'
    

  },
  apresenta_resultado:{
    fontSize:30,
    color:'#63A8B1',
    // alignItems: 'center'

  },
  btn:{
    color:'#DCDCDC',
    backgroundColor:'#F88F55',
    padding:19,
    borderRadius:15,
    fontSize:22,
    justifyContent: 'center',
    alignItems:'center',
    alignSelf:'stretch',
    margin:5
  },

  btn_clear:{
    
    backgroundColor:'#63A8B1',
    padding:9,
    borderRadius:18,
    fontSize:22,
    justifyContent: 'center',
    alignItems:'center',
    alignSelf:'stretch',
    margin:5
  },


  





});
