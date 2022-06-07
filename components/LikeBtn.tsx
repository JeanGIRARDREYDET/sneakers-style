import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { Produit } from '../assets/Modelle/Produit';



const LikeBtn: React.FC<Props>  =(props: {produit:Produit}) => {
    return (
      <View style={styles.btn}>
        <Text style={styles.greeting}> Like :
          {props.produit.like}
        </Text>
        <View>
  
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    btn: {
    
    },
    greeting: {
      fontSize: 20,
      fontWeight: 'bold',
      
    }
  });
  
  export default LikeBtn;