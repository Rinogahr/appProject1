import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, Button  } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';


export default function App(){

  const [idade, setIdade] = useState();
  const [nome, setNome] = useState("");
  const [valor,setValor] = useState(0);
  const [sx,setSx] = useState(0);
  const sexo = [
    {id: 0, tt: "Qual é o seu Sexo ?"},
    {id: 1, tt: "Masculino"},
    {id: 2, tt: "Feminino"},
  ]

  let optionSexo = sexo.map( ( item ) => {
    return <Picker.Item label={ item.tt} value={ item.id } key={ item.id } />
  });

  return(
    <ImageBackground style={styles.containerImageBackground} source={require('./img/7.jpg')}>
      
      <View style={styles.viewTitleTxtContainer}>
        <Text style={styles.titelTxt}> Sujeito Programador BK Pessoa</Text>
      </View>

      <View style={styles.nomeIdadeSexoContainer}>
        <View style={styles.nomeIdadeContainer}>
          <View style={styles.nomeContainer}>
            <TextInput
              style={styles.textInputNome}
              value={nome}
              onChangeText={ (valueName) => setNome(valueName) }
              placeholder='Qual é o seu Nome ?'
              placeholderTextColor={'#000000'}   
            />
          </View>
          <View style={styles.idadeContainer}>
            <TextInput
              style={styles.textInputIdade}
              value={idade}
              onChangeText={ (valueIdade) => setIdade(valueIdade) }
              keyboardType="numeric"
              placeholder='Idade ?'
              placeholderTextColor={'#000000'}          
            />
          </View>
        </View>
        <View style={styles.sexoContainer}>
          <Picker style={styles.pickerContainer}
            selectedValue={sx}
            onValueChange={ (item) => setSx(item) }
          >
            {optionSexo}
          </Picker>
        </View>

        <View style={styles.containerSlider}>
          <View style={styles.slider}>
              <Slider
                minimumValue={0}
                maximumValue={1000}
                onValueChange={ ( realValor ) => setValor(realValor) }
                style={styles.sliderValor}    
              />
          </View>
          <View style={styles.sliderTexteConteiner}>
            <Text style={styles.sliderTexte}>Qual o valor que desejas ? R$: {valor.toFixed(2)}</Text>
          </View>
        </View>

      </View>

      <View style={styles.containerAlertView}>
        <Text>Nome: {nome}</Text>
        <Text>Idade: {idade}</Text>
        <Text>Sexo: {sx}</Text>
        <Text>Valor solicitado: R$:{valor}</Text>
      </View>

      <View style={styles.buttonContainer}>
          <Button
            onPress={getDados}
            title="OK"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
      </View>

    </ImageBackground>
  );

  function getDados(){
    alert( `Esses são os seus dados: Nome: ${nome},
    Idade: ${idade} Anos, Sexo: ${sx}, Valor desejado: ${valor} ` );
    // getElementsByClassName('containerAlertView').style.flex = 'none'
  }

}
const styles = StyleSheet.create({
  containerImageBackground:{
    flex: 1,
    justifyContent: 'space-between'
  },
  viewTitleTxtContainer:{
    alignItems: 'center',
    padding: 10,
  },
  titelTxt:{
    color: '#000000',
    fontSize: 20,
    fontWeight: '900',
    backgroundColor: '#fafafa86',
    borderRadius: 5,
    padding: 5,
  },
  nomeIdadeSexoContainer:{
    // borderWidth: 1,
    margin: 5,
  },
  nomeIdadeContainer:{
    flexDirection: 'row',
  },

  nomeContainer:{
    flex: 2,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    paddingLeft: 5,
    margin: 5,
  },

  idadeContainer:{
    backgroundColor: '#fafafa',
    borderRadius: 10,
    paddingLeft: 5,
    margin: 5,
  },
  textInputIdade:{
    textAlign:  'center',
    fontWeight: '500'
  },

  sexoContainer:{
    backgroundColor: '#fafafa',
    borderRadius: 10,
    paddingLeft: 5,
    margin: 5,
    fontWeight: '500'
  },

  containerSlider:{
    marginTop: 10,
  },

  slider:{
    
  },

  sliderTexteConteiner:{
    marginTop: 10
  },

  sliderTexte:{
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },

  containerAlertView:{
    backgroundColor: '#cececebe',
    height: 250,
    width: 250,
    alignSelf: 'center',
    borderRadius: 10,
    // display: 'none'
    
  },


});


