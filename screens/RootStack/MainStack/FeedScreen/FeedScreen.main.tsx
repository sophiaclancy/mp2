import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import { Appbar, Button, Card, Paragraph, Title } from "react-native-paper";
import firebase from "firebase/app";
import "firebase/firestore";
import { SocialModel } from "../../../../models/social.js";
import { styles } from "./FeedScreen.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../MainStackScreen.js";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

/* HOW TYPESCRIPT WORKS WITH PROPS:

  Remember the navigation-related props from Project 2? They were called `route` and `navigation`,
  and they were passed into our screen components by React Navigation automatically.  We accessed parameters 
  passed to screens through `route.params` , and navigated to screens using `navigation.navigate(...)` and 
  `navigation.goBack()`. In this project, we explicitly define the types of these props at the top of 
  each screen component.

  Now, whenever we type `navigation.`, our code editor will know exactly what we can do with that object, 
  and it'll suggest `.goBack()` as an option. It'll also tell us when we're trying to do something 
  that isn't supported by React Navigation! */

interface Props {
  navigation: StackNavigationProp<MainStackParamList, "FeedScreen">;
}

export default function FeedScreen({ navigation }: Props) {
  // TODO: Initialize a list of SocialModel objects in state.
  const [socials, setSocials] = useState<SocialModel[]>([]);

  /* TYPESCRIPT HINT: 
    When we call useState(), we can define the type of the state
    variable using something like this:
        const [myList, setMyList] = useState<MyModelType[]>([]); */

  /*
    TODO: In a useEffect hook, start a Firebase observer to listen to the "socials" node in Firestore.
    Read More: https://firebase.google.com/docs/firestore/query-data/listen
    */
  const db = getFirestore();

  useEffect(() => {
   const q = query(collection(db, "socials"));
   const unsubscribe = onSnapshot(q, (querySnapshot) => {
     const socialsList: SocialModel[] = [];
     querySnapshot.forEach((doc) => {
       socialsList.push(doc.data() as SocialModel);
     });
     setSocials(socialsList);
     console.log("Current socials: ", socials);
    });

   return () => unsubscribe();
  }, []);

  /*
    Reminders:
      1. Make sure you start a listener that's attached to this node!
      2. The onSnapshot method returns a method. Make sure to return the method
          in your useEffect, so that it's called and the listener is detached when
          this component is killed. 
          Read More: https://firebase.google.com/docs/firestore/query-data/listen#detach_a_listener
      3. You'll probably want to use the .orderBy method to order by a particular key.
      4. It's probably wise to make sure you can create new socials before trying to 
          load socials on this screen.
  */

  const renderItem = ({ item }: { item: SocialModel }) => {
    // TODO: Return a Card corresponding to the social object passed in
    // to this function. On tapping this card, navigate to DetailScreen
    // and pass this social.

    return <Card onPress={() => navigation.navigate("DetailScreen", { social: item })}>
    <Card.Cover source={{ uri: item.eventImage }} />
      {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
      <Card.Content>
        <Title>{item.eventName}</Title>
        <Paragraph>i{item.eventDescription}</Paragraph>
      </Card.Content>
      
    </Card>;
  };

  const NavigationBar = () => {
    // TODO: Return an AppBar, with a title & a Plus Action Item that goes to the NewSocialScreen.
    return (
      <Appbar.Header>
        <Appbar.Content title="Socials" />
        <Appbar.Action icon="plus" onPress={() => navigation.navigate("NewSocialScreen")} />
      </Appbar.Header>
    );
  };

  return (
    <>
      {/* Embed your NavigationBar here. */}
      <View style={styles.container}>
        {/* Return a FlatList here. You'll need to use your renderItem method. */}
        <FlatList
          data={socials}
          renderItem={renderItem}
          keyExtractor={(item) => item.eventName}
        />
      </View>
    </>
  );
}
