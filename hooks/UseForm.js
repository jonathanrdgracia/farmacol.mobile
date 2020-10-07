import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown-v2';


import Icon from 'react-native-vector-icons/Feather';

const useForm = () => {
    const [state, setState] = useState({country:'uk'})
    
    useEffect(() => {
        console.log(state);
    }, [state])
    
    const data = [{ value: 'Banana' },{ value: 'Mango' },{ value: 'Pear' }]
    return (
        <View>
            <Text>useForm</Text>

            <Dropdown
                label= 'Select one'
                data= {data}
                onChangeText = {e => console.log(e)}
                useNativeDriver = {true}
                

            />
        </View>
    )
}

export default useForm
