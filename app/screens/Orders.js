import { React, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchOrders } from '../redux/ActionCreators';
// import Order from './Order';
const mapStateToProps = state => {
    return {
        orders: state.orders,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
    }
}
const Orders = (props) => {
    useEffect(() => {
        props.fetchOrders();

    }, [])
    let s = []
    // for (let item of props.orders) {
    //     s.push(item)
    // }
    console.log(props.orders)
    if (!props.orders) {
        return (
            <Text>loading</Text>
        )
    }
    return (

        <View>
            <FlatList data={props.orders}
                renderItem={
                    ({ item }) => (<Text>Unable to complete due to time constraint</Text>)
                }
                keyExtractor={item => item.id} />


        </View>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

