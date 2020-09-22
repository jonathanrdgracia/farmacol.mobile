import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';


const useForm = () => {
    const [state, setState] = useState({country:'uk'})

    useEffect(() => {
        console.log(state);
    }, [state])
    return (
        <View>
            <Text>useForm</Text>
            <DropDownPicker
                items={[
                    {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
                    {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
                ]}
                defaultValue={state.country}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) => 
                    setState({country: item.value})
                }
                
            />
        </View>
    )
}

export default useForm
