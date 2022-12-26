import { View, Text, Button } from 'react-native'
import React from 'react';
import Manage from 'components/Manage';
import tw from 'lib/tailwind';
import Headers from './header';

const ManageScreen = () => {
  return (
    <View>
      <Headers />
      <Manage />
    </View>

  )
}

export default ManageScreen;
