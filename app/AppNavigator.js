// import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
import BookListScreen from './screens/BookListScreen';
import Cart from './screens/Cart';
import BookDetailsScreen from './screens/BookDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
// import ItemAmount from './components/ItemAmount';
import Checkout from './screens/Checkout';
import Orders from './screens/Orders';
import Login from './screens/login/Login';
import Logout from './screens/logout/Logout';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const AllBooks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="All Books" component={BookListScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Book details' component={BookDetailsScreen} options={{
                title: 'Book Details',
                headerStyle: {
                    backgroundColor: '#faeccf',
                },
                headerTintColor: '#828583',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
        </Stack.Navigator>
    );
}

export const CartNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart Details" component={Cart}
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: 'coral',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen name='Checkout' component={Checkout} options={{
                headerTitleAlign: "center",

                headerStyle: {
                    backgroundColor: '#faeccf',

                },
                headerTintColor: '#7a7a78',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: "center",
                    // flex: 1
                },
            }} />
        </Stack.Navigator>
    );
}

const Home = (props) => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={AllBooks} options={({ navigation }) => ({
                title: 'Home',
                headerRight: () => <Logout navigation={navigation} />,
                headerStyle: {
                    backgroundColor: 'coral',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            })} />
            <Drawer.Screen name='Cart' component={CartNav} options={{
                title: 'Cart',
                headerStyle: {
                    backgroundColor: 'coral',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
            <Drawer.Screen name='Orders' component={Orders} />
        </Drawer.Navigator>


    );
}


const AppNavigator = (props) => {
    return (

        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>



    );
}

export default AppNavigator;