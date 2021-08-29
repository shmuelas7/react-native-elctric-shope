
import { StyleSheet, Text, View,Button,TextInput, Alert,ScrollView} from 'react-native';
import React, { useState } from "react";




const fromPage = props => {
  const [CVV,stCVV]=useState("");
  const [validity,setvalidity]=useState("");
  const [CardholderNname  ,setCardholderNname]=useState("");
  const [CreditNumber,setCreditnumber]=useState("")
  const [lastName, setlastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [id,setid]=useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [cuntry, setcuntry] = useState("");
  const [city, setcity] = useState("");
  const [address, setadsress] = useState("");


  const movePage=()=>{props.navigation.navigate({ routeName: "orderRecivd" })}

  const check=()=>{
    if(lastName<'A' || lastName >'z')
    {
      return console.log("last name not valid");
    
    }
    else if(firstName<='A' || firstName >='z')
    {
      return console.log("first name not valid");

    }
      else if(phone<'0' || phone >'9' || phone.length!=10)
          {
            return console.log("phone not valid");
          }
        else if(id<='0' || id>='9' || id.length!=9){
          return console.log("id not valid");

        }
        else if(CardholderNname<='A' || CardholderNname >='z'){
           return console.log("Card holder Nname not valid");
        }
        else if(CreditNumber<'0' || CreditNumber >'9' || CreditNumber.length!=10){
          {
            return console.log("Credit Number not valid");


          }
        }
        else if(CVV<'0' || CVV >'9' || CVV.length!=3)
        {
          return  console.log("Cvv not valid");

        }
    else if(lastName==="" || firstName==="" || id==="" || email==="" || phone==="" 
              || cuntry===""||city===""||address==="" || CreditNumber==="" || CardholderNname===""
              || validity===""|| CVV==="")
              {
                return  console.log("All fields must be filled out ");
              }

            movePage()
  }
  






  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.header}>Enter USER INFORMATION</Text>
  
      <Text>enter first name:</Text>
        <TextInput
        style={styles.input}
        onChangeText={firstName => setfirstName(firstName)}
        value={firstName}
      />
        <Text>enter last name:</Text>
        <TextInput
        style={styles.input}
        onChangeText={lastName => setlastName(lastName)}
        value={lastName}
      />
        <Text>enter email</Text>
        <TextInput
        style={styles.input}
        onChangeText={email=>setemail(email)}
        value={email}
      />
        <Text>enter phone number</Text>
        <TextInput
        style={styles.input}
        onChangeText={phone=>setphone(phone)}
        value={phone}
      />
        <Text>enter cuntry</Text>
        <TextInput
        style={styles.input}
        onChangeText={cuntry=>setcuntry(cuntry)}
        value={cuntry}
      />
             <Text>enter city</Text>
        <TextInput
        style={styles.input}
        onChangeText={city=>setcity(city)}
        value={city}
      />
             <Text>enter address</Text>
        <TextInput
        style={styles.input}
        onChangeText={address=>setadsress(address)}
        value={address}
      />
      <Text style={styles.header}>Enter card detils</Text>
      <Text>card holder name</Text>
      <TextInput
        style={styles.input}
        onChangeText={CardholderNname=>setCardholderNname(CardholderNname)}
        value={CardholderNname}
      />
        <Text>enter id:</Text>
        <TextInput
        style={styles.input}
        onChangeText={id => setid(id)}
        value={id}
      />
      <Text>Credit Number:</Text>
        <TextInput
        style={styles.input}
        onChangeText={CreditNumber=>setCreditnumber(CreditNumber)}
        value={CreditNumber}
      />
            <Text>date:</Text>
        <TextInput
        style={styles.input}
        onChangeText={validity=>setvalidity(validity)}
        value={validity}
      />
            <Text>CVV:</Text>
        <TextInput
        style={styles.input}
        onChangeText={CVV=>stCVV(CVV)}
        value={CVV}
      />
            <Button 
        title="send" 
        onPress={() => check()} 
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    alignItems: "center",
    textAlign:'center',
    fontSize: 22,
    fontFamily: "lobster", 
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
  }
});
export default fromPage;