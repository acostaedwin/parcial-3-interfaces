import React from "react";
import { ActivityIndicator } from "react-native";
import { Button } from "react-native-elements";
import { PURPLE1, ORANGE1 } from "../utils/contanst";

const CustomButton = ({ bgColor, loading, ...props }) => {
    if (loading) return <ActivityIndicator color={ORANGE1} size="large" />;
    return (
        <Button
            {...props}
            buttonStyle={{ backgroundColor: bgColor || PURPLE1 }}
        />
    );
};

export default CustomButton;
