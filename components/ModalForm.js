import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements'

const ModalForm = (props) => {

    const { isVisible, setIsVisible, children } = props;
    const closeModal=()=> setIsVisible(false);

    return (
       <Overlay
            isVisible = { isVisible }
            windowBackgroundColor= 'rgba(0,0,0,.5)'
            overlayBackgroundColor= 'transparent'
            overlayStyle = { styles.overlay }
            onBackdropPress ={ closeModal }
       >
            { children }
       </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay:{
        height: 'auto',
        width: '90%',
        backgroundColor: '#fff',
    
    }
});

export default ModalForm
