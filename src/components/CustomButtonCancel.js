import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const CustomButtonCancel = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image
                style={styles.image}
                source={require("./../assets/btnCancel.png")}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        // backgroundColor: "red",
    },
    image: {
        width: 50,
        height: 44,
    },
});

export default CustomButtonCancel;
