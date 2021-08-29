
import { StyleSheet, Text, View,FlatList} from 'react-native';
import React, { useState } from "react";
import {DEPARTMENTS,CATEGORY} from '../data/dummy-data';
import ProdactItem from '../components/prodactItem';



const shoppingCartList = (props) => {
  const categoryId=props.navigation.getParam("DeparmentId");

const renderCategoryItem=(itemData)=>{
  return(
    <ProdactItem
      name={itemData.item.name}
     onSelectItem={() => {
      props.navigation.navigate({
        routeName: "prodact",
        params: {
          prodactId: itemData.item.id,
          },
          });
     }}
      price={itemData.item.price}
      image={itemData.item.image}
      
  />
);
};
  return (
    <View style={styles.container}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderCategoryItem}
        style={{ width: "100%" }}
      />
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
    fontFamily: "lobster", 
  },
});
export default shoppingCartList;