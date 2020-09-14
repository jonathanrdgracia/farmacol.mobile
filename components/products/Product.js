import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Card, Divider, Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

const product = ({ product }) => {
    const { id, name, images,price,count,description } = product
    const image= images[0]
    return (
        <TouchableOpacity>
         <Divider style={{ backgroundColor: 'gray' }} />
           <View style={styles.viewProduct}>
               <View style={styles.viewProductImage}>

                   {/* <Image
               <Avatar size={35} rounded source={{ uri: image, }} />
                       resizeMode='cover'
                       source={ uri: image }
                       style={styles.imagesProduct}
                       PlaceholderContent={<ActivityIndicator color='#fff' />}
                   /> */}
               </View>
               <View>
                   <Text style={styles.productName} >{name}</Text>
                   <Text>Cantidad: {count}</Text>
                   <Text>RD${price}</Text>
                   <Text style={styles.productDescription} >
                       {description.substr(0,60)}...
                   </Text>
               </View>
           </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:0,
        margin:0,
    },
    loadingProducts:{
        marginTop: 20,
        alignItems: 'center',
    },
    viewProduct:{
        flexDirection: 'row',
        margin:10,
    },
    viewProductImage:{
        marginRight: 5,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
    },
    imagesProduct: {
        width: 40,
        height: 40,
      
    },
    productName:{
        fontWeight: 'bold',
    },
    restaurantAddress:{
        paddingTop: 2,
        color: 'gray'
    },
    productDescription:{
        paddingTop: 2,
        color: 'grey',
        width: 300
    },
    loaderProduct: {
        marginTop: 10,
        marginBottom: 10,
    },
    notFoundProduct:{
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
})
export default product;
