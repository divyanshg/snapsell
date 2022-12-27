import { View, Text, Button } from 'react-native'
import React from 'react';
import Manage from 'components/Manage';
import tw from 'lib/tailwind';
import ScreenHeader from 'components/ScreenHeader';

const ManageScreen = () => {
  return (
    <View>
      <ScreenHeader title="Manage Store" />
      <Manage />
    </View>

  )
}

export default ManageScreen;
