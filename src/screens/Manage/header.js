import React from 'react';
import { View, Text } from 'react-native';
import tw from 'lib/tailwind';

const Headers = () => {
    return (
        <View style={tw`bg-blue-500 h-16 mt-10 flex items-center justify-center`}>
            <Text style={tw`text-white text-2xl font-bold`}>Manage Store</Text>
        </View>
    );
};

export default Headers;
