import React from "react";
import { Text, View, Image } from "react-native";
import CustomButton from "./CustomButton";

const ItemBuy = ({
    navigation,
    url,
    name = "test69",
    nameBrand = "test01",
    user,
    text,
}) => {
    return (
        <View
            style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "thistle",
                borderRadius: 30,
                padding: 5,
                margin: 3,
            }}
        >
            <View
                style={{
                    flex: 0.5,
                    alignItems: "center",
                    alignSelf: "center",
                }}
            >
                <Image
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                    source={{ uri: url }}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    textAlign: "center",
                    alignSelf: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                    }}
                >
                    {name}
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        color: "gray",
                    }}
                >
                    {nameBrand}
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    // backgroundColor: "red",
                    alignItems: "center",
                    textAlign: "center",
                    alignSelf: "center",
                }}
            >
                <CustomButton
                    title="Comprar"
                    onPress={() =>
                        navigation.navigate("DetailPage", {
                            user,
                            url,
                            name,
                            nameBrand,
                            text,
                        })
                    }
                />
            </View>
        </View>
    );
};

export default ItemBuy;
