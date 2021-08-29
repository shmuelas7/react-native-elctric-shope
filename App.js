import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import StoreNavigator from './navigation/storeNavigation';
import ShopContext from './data/ShopContext';


const fetchFonts = () => {
  Font.loadAsync({
    
    "lobster": require("./assets/fonts/Lobster-Regular.ttf"),
  });
};
export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={() => console.log(err)}
      />
    );
  }
  return(
  <ShopContext>
   <StoreNavigator/>
  </ShopContext>
  )
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
