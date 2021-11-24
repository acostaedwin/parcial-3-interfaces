import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { Input, Card } from "react-native-elements";
import HomePage from "./HomePage";

const WelcomePage = ({ navigation }) => {
    const [user, setUser] = useState("");
    const [name, setName] = useState("");

    const registerUserHandle = () => {
        setUser({ name: name || "Edwin Acosta" });
    };

    if (user && user.name)
        return <HomePage user={user} navigation={navigation} />;

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Card containerStyle={styles.card}>
                <Card.Title>Ropa para dama</Card.Title>
                <Input
                    placeholder="Ingresa tu nombre"
                    value={name}
                    onChangeText={(value) => setName(value)}
                />
                <CustomButton title="Ingresar" onPress={registerUserHandle} />
            </Card>
        </View>
    );
};
const styles = StyleSheet.create({
    rounded: {
        borderRadius: 20,
    },
    card: {
        width: "90%",
    },
});

export default WelcomePage;
