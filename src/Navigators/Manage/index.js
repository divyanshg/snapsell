import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import DiscountCoupons from "screens/Manage/DiscountCoupons";
import ManageScreen from "screens/Manage";

function ManageStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ManageScreen" component={ManageScreen} />
            <Stack.Screen name="DiscountCoupons" component={DiscountCoupons} />
            
        </Stack.Navigator>
    )
}

export default ManageStack