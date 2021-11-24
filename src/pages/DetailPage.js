import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Image,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { ORANGE1, PURPLE1 } from "../utils/contanst";
import { Card } from "react-native-elements";
import ItemBuy from "../components/ItemBuy";
import CustomButtonCancel from "../components/CustomButtonCancel";
import CustomButtonOK from "../components/CustomButtonOK";

const DetailPage = ({ route }) => {
    const { user, url, name, nameBrand, text } = route.params;
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View
                        style={{
                            flex: 0.4,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <SvgUri
                            width={80}
                            height={80}
                            uri={`https://avatars.dicebear.com/api/avataaars/${user.name}.svg`}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: "flex-start",
                            justifyContent: "center",
                        }}
                    >
                        <Text style={styles.text1}>Hola {user.name}</Text>
                        <Text style={styles.text2}>¡Articulos!</Text>
                    </View>
                </View>
            </View>
            <ImageBackground
                source={require("./../assets/bg1.png")}
                resizeMode="stretch"
                style={styles.image}
            >
                <ScrollView style={{ marginTop: 20, marginBottom: 20 }}>
                    <Card containerStyle={styles.card}>
                        <Text
                            style={{
                                fontSize: 20,
                                color: PURPLE1,
                                fontWeight: "bold",
                                paddingBottom: 10,
                                textAlign: "center",
                            }}
                        >
                            {name}
                        </Text>
                        <View
                            style={{
                                // backgroundColor: "red",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                style={{
                                    width: 250,
                                    height: 250,
                                    borderRadius: 10,
                                }}
                                source={{
                                    uri: url,
                                }}
                            />
                        </View>
                        <Text
                            style={{
                                fontSize: 15,
                                color: "gray",
                                paddingBottom: 10,
                                textAlign: "center",
                            }}
                        >
                            {text}
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                color: "black",
                                paddingBottom: 10,
                                textAlign: "center",
                            }}
                        >
                            {nameBrand}
                        </Text>
                        <View
                            style={{
                                flex: 0.8,
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row",
                            }}
                        >
                            <CustomButtonCancel />
                            <CustomButtonOK />
                        </View>
                    </Card>
                </ScrollView>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "white",
    },
    header: {
        flexDirection: "row",
    },
    text1: {
        color: PURPLE1,
        fontWeight: "bold",
        fontSize: 25,
    },
    text2: {
        color: ORANGE1,
        fontSize: 18,
    },
    image: {
        flex: 1,
        backgroundColor: "white",
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
    },
    card: {
        backgroundColor: "white",
        borderRadius: 20,
        margin: 20,
    },
});

export default DetailPage;
