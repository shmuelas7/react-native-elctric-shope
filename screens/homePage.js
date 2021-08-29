import { StyleSheet,FlatList} from 'react-native';
import React from "react";
import {DEPARTMENTS} from '../data/dummy-data'
import StoreGridTile from '../screens/storeGridTile';




const homePage = props => {

    const renderGridItem = (itemData) => {
      console.log(itemData.item.name);
      return (
      <StoreGridTile
        name={itemData.item.name}
        image={itemData.item.image}
      onSelect={()=>{
        props.navigation.navigate({
          routeName:"category",
          params:{DeparmentId:itemData.item.id},
        });
      }}
      />
      );
    };

    return (
        <FlatList
          keyExtractor={(item,index)=>item.id}
          data={DEPARTMENTS}
          renderItem={renderGridItem}
          numColumns={2}
        />
      );
    };


export default homePage;