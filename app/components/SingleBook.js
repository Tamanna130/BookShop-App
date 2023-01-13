import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

function SingleBook(props) {
    return (

        <TouchableOpacity onPress={props.selectBook} >
            <View style={styles.container}>
                {props.item.image && <Image source={{ uri: props.item.image }} style={styles.image} />}
                <View style={styles.details}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}><Text style={styles.name}>{props.item.name}</Text></View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text  > $ {props.item.price}</Text>
                    </View>
                    <Text style={styles.description} numberOfLines={5}>{props.item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",

        width: "90%",
        height: 350,
        backgroundColor: "#e1edf5",
        marginRight: 10,
        marginLeft: 20,
        marginTop: 16,
        marginBottom: 4,
        borderWidth: .5,
        borderRadius: 12,


    },
    details: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
        marginBottom: 10
    },
    image: {
        width: 200,
        height: 200,
    },
    name: {
        fontWeight: "500",
        fontSize: 15,
        marginBottom: 7
    },
    description: {
        color: "#6e6969"
    }

})
export default SingleBook;