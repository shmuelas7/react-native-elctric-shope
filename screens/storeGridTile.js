import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground } from "react-native";

const StoreGridTile = (props) => {
  return (
        <TouchableOpacity style={styles.gridItem}
        onPress={props.onSelect}
        >
        <View>
          <Text>{props.name}</Text>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}></ImageBackground>

        </View>
        </TouchableOpacity>
      );
    };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 25,
    height: 50,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});

export default StoreGridTile;