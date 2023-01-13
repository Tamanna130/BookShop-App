import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function Logout({ navigation }) {
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={{
            width: '26%', height: 26, borderRadius: 15,
            backgroundColor: '#05a386', justifyContent: 'center', alignItems: 'center', marginRight: 20
        }}>
            <Text style={{ color: 'white' }}>
                Logout
            </Text>
        </TouchableOpacity>
    );
}

export default Logout;