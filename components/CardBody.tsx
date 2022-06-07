import React from 'react';
import {StyleSheet,Text,View,Image,Dimensions} from 'react-native';
import { Produit } from '../assets/Modelle/Produit';



const win = Dimensions.get('window');
const ratio = win.width/541;
const CardBody: React.FC<Props>  =(props: {produit : Produit}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.greeting}>
          <Image source={props.produit.photo} style={styles.imageStyle} />
           </Text>        
          <Text style={styles.title}>{props.produit.title}</Text>
        <Text style={styles.desc}>{props.produit.desc}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({

    imageStyle: {
      resizeMode: "contain",
      width: win.width*.4,
      height: win.width*.4,
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor: '#000',
  },
    container: {
      minWidth: "48%",
      
    },
    greeting: {
      fontSize: 20,
      fontWeight: 'bold',
      minWidth: "48%",
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',

    },
    desc: {
      fontSize: 10,
      fontWeight: 'bold',

    }


  });
  
  export default CardBody;