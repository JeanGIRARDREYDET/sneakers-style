
import {StyleSheet,Text,TouchableOpacityBase,View} from 'react-native';
import LikeBtn from './LikeBtn';
// Import our icon component
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState ,useEffect} from 'react';
import { Produit } from '../assets/Modelle/Produit';


const CardFooter: React.FC<Props>  =(props: {produit : Produit}) => {
    const [likes, setCount] = useState(props.produit.likes);
// Similaire à componentDidMount et componentDidUpdate :
useEffect(() => {
    
  });

    return (
      <View style={styles.foter}>
   <LikeBtn produit={props.produit} />
        <Text style={styles.foter}>
          Taille : {props.produit.size}
        

          <FontAwesome.Button name="heart-o" color="#3b5998" backgroundColor="#FFFFFF" onPress={() => setCount(String(Number(likes)+1))}>{likes}</FontAwesome.Button>
        </Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    foter: {
   
      alignItems: 'center',
      justifyContent: 'center'
    },
    greeting: {
      fontSize: 20,
      fontWeight: 'bold',

    }
  });
  
  export default CardFooter;