import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import PRODUITS from '../assets/data';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import LikeBtn from './LikeBtn';
import { Produit } from '../assets/Modelle/Produit';
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');



const Card: React.FC<Produit> = (props: {produit:Produit}) => {
    return (
      <View style={styles.card}>
          <CardHeader produit={props.produit} />
          <CardBody produit={props.produit} />
          <CardFooter produit={props.produit} />
          
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      minWidth: "48%",
      Width: win.width*.4,
    },
    greeting: {
  
    }
  });
  
  export default Card;