import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { ORANGE1, PURPLE1 } from "../utils/contanst";
import { Card } from "react-native-elements";
import ItemBuy from "../components/ItemBuy";

const data = [
    {
        name: "Jeans 1",
        nameBrand: "Brand1",
        url: "https://static.dafiti.com.co/p/smara-classic-2867-2334951-1-zoom.jpg",
        text: "Jeans Tiro Medio Mujer Levanta Cola - Saramanta Classic",
    },
    {
        name: "Jean Levi's",
        nameBrand: "LEVI'S",
        url: "https://levisco.vteximg.com.br/arquivos/ids/215309-1200-1600/Jeans-Jean-711-Skinny-202961-711-Indigo-Oscuro_1.jpg",
        text: "Jean Levi's® 711 Skinny para mujer - Jean 711 Skinny 26/32",
    },
    {
        name: "JEANS DAMA",
        nameBrand: "B841",
        url: "https://tumodalatina.com/4146-thickbox_default/jeans-dama-b841.jpg",
        text: "Colección: D001 - Referencia B841",
    },
    {
        name: "Saco Mujer",
        nameBrand: "Denimlab",
        url: "https://falabella.scene7.com/is/image/FalabellaCO/881838352_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70",
        text: "DENIMLAB Código: 881838352 Saco Mujer Denimlab",
    },
    {
        name: "Blazer",
        nameBrand: "Luvamia",
        url: "https://m.media-amazon.com/images/I/618NPwwT+UL._AC_UY550_.jpg",
        text: "Luvamia - Blazer de oficina para mujer, informal, de manga larga, con botón de solapa",
    },
    {
        name: "Jeans 1",
        nameBrand: "Brand1",
        url: "https://static.dafiti.com.co/p/smara-classic-2867-2334951-1-zoom.jpg",
        text: "Jeans Tiro Medio Mujer Levanta Cola - Saramanta Classic",
    },
    {
        name: "Jean Levi's",
        nameBrand: "LEVI'S",
        url: "https://levisco.vteximg.com.br/arquivos/ids/215309-1200-1600/Jeans-Jean-711-Skinny-202961-711-Indigo-Oscuro_1.jpg",
        text: "Jean Levi's® 711 Skinny para mujer - Jean 711 Skinny 26/32",
    },
    {
        name: "JEANS DAMA",
        nameBrand: "B841",
        url: "https://tumodalatina.com/4146-thickbox_default/jeans-dama-b841.jpg",
        text: "Colección: D001 - Referencia B841",
    },
    {
        name: "Saco Mujer",
        nameBrand: "Denimlab",
        url: "https://falabella.scene7.com/is/image/FalabellaCO/881838352_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70",
        text: "DENIMLAB Código: 881838352 Saco Mujer Denimlab",
    },
    {
        name: "Blazer",
        nameBrand: "Luvamia",
        url: "https://m.media-amazon.com/images/I/618NPwwT+UL._AC_UY550_.jpg",
        text: "Luvamia - Blazer de oficina para mujer, informal, de manga larga, con botón de solapa",
    },
];

const HomePage = ({ navigation, user }) => {
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
                            }}
                        >
                            Tu articulos favoritos
                        </Text>
                        {data.map((item, key) => (
                            <ItemBuy
                                key={key}
                                name={item.name}
                                nameBrand={item.nameBrand}
                                url={item.url}
                                navigation={navigation}
                                user={user}
                                text={item.text}
                            />
                        ))}
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

export default HomePage;
