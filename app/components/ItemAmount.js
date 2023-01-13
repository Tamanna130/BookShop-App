import React from 'react';
import { View, Text } from 'react-native';
import { connect, Connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

function ItemAmount(props) {
    // let itemCount
    // for (let item of props.cart) {
    //     if (props.id === item.id) {
    //         itemCount = item.amount
    //         break
    //     }
    // }
    console.log(props.amount)
    return (
        <View>
            <Text>{"hhh"}</Text>
        </View>
    );
}

export default connect(mapStateToProps)(ItemAmount);