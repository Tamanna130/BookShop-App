// import React, { useState } from 'react';
// import { connect, Connect } from 'react-redux';
// import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
// import { itemAmountInc } from '../redux/ActionCreators';
// import { useEffect } from 'react';
// import ItemAmount from './ItemAmount';
// import Cart from '../screens/Cart';

// const mapStateToProps = (state) => {
//     return {
//         cart: state.cart,
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         itemAmountInc: (id) => dispatch(itemAmountInc(id))
//         // deletePlace: key => dispatch(deletePlace(key))
//     }
// }
// function CartItem(props) {

//     console.log("hhh", props.item.amount)
//     console.log("hhh", props.cart)
//     const [count, setCount] = useState(0)
//     const onIcrementHandlers = (id) => {
//         props.itemAmountInc(id)
//         setCount((prev) => prev + 1)
//         props.amount;
//         // props.update;
//     }
//     const onDecrementHandlers = () => {

//     }


//     return (

//         <View style={{ flex: 1, flexDirection: 'row' }}>
//             <View style={styles.container}>
//                 {props.item.image && <Image source={{ uri: props.item.image }} style={styles.image} />}
//                 <View style={styles.details}>
//                     <Text style={styles.name}>{props.item.name}</Text>
//                     <Text style={styles.description} numberOfLines={3}>{props.item.description}</Text>
//                 </View>
//             </View>
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

//                 <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
//                     <TouchableOpacity onPress={() => console.log("hh")}
//                         style={styles.touchable}>
//                         <Text style={styles.inc_dec_btn} >-</Text>
//                     </TouchableOpacity>
//                     <Text style={styles.orderCount}>{props.item.amount}</Text>
//                     <TouchableOpacity title='+' onPress={() => { onIcrementHandlers(props.item.id) }}
//                         style={styles.touchable}>
//                         <Text style={styles.inc_dec_btn}>+</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>

//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         alignItems: "center",
//         flexDirection: "row",
//         padding: 15,
//         width: '70%',

//     },
//     details: {
//         flex: 1,
//         marginLeft: 10,
//         justifyContent: "center",
//     },
//     image: {
//         width: 80,
//         height: 80,
//     },
//     name: {
//         fontWeight: "500",
//     },
//     description: {
//         color: "#6e6969"
//     },
//     touchable: {
//         width: 30,
//         height: 30,
//         backgroundColor: '#bac6db',
//         borderRadius: 12,
//     },
//     inc_dec_btn: {
//         paddingLeft: 12,
//         paddingTop: 3,
//         color: 'white',
//         fontWeight: '700'
//     },
//     orderCount: {
//         margin: 10,
//         fontWeight: "500",
//         backgroundColor: '#4287f5',
//         width: 30,
//         height: 30,
//         borderRadius: 12,
//         paddingLeft: 11,
//         paddingTop: 3,
//         color: 'white'
//     }

// })

// export default connect(mapStateToProps, mapDispatchToProps)(CartItem);