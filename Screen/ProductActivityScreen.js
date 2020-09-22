import React, { useState, useEffect, useRef } from 'react'
import { View, Dimensions,StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import SnackBarScreen from '../helpers/SnackBarScreen'
import { useDispatch } from 'react-redux'
import { startLoadingLastSale } from '../actions/sales'
import ModalForm from '../components/ModalForm';
import UseForm from '../hooks/UseForm'
const { width }= Dimensions.get('window')

const ProductActivityScreen = () => {
    navi
    const [state, setState] = useState(false)
    const menu = useRef();
    const onDismissSnackBar = () => setState(false);
    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const [renderForm, setRenderForm] = useState(<UseForm/>)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch( startLoadingLastSale() )
    }, [])
     
    const hideMenu = () => {
        menu.current.hide()
        setIsVisibleModal(true)
    }

    const showMenu = () => menu.current.show();
      
    const onToggleSnackbar=()=>{
        setState(e=> !e)
    }
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');

    return (
        <View style= {styles.container} >
            <Appbar.Header style={{
                backgroundColor:'yellow',
                }}
            >
                <Appbar.BackAction onPress={_goBack} />
                <Appbar.Content title="FarmaCol" subtitle="Ventas" />
                {/* <Searchbar remove ={false} placeholder="Search" style={{ width: width/2}} /> */}
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
                <Appbar.Action icon="dots-vertical" onPress={showMenu} />
            </Appbar.Header>
            <SnackBarScreen
                title='Productos actualizados'
                onDismissSnackBar={onDismissSnackBar}
                state={state}
            />
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}  >
                <Menu ref={ menu }>
                    <MenuItem  onPress={hideMenu}>Agregar Ruta</MenuItem>
                    <MenuItem onPress={hideMenu}>Ventas</MenuItem>
                    <MenuItem onPress={hideMenu}>Actualizar Base de Datos</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={()=> navi}>Clientes</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={hideMenu}>Cerrar Sección</MenuItem>
                </Menu>
            </View>
            {
                isVisibleModal &&(
            <ModalForm
                children = {false}
                setIsVisible ={ setIsVisibleModal} 
                isVisible= { isVisibleModal }
            >
                {renderForm}
            </ModalForm>
                )
            }
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection: 'column'
    }
})

export default ProductActivityScreen
