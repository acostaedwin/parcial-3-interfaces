import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { PURPLE1 } from "./src/utils/contanst";
import { StatusBar } from "expo-status-bar";
import HomePage from "./src/pages/HomePage";
import DetailPage from "./src/pages/DetailPage";
import WelcomePage from "./src/pages/WelcomePage";

const Stack = createStackNavigator();

const customStyle = {
    headerStyle: {
        backgroundColor: PURPLE1,
        shadowColor: "transparent",
        elevation: 0,
    },
    headerTintColor: "#fff",
};

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={PURPLE1} barStyle="light-content" />
            <Stack.Navigator initialRouteName="WelcomePage">
                <Stack.Screen
                    name="WelcomePage"
                    options={{
                        ...customStyle,
                        // headerShown: false,
                    }}
                    component={WelcomePage}
                />
                <Stack.Screen
                    name="HomePage"
                    options={{
                        ...customStyle,
                        // headerShown: false,
                    }}
                    component={HomePage}
                />
                <Stack.Screen
                    name="DetailPage"
                    options={{
                        ...customStyle,
                        // headerShown: false,
                    }}
                    component={DetailPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
