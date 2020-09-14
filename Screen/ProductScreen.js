import React, { useCallback,useEffect,useState } from 'react'
import { View, Text, FlatList, StyleSheet, RefreshControl,} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import globalStyles from '../styles/global'
import { startLoadingProducts } from '../actions/products'
import Product from '../components/products/Product'
import SnackBarScreen from '../helpers/SnackBarScreen'

const ProductScreen = () => {
    const { ui,products:{products} } = useSelector(state => state)
    const [isVisibleStackBar, setIsVisibleStackBar] = useState(false)
    const [messageUI, setMessageUI] = useState('')
    const dispatch = useDispatch()
    
    const onDismissSnackBar = () => setIsVisibleStackBar(false);
 
    const onToggleSnackbar=()=>{
      setIsVisibleStackBar(e=> !e)
    }

    useEffect(() => {
      if(ui.error!= null){
        onToggleSnackbar()
        setMessageUI('Ha ocurrido un error')
      }else if(ui.error==null && !ui.loading){
        onToggleSnackbar()
        setMessageUI('Datos actualizados')
      }
    }, [ui.error,ui.loading])

    const getData=async()=>{
        dispatch(startLoadingProducts())
    }
    const onRefresh=useCallback(()=>{
       getData()
    },[])

    return (
      <View style= {globalStyles.contenedor}>
        <ScrollView
          refreshControl={
            <RefreshControl
                refreshing={ui.loading}
                onRefresh={ onRefresh }
            />
          }
        >
          <View style= { globalStyles.contenido} >
                { products !=null ?(
                  <FlatList
                    data={products}
                    renderItem= { ({item}) =>  <Product product= { item } />}
                    keyExtractor ={(item, index)=> index.toString()}
                />  
                  ):( 
                    <View>
                      <Text>{JSON.stringify(products)}</Text>
                    </View>
                  )   
                }
          </View>
        </ScrollView>
        <SnackBarScreen
          title= { messageUI }
          onDismissSnackBar={onDismissSnackBar}
          state={isVisibleStackBar}
        />
      </View>
    )
}

const styles= StyleSheet.create({

})
export default ProductScreen
