import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";

export default function App() {
  // function well() {
  //   alert("wellcome to my application ");
  // }

  return (
    // <SafeAreaView>
    <View style={styles.poo}>
      <TouchableOpacity
      // onPress={(() => console.log("pressed1"), alert("wellll"))}
      >
        {/* blurRadius={1} */}
        <Image
          source={{
            uri:
              "https://previews.123rf.com/images/anyaberkut/anyaberkut1603/anyaberkut160300054/53069841-internet-security-authorization-page-online.jpg",
          }}
          style={{ height: 150, width: 150 }}
          // onPress={() => {
          //   alert("simple image.. 💻 ");
          // }}
        ></Image>
      </TouchableOpacity>
      <Text numberOfLines={3}>
        aslkefjiowerlkdskljeiem erp'9ier;mrep'oi erme;rokerller
        or;ekoeri;er,/erlke rrl,e;roiae,
        asd/lkewe/we.q,ewlqedfkj;ioawerulkijrkmfdi fklejir ;dioru
        ew;oiuekjelije;ioweulnd eiuen iawij ieuroijdlkjido9wun aeuerjn EIOUE
      </Text>

      {/* <View style={styles.container}> */}
      <Text style={{ backgroundColor: "#00BCD4" }}>
        Wellcome poovarasan a 😎{" "}
      </Text>
      <StatusBar style="auto" />
      <Text style={{ backgroundColor: "#FF1744" }}>
        Wellcome poovarasan b 😎{" "}
      </Text>

      <Text style={{ backgroundColor: "#4CAF50" }}>
        Wellcome poovarasan c 😎{" "}
      </Text>
      <Button
        color="gold"
        title={"click me"}
        onPress={() => {
          if (Platform.OS === "web") {
            alert("wellcome", "save", [
              { Text: "Yes", onPress: () => console.log("pressed yes") },
              { Text: "No", onPress: () => console.log(" pressed no") },
            ]);
          }
          if (Platform.OS === "android") {
            Alert.alert("wellcome", "save", [
              {
                text: "Yes",
                onPress: () => {
                  console.log("pressed yes");

                  Alert.alert("your document saved 😎");
                },
              },
              { text: "No", onPress: () => console.log(" pressed no") },
            ]);

            // Alert.alert(
            //   "Alert Title",
            //   "My Alert Msg",
            //   [
            //     {
            //       text: "Ask me later",
            //       onPress: () => console.log("Ask me later pressed"),
            //     },
            //     {
            //       text: "Cancel",
            //       onPress: () => console.log("Cancel Pressed"),
            //       style: "cancel",
            //     },
            //     { text: "OK", onPress: () => console.log("OK Pressed") },
            //   ],
            //   { cancelable: false }
            // );
          }
          // if(Platform.OS === "web" )
          // if(Platform.OS === "android" )
        }}
        // onPress={() =>
        //   alert("hii ", well(), [
        //     { Text: "yes", onPress: () => console.log("pressed yes") },
        //     { Text: "no", onPress: () => console.log(" pressed no") },
        //   ])
        // }
      ></Button>

      {/* <StatusBar style="auto" /> */}
    </View>
    // {/* </SafeAreaView> */}

    //   <StatusBar
    //   barStyle="dark-content"
    //   hidden={false}
    //   backgroundColor="#00BCD4"
    //   translucent={true}
    // ></StatusBar>;
  );
}

const styles = StyleSheet.create({
  // container: {
  poo: {
    flex: 1,
    backgroundColor: "aquamarine",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 100 : 0,
  },
  title: {
    backgroundColor: "red",
    justifyContent: "center",
  },
});
