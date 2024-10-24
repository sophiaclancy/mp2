import React from "react";
import { Image, Text, View, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../MainStackScreen";

interface Props {
    navigation: StackNavigationProp<MainStackParamList, "ConfirmationScreen">;
  }

export default function ConfirmationScreen({ navigation }: Props){
    return (
        <View>
            <Text>Your event has been successfully created!</Text>
            <Button
                title= "Go to Home"
                onPress={() => navigation.navigate('HomeScreen')}
            />
            <Button
                title="View Socials"
                onPress={() => navigation.navigate('FeedScreen')}
            />
        </View>

    );

}