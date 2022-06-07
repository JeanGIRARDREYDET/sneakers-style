import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import CardHeader from './components/CardHeader';
import data from './assets/data';
import Card from './components/Card';
import { Dimensions } from 'react-native';
import { Produit } from './assets/Modelle/Produit';

const win = Dimensions.get('window');
const ratio = win.width/541;


export default function App() {
  const renderItem = ({ item }) => (
    <View>
      <Card produit={item} />
    </View>
  );

  return (
    <View style={styles.app}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem} numColumns={2} key={2}
          keyExtractor={item => item.id} 
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  app: {
    //flex: 3, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center'
  }
,
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#fff',
 maxWidth : '95%',
  
  },
});
