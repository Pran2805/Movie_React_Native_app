import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants/icons'
interface Props {
    placeholder: string,
    onPress?: void
}
const SearchBar = ({onPress, placeholder}: Props) => {
    const [search, setSearch] = useState("")
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4 gap-3'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff" />

      <TextInput 
      onPress={onPress} 
      placeholder={placeholder}
       value={search} 
       onChange={(e) => setSearch(e.target?.value)}
       placeholderTextColor="#a8b5db"
      className='text-text-primary' />
    </View>
  )
}

export default SearchBar