import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Image, Text, View, Button,log } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [selectedVegetable, setSelectedVegetable] = useState('');
  const [selectedFruit, setSelectedFruit] = useState('');
  const [vegetableQuantity, setVegetableQuantity] = useState(1);
  const [fruitQuantity, setFruitQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const fruits = {
    'Orange-$11': 11,
    'Blueberry-$12': 12,
    // ... other fruits
  };
    
  return (   
    <SafeAreaView style={styles.container}>
    <View>
            <Image source={{uri: 'https://i.pinimg.com/originals/93/c0/be/93c0bef7a1c5df49ecb846f2b96dcec5.png'}} style={styles.imageProfile} />
            <Text style={styles.name}>Welcome To POGS MarketPlace</Text>
    </View>
       
    <View style={styles.row1}>
        <Picker style={styles.picker1}
        selectedValue={selectedVegetable}
        onValueChange={(itemValue,itemIndex)=>setSelectedVegetable(itemValue)}>
            <Picker.Item label="Vegetables" value="" />
            <Picker.Item label="Potato-$5" value="5" />
            <Picker.Item label="Carrot-$8" value="8" />  
        </Picker>

        <Picker style={styles.picker2}
        selectedValue={vegetableQuantity}
        onValueChange={(itemValue,itemIndex)=>setVegetableQuantity(itemValue)}>
            <Picker.Item label="Price" value="" />
            <Picker.Item label="1" value="1"/>
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
        </Picker>
      </View>

      <View style={styles.row1}>
        <Picker style={styles.picker1} 
         selectedValue={selectedFruit}
        onValueChange={(itemValue,itemIndex)=>setSelectedFruit(itemValue)}>
            <Picker.Item label="Fruits" value="" />
            <Picker.Item label="Orange-$11" value="11" />
            <Picker.Item label="Blueberry-$12" value="12" />
        </Picker>
        <Picker style={styles.picker2}
        selectedValue={fruitQuantity}
        onValueChange={(itemValue,itemIndex)=>setFruitQuantity(itemValue)}>
            <Picker.Item label="Price" value="" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
        </Picker>
      </View>
      
          <View>
            <Button
          title="CALCULATE"
          onPress={() => {
          const lastChar = selectedVegetable[selectedVegetable.length-1];
          const charToIntForvegetable = parseInt(lastChar);
          const charToIntForvquantity = parseInt(vegetableQuantity);

         const fruitsTotalPrice = () => {
    if (selectedFruit && fruitQuantity) {
      const fruitprice = fruits[selectedFruit] * fruitQuantity;
      
            }
           };

          setTotalPrice(charToIntForvegetable * charToIntForvquantity)+fruitsTotalPrice
          }}
          />
          <Text style={styles.heading}> {setTotalPrice} </Text>
          <Text style={styles.heading}> Total cost of order: $ {totalPrice} </Text>
          </View>


      <View>
      <Text style={styles.name2}>App Developed By </Text>
      <Text style={styles.name2}> 1. Atish Kaushik Dani(48006017)</Text>
      <Text style={styles.name2}> 2. Taukir Ahmed(48196614)</Text>
      <Text style={styles.name2}> 3. Chethan Varma Muppalla(48069132)</Text>
      <Text style={styles.name2}> 4. Anh Duy Pham(47772379)</Text>
      <Text style={styles.name2}> 5. Muhammad Waleed Hassan(47552883)</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFFFA1'
  },

  imageProfile: {
        width: 200,
        marginBottom: 5,
        marginTop: 80,
        borderRadius: 44/2,
        marginLeft: 10,
        height: 180,
        alignSelf:'center'
    },
  
  name: {
        alignSelf: 'center',
        marginLeft: 10,
        fontSize: 25,
        fontWeight:600,
        textDecorationLine: 'underline'
    },

    name2: {
        alignSelf: 'left',
        marginLeft: 10,
        fontSize: 12,
        fontWeight:60,    
    },

  row1:{
    flexDirection: 'row',
    marginTop: 1,
  },

  heading: {
    fontSize:20,
    textAlign: 'center',
    marginBottom:10
  },

  picker1:{
    flex:2
  },
  picker2:{
    flex:1
  },
   
    
});
