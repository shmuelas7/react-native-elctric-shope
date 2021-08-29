import { StyleSheet, Text, View,ImageBackground,Button } from 'react-native';
import React, {useContext } from "react";
import {CATEGORY} from '../data/dummy-data'
import { DataContext } from '../data/ShopContext';




const prodact = props => {

  const {setShoppingItems}=useContext(DataContext);

  const prodactId = props.navigation.getParam("prodactId");
  const selectedProdact =CATEGORY.find((prodact) => prodact.id === prodactId);

  prodact.navigationOptions = (navigationData) => {
    const prodactId = navigationData.navigation.getParam("prodactId");
    const selectedProdact = CATEGORY.find((prodact) => prodact.id === prodactId);
    return {
      headerTitle: selectedProdact.title,

      
  };
  };

  
  return (
    
    <View style={styles.container}>
        <Button
        title="add to cart"
        onPress={() => setShoppingItems(before=>[...before,selectedProdact])}
      />
        <Text style={styles.txt}>name:{selectedProdact.name}</Text>
        <Text style={styles.txt}>data abute the prodact:{selectedProdact.paragraph}</Text>
        <Text style={styles.txt}>size:{selectedProdact.size}</Text>
        <Text style={styles.txt}>shipe price:{selectedProdact.ship}</Text>
        <Text style={styles.txt}>price:{selectedProdact.price +"₪"}</Text>
        <Text style={styles.txt}>Review:{selectedProdact.Review}</Text>
        <ImageBackground source={{ uri: selectedProdact.image }}style={styles.bgImage}></ImageBackground>
      

    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    
  },
  header: {
    fontSize: 22,
    fontFamily: "lobster", // Add external font-family
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  txt:{
    fontFamily: "lobster",
  }
});

export default prodact;