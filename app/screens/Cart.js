import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CartItem from '../components/CartItem';
import { itemAmountInc, itemAmountDec, removeItem } from '../redux/ActionCreators';
import Checkout from './Checkout';
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        itemAmountInc: (id) => dispatch(itemAmountInc(id)),
        itemAmountDec: (id) => dispatch(itemAmountDec(id)),
        removeItem: (id) => dispatch(removeItem(id)),
        // deletePlace: key => dispatch(deletePlace(key))
    }
}
function Cart(props) {
    // console.log("jjjj", props.cart)


    // console.log("hhh", props.cart)
    const [count, setCount] = useState(0)
    const onIcrementHandlers = (id) => {
        props.itemAmountInc(id)
        setCount((prev) => prev + 1)
    }
    const onDecrementHandlers = (id) => {
        props.itemAmountDec(id)
        setCount((prev) => prev + 1)
    }

    const onRemoveItem = (id) => {
        props.removeItem(id)
        setCount((prev) => prev + 1)
    }

    let totalAmount = 0;

    for (let item of props.cart) {
        totalAmount += item.amount * item.price;
    }
    if (props.cart.length == 0)
        return (<View style={{ flex: 1, width: '100%', height: "100%", }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%', height: "100%" }}><Text>The cart is empty</Text></View>
            <View style={{ height: '6%', backgroundColor: '#9970e6', }}>
                <View style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: "700", color: 'white' }}>Total Price - $ {totalAmount} </Text>
                    <TouchableOpacity disabled={!props.cart.length} onPress={() => props.navigation.navigate('Checkout', { price: totalAmount })} style={{ marginLeft: '25%' }}>
                        <View ><Text style={{ fontWeight: "700", color: 'white' }}>{'|        Checkout    >'}</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <FlatList data={props.cart}
                    renderItem={
                        // ({ item }) => (<CartItem item={item} />)
                        ({ item }) => (

                            <View style={{
                                flex: 1, flexDirection: 'row', backgroundColor: 'white', borderRadius: 5,
                                borderWidth: .5, marginTop: 10, marginLeft: 10, marginRight: 10
                            }}>
                                <View style={styles.container}>
                                    {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
                                    <View style={styles.details}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <View style={{ marginTop: 20 }}><Text style={styles.itemPrice}>$ {item.amount * item.price}</Text></View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: '65%' }}>
                                        <TouchableOpacity title='X' onPress={() => { onRemoveItem(item.id) }}
                                            style={styles.cross}>
                                            <Text style={styles.item_remove_btn}>X</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                                        <TouchableOpacity onPress={() => onDecrementHandlers(item.id)}
                                            style={styles.touchable}>
                                            <Text style={styles.inc_dec_btn} >-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.orderCount}>{item.amount}</Text>
                                        <TouchableOpacity title='+' onPress={() => { onIcrementHandlers(item.id) }}
                                            style={styles.touchable}>
                                            <Text style={styles.inc_dec_btn}>+</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>



                        )
                    }
                    keyExtractor={item => item.id.toString()} />


            </View>
            <View style={{ height: '6%', backgroundColor: '#9970e6', }}>
                <View style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: "700", color: 'white' }}>Total Price - $ {totalAmount} </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Checkout', { price: totalAmount })} style={{ marginLeft: '25%' }}>
                        <View ><Text style={{ fontWeight: "700", color: 'white' }}>{'|        Checkout    >'}</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        width: '70%',

    },
    details: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 80,
        height: 80,
    },
    name: {
        fontWeight: "500",
    },
    description: {
        color: "#6e6969"
    },
    itemPrice: {
        color: "#6e6969"
    },
    touchable: {
        width: 30,
        height: 30,
        backgroundColor: '#bac6db',
        borderRadius: 12,
        marginTop: 10
    },
    cross: {
        width: 27,
        height: 27,
        backgroundColor: '#f07a7c',
        borderRadius: 25,
        marginTop: 10
    },
    inc_dec_btn: {
        paddingLeft: 12,
        paddingTop: 3,
        color: 'white',
        fontWeight: '700'
    },
    item_remove_btn: {
        paddingLeft: 9,
        paddingTop: 3,
        color: 'white',
        fontWeight: '700'
    },
    orderCount: {
        margin: 10,
        fontWeight: "500",
        backgroundColor: '#4287f5',
        width: 30,
        height: 30,
        borderRadius: 12,
        paddingLeft: 11,
        paddingTop: 3,
        color: 'white'
    },


})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);