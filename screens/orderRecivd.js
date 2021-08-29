
import { StyleSheet, Text, View,Button } from 'react-native';
import React from "react";




const orderRecivd = props => {

  return (
    
    <View style={styles.container}>
        <Text style={styles.header}>Your order was successful</Text>
      <Button
        title="Continue shopping"
        onPress={() => props.navigation.navigate({ routeName: "home" })}
      />
    </View>
  );
}

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
});
export default orderRecivd;