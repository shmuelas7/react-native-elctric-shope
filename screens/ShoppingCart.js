import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { DataContext } from "../data/ShopContext";
import React, { useContext, useEffect, useState } from "react";
import ItemList from "../components/shpingCartList";

const shoppingCart = (props) => {
  const cupon1 = "123456";
  const cupon2 = "aaaaaa";
  const cupon3 = "bbbbbb";
  const [price, setPrice] = useState(0);

  const [text, setText] = useState("");

  const { shoppingItems } = useContext(DataContext);

  const onChangeText = (txt) => {
    setText(txt);
  };
  const checkCuopn = () => {
    if (text == cupon1 || text == cupon2 || text == cupon3) {
      setPrice(price - price * 0.1);
    }
    console.log(price);
  };

  useEffect(() => {
    let tempPrice = 0;
   const totalPrice = shoppingItems.forEach((x) => {
      tempPrice += x.price;
    });
    setPrice(tempPrice);
  }, []);

  return (
    <View>
      <Text>total price:{price +"₪"} </Text>
      <ItemList listData={shoppingItems} navigation={props.navigation} />
      <Text>enter cupon</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <Button 
        title="enter cupon" 
        onPress={() => checkCuopn()} 
      />

      <Button
        title="move to payment"
        onPress={() => props.navigation.navigate({ routeName: "formDatelis" })}
      />
    </View>
  );
};

shoppingCart.navigtionOptions = {
  headerTitle:<Text>your shoping cart</Text> 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  header: {
    fontSize: 22,
    fontFamily: "lobster", // Add external font-family
  },
});
export default shoppingCart;
