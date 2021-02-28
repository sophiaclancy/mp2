import React, { useState, useEffect } from "react";
import { Platform, View } from "react-native";
import { Appbar, TextInput, Snackbar, Button } from "react-native-paper";
import { getFileObjectAsync } from "../../../Utils";

// See https://github.com/mmazzarolo/react-native-modal-datetime-picker
// Most of the date picker code is directly sourced from the example.
import DateTimePickerModal from "react-native-modal-datetime-picker";

// See https://docs.expo.io/versions/latest/sdk/imagepicker/
// Most of the image picker code is directly sourced from the example.
import * as ImagePicker from "expo-image-picker";
import { styles } from "./NewSocialScreen.styles";

import firebase from "firebase/app";
import "firebase/firestore";
import { SocialModel } from "../../../models/social";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackScreen";

interface Props {
  navigation: StackNavigationProp<RootStackParamList, "NewSocialScreen">;
}

export default function NewSocialScreen({ navigation }: Props) {
  /* TODO: Declare state variables for all of the attributes 
           that you need to keep track of on this screen.
    
     HINTS:

      1. There are five core attributes that are related to the social object.
      2. There are two attributes from the Date Picker.
      3. There is one attribute from the Snackbar.
      4. There is one attribute for the loading indicator in the submit button.
  
  */

  // TODO: Follow the Expo Docs to implement the ImagePicker component.
  // https://docs.expo.io/versions/latest/sdk/imagepicker/

  // TODO: Follow the GitHub Docs to implement the react-native-modal-datetime-picker component.
  // https://github.com/mmazzarolo/react-native-modal-datetime-picker

  // TODO: Follow the SnackBar Docs to implement the Snackbar component.
  // https://callstack.github.io/react-native-paper/snackbar.html

  const saveEvent = async () => {
    // TODO: Validate all fields (hint: field values should be stored in state variables).
    // If there's a field that is missing data, then return and show an error
    // using the Snackbar.

    // Otherwise, proceed onwards with uploading the image, and then the object.

    try {
      // (0) Firebase Cloud Storage wants a Blob, so we first convert the file path
      // saved in our eventImage state variable to a Blob. The following line
      // might be helpful in doing that –
      // const object: Blob = (await getFileObjectAsync(eventImage)) as Blob;

      // (1) Generate a new Firestore document reference in the "socials" node using .doc()
      // Don't actually set the value at this node, yet.
      const socialRef = firebase.firestore().collection("socials").doc();

      // (2) Write the image to Firebase Cloud Storage.
      
      // (3) Get the download URL of the file we just wrote. We're going to put that 
      // download URL into Firestore (where our data itself is stored).

      // (4) Write the social model to that document reference we created in (1),
      // using the .set() method. The eventImage should be the downloadURL that we got from (3).
      
      // (5) If nothing threw an error, then go back to the previous screen.
      //     Otherwise, show an error.
  };

  const Bar = () => {
    return (
      <Appbar.Header>
        <Appbar.Action onPress={navigation.goBack} icon="close" />
        <Appbar.Content title="Socials" />
      </Appbar.Header>
    );
  };

  return (
    <>
      <Bar />
      <View style={{ ...styles.container, padding: 20 }}>
        {/* TextInput */}
        {/* TextInput */}
        {/* TextInput */}
        {/* Button */}
        {/* Button */}
        {/* Button */}
        {/* DateTimePickerModal */}
        {/* Snackbar */}
      </View>
    </>
  );
}
