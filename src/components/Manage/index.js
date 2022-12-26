import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import tw from 'lib/tailwind';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const buttons = [
    {
        text: 'Discount Coupons',
        icon: <MaterialCommunityIcons name="cash-refund" size={24} color="white" />,
        color: '#FFDB58',
    },
    {
        text: 'Payouts',
        color: '#00e200',
        // icon: {
        //     name: 'ios-card',
        //     component: Ionicons,
        // },
        onPress: () => { },
    },
    {
        text: 'Audience',
        color: '#008080',
        // icon: {
        //     name: 'people',
        //     component: MaterialIcons,
        // },
        onPress: () => { },
    },
    {
        text: 'Delivery',
        color: '#0200b9',
        // icon: {
        //     name: 'local-shipping',
        //     component: MaterialIcons,
        // },
        onPress: () => { },
    },
];


function Tiles({ text, icon, color }) {
    return (
        <TouchableOpacity
            key={text}
            style={tw`flex h-26 bg-white m-4 rounded flex-row items-center shadow px-4`}
            onPress={() => {
            }}
        >
            <View style={tw`p-2 rounded flex items-center justify-center bg-[${color}]`}>
                {icon && icon}
            </View>
            <Text style={tw`font-brandRegular text-lg px-2 items-center`}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

function Manage() {

    return (
        <View style={tw`flex-col`}>
            <View style={tw` w-full`}>
                <FlatList
                    data={buttons}
                    renderItem={({ item }) => (
                        <Tiles
                            text={item.text}
                            icon={item.icon}
                            color={item.color}
                        />
                    )}
                    keyExtractor={(item) => item.text}
                    numColumns={1}
                />

            </View>
        </View>
    );
}
export default Manage;
