import React from "react";
import { Image, Text, View, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../MainStackScreen";
import { styles } from "./HomeScreen.styles";

interface Props {
    navigation: StackNavigationProp<MainStackParamList, "HomeScreen">;
  }

export default function HomeScreen({ navigation }: Props){
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>MDB SOCIALS APP</Text>
            <Text style={styles.h2}>Welcome to the MDB Socials App!</Text>
            <Button
                title="View Socials"
                onPress={() => navigation.navigate('FeedScreen')}
            />
            <Button
                title= "Create New Social"
                onPress={() => navigation.navigate('NewSocialScreen')}
            />
        </View>

    );

}
