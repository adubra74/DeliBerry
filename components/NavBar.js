import React from 'react'
import { View, StyleSheet,Text, Image, TouchableOpacity } from 'react-native'

const NavBar = (props) => {
    const handleHome = () => {
        //console.log('change de page !!');
        props.setPage('Home');
        props.setItem(null);
      };

      const handlePanier = () => {
        //console.log('go panier');
        props.setPage('Panier');
        props.setItem(null);
      };
      
      
  return (
<View style={{backgroundColor: '#E9E1FF',}}>
  <View style={style.container}>

    
    <TouchableOpacity onPress={handleHome}>
        <View>
        <Image source={require('../assets/images/arrow.png')} style={style.img}/>
        </View>

    </TouchableOpacity>
    <Text style={style.title}>DeliBerry🫐</Text>
    <TouchableOpacity onPress={handlePanier}>
    <View style={style.cartView}>
        <Image source={require('../assets/images/cart.png')} style={style.img}/>
        <Text style={style.pastille}>{props.panier}</Text>
    </View>
    </TouchableOpacity>
</View>
</View>
)
  
}
 
const style = StyleSheet.create({
    container: {
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100vw',
        marginBottom:15,
        padding:15,
    },
    title:{
        fontSize: 24,
        left:0,
        right:0,
        textAlign:'center',
    },
    img:{
        width:40,
        height:40,
        
    },
    pastille:{
        fontSize:12,
        textAlign:'center',
        textAlignVertical:'center',
        width:20,
        height:20,
        borderRadius:20,
        backgroundColor:'#FFD600',
        color:'purple',
        position:'absolute',
        transform:[{translateY: -5},{translateX: 23}]
    },
})
export default NavBar