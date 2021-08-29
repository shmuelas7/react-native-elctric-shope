
import { StyleSheet, Text,} from 'react-native';
import React from "react";
import {DEPARTMENTS,CATEGORY} from '../data/dummy-data';
import ProdactItem from'../components/shpingCartList';



const category = (props) => {
  const categoryId=props.navigation.getParam("DeparmentId");
  const displayCategory= CATEGORY.filter(
    (category)=>category.id.indexOf(categoryId)>=0);

    return<ProdactItem listData={displayCategory} navigation={props.navigation}/>
    
};

    

category.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('DeparmentId');
  const selectCategory = DEPARTMENTS.find((c) => c.id === categoryId);
  const displayCategory= CATEGORY.filter(
    (category)=>category.id.indexOf(categoryId)>=0);

  return {
    headerTitle: selectCategory.name,
    headerLeft:()=><Text>number of items:{displayCategory.length}</Text>,
  };
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
export default category;