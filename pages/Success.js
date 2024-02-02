import React, { useSyncExternalStore, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

function Success(){
    return(

<ScrollView contentContainerStyle={style.container}>
        <Image source={require('../assets/images/success.png')} style={style.img} />
        <Text style={style.title}>Commande envoyée !</Text>
    </ScrollView>
    )
}

const style = StyleSheet.create ({
    img:{
        marginTop:30,
        width:'100%',
        aspectRatio:'1/1',    
    },
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        marginTop:30,
        textAlign:'center',
        fontSize:20,
        color:'#6D49FF',
    }
})
export default Success