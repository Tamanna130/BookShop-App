import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
// import Cart from './Cart';
import { addToCart, itemAmountInc } from '../redux/ActionCreators';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: item => dispatch(addToCart(item)),
        itemAmountInc: (id) => dispatch(itemAmountInc(id))
    }
}


const BookDetailsScreen = (props) => {
    const book = props.route.params.book;

    const onCartHandlder = () => {
        let flag = 0
        for (let item of props.cart) {
            if (book.id == item.id) {
                flag = 1
            }
        }
        if (flag == 0) {
            props.addToCart(book);
            props.itemAmountInc(book.id)
        }
        // props.navigation.navigate('Cart')

    }

    return (
        <View>
            <View>
                <Image source={{ uri: book.image }} style={styles.image} />
            </View>

            <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>

                <View style={styles.details}>
                    <Text style={styles.name}>{book.name}</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Author: </Text>
                            <Text style={{ fontWeight: '300', marginBottom: 10 }}>{book.author}</Text>
                        </View>
                        <Text style={{ flexDirection: 'row', marginLeft: '43%' }}>$ {book.price}</Text>
                    </View>
                    <Text>{book.description}</Text>
                </View>
                <TouchableOpacity onPress={onCartHandlder}
                    style={{
                        width: "35%", height: "15%", justifyContent: 'center', alignItems: 'center',
                        marginTop: 20, backgroundColor: '#5bb57c', borderRadius: 12,
                    }}>
                    <Text style={{ color: 'white', }}>Add To Cart</Text>
                </TouchableOpacity>
                {/* <View style={{ width: "30%", marginTop: 20, backgroundColor: 'red' }}>
                    
                    
            </View> */}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: "95%",
        height: 300,
        margin: 10
    },
    name: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 10
    },
    details: {
        padding: 10,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsScreen);