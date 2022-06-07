import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { Produit } from '../assets/Modelle/Produit';


const CardHeader: React.FC<Props>  =(props: {produit:Produit}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>
          {props.produit.price}
        </Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
   
      alignItems: 'center',
      justifyContent: 'center'
    },
    greeting: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 16
    }
  });
  
  export default CardHeader;