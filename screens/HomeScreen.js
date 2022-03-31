import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
// import {GOOGLE_MAPS_APIKEY} from 'react-native-dotenv'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      {/* <Text style={tw`text-red-500 p-10`}>I am the HomeScreen</Text> */}
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "green",
  },
});
