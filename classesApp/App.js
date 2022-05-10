import React, {Component,useEffect} from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';


export default class App extends Component {

  constructor(props) {

    super(props)
    // definir estados
    this.state = {
      valorVenta:'',
      salario:'',
      comision: '',
      totalApagar:''
    }
  }
  calcular(){

    this.setState({comision:this.state.valorVenta*2/100})
    let miComision = this.state.valorVenta*2/100
    this.setState({totalApagar:parseFloat(this.state.salario)+miComision})

  }
  
  render() {
    return(
    <View style={styles.container}>
      <Text style={styles.fontSize}>{'\n'}Ventas por empleado{'\n'}</Text>
          <Text style={styles.fontSize}>{'\n'}Salario{'\n'}</Text>
          <TextInput 
          style={styles.textInput}
          placeholder="Digite Salario"
          onChangeText={(salario)=>this.setState({salario})}
          value={this.state.salario}
          />
          <Text style={styles.fontSize}>{'\n'}Valor Venta{'\n'}</Text>
          <TextInput 
          style={styles.textInput}
          placeholder="Digite el valor de la venta"
          onChangeText={(valorVenta)=>this.setState({valorVenta})}
          value={this.state.valorVenta}
          />
          <Text style={styles.fontSize}>{'\n'}Valor Comisión{'\n'}</Text>
          <TextInput
          style={styles.textInput}
          value={new Intl.NumberFormat('es-CO').format(this.state.comision)}
          />
          <Text style={styles.fontSize}>{'\n'}Total a pagar{'\n'}</Text>
          <TextInput
          style={styles.textInput}
          value={new Intl.NumberFormat('es-CO').format(this.state.totalApagar)}
          />
          <Text>{'\n'}</Text>
          <TouchableOpacity
           style={{backgroundColor:'blue', 
           borderRadius:7,
           padding:10
          }}
           onPress={()=>this.calcular()}>
            <Text style={{color:'white',padding:'10'}}>Calcular</Text>
          </TouchableOpacity>
          


    </View>

    
    
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'colunm', /*Por defecto*/
    flex: 1,
    backgroundColor: '#0d6e71',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  fontSize:{
    fontSize: 19,
    // fontWeight: 'bold',
    color: 'white'
  },
  textInput:{
    backgroundColor: '#d6d6d6',
    color: '#010101',
    height: 40,
    padding: 5,
    marginBottom: 15,
    width: 175,
    borderRadius: 4
  },
});

