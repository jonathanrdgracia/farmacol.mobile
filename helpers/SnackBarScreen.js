import React from 'react'
import { Snackbar } from 'react-native-paper'

const SnackBarScreen = ({title,state,onDismissSnackBar}) => {
    return (
        <Snackbar
        duration={ 2000 } 
        visible={state}
        
        onDismiss={ onDismissSnackBar }
        action={{
            label: 'Entendido',
            onPress: () => {
            
            },
        }}>
        {title}
        </Snackbar>
    )
}

export default SnackBarScreen


