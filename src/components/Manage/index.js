import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import tw from 'lib/tailwind';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const buttons = [
    {
        text: 'Discount Coupons',
        icon: <MaterialCommunityIcons name="cash-refund" size={24} color="white" />,
        color: '#FFDB58',
        to: "DiscountCoupons",
    },
    // {
    //     text: 'Payouts',
    //     color: '#00e200',
    //     icon: <Ionicons name="ios-card" size={24} color="white" />,
    //     to: "",
    // },
    // {
    //     text: 'Audience',
    //     color: '#008080',
    //     icon: <MaterialIcons name="people" size={24} color="white" />,
    //     to: "",
    // },
    // {
    //     text: 'Delivery',
    //     color: '#0200b9',
    //     icon: <MaterialIcons name="local-shipping" size={24} color="white" />,
    //     // to: "",
    // },
];

function Tiles({ text, icon, color, to }) {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            key={text}
            style={tw`flex h-26 bg-white m-4 rounded flex-row items-center shadow px-4`}
            onPress={() => navigate(to)
            }
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
                            {...item}
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
