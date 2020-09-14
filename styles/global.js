import { StyleSheet } from 'react-native'

const globalStyles= StyleSheet.create({
    contenedor:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    contenido:{
        marginHorizontal: '2.5%'
    },
    boton:{
        backgroundColor: '#FFDA00'
    },
    botonTexto:{
        textTransform:"uppercase",
        fontWeight: 'bold',
        color: '#000'
    }
})

export default globalStyles;