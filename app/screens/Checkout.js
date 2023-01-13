import axios from 'axios';
import { React, useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}
function Checkout(props) {
    const [address, setaddress] = useState("");
    const [phoneNum, setphoneNum] = useState("");
    const price = props.route.params.price;
    let flag = false

    if (props.cart.length == 0) {
        flag = true
        console.log(props.cart.length)
    }
    const onCheckoutHandler = () => {
        // console.log(props.cart)
        const order = {
            address: address,
            phoneNum: phoneNum,
            productDetails: props.cart,
            orderTime: new Date(),
        }
        axios.post('https://mybooks-93063-default-rtdb.firebaseio.com/orders.json', order)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        props.navigation.navigate('Home')
    }
    return (

        <View style={{ flex: 1, width: '100%', height: "100%", alignItems: 'center' }}>
            <View style={{
                width: "85%",
                padding: 5,
                marginTop: 10,
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#009688",
                borderRadius: 4
            }} >
                <TextInput style={{ paddingLeft: 10, }} placeholder='Your Address' value={address} onChangeText={(e) => setaddress(e)}></TextInput>
            </View>
            <View style={{
                width: "85%",
                padding: 5,
                marginTop: 10,
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#009688",
                borderRadius: 4
            }} >
                <TextInput style={{ paddingLeft: 10, }} placeholder='Your Phone Number' value={phoneNum} onChangeText={(e) => setphoneNum(e)}></TextInput>
            </View>
            <View style={{
                width: "85%",
                padding: 5,
                marginTop: 10,
                backgroundColor: "#eee",
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 4
            }} >
                <TextInput style={{ paddingLeft: 10 }} editable={false}>Cash On Delivery</TextInput>
            </View>
            <View style={{
                width: "85%",
                padding: 5,
                marginTop: 10,
                backgroundColor: "#eee",
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 4
            }} >
                <TextInput style={{ paddingLeft: 10 }} editable={false}>Total price ${price}</TextInput>
            </View>
            <TouchableOpacity disabled={flag} style={{ height: '5%', width: '25%', backgroundColor: '#5e98d6', marginTop: 20, borderRadius: 5, justifyContent: 'center', alignItems: 'center', }}
                onPress={onCheckoutHandler}>
                <Text style={{ color: 'white' }}>Checkout</Text>
            </TouchableOpacity>
        </View>

    );
}

export default connect(mapStateToProps)(Checkout);