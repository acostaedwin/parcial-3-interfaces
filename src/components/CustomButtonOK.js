import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const CustomButtonOK = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image
                style={styles.image}
                source={require("./../assets/btnOK.png")}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        // backgroundColor: "red",
    },
    image: {
        width: 50,
        height: 44,
    },
});

export default CustomButtonOK;
