import { View, Text } from 'react-native'
import React from 'react'
import tw from 'lib/tailwind'

const ScreenHeader = ({title}) => {
  return (
    <View style={tw`w-full py-4 pt-10 px-4 bg-brand-secondary border-b border-gray-200`}>
      <Text style={tw`text-2xl font-brandSemibold text-white`}>{title}</Text>
    </View>
  )
}

export default ScreenHeader