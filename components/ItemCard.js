import React, { useSyncExternalStore, useState } from 'react';
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Checkbox from 'expo-checkbox';



function ItemCard(props){
    const item = props.item;
    const handleClick = () => {
      props.setItem(item.id);

    };
  return (
    <View style={cardStyle.Card}>
      <TouchableOpacity onPress = {handleClick}>
        <Image source={{ uri: item.img }} style={cardStyle.img}/>
      </TouchableOpacity>
          <View style={cardStyle.CardContent}>
              <View style={cardStyle.top}>
              
                <Text style={{fontSize:15, marginRight:2, width:'80%'}}>{item.title}</Text>
                <Text style={{color:'#6D49FF', fontSize:15}}>{item.price} €</Text>
              </View>

              <View style={cardStyle.bottom}>
                <Text style={{marginRight:2}}>{item.desc}</Text>
                <Checkbox
                style={cardStyle.checkbox}
                value={item.selected}
                onValueChange={()=>props.change(item.id)}
                color={item.selected ? '#6D49FF' : undefined}
              />
            </View>
        </View>
  </View>
  )
}

const cardStyle = StyleSheet.create({
      title:{
      
      },
      Card:{
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        margin: 10,
        width:'45%',
        borderColor: '#E9E1FF',
        borderWidth: 2,
        overflow: 'hidden',
    },
    CardContent:{
      marginVertical: 6,
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      padding:3,
    },
    top:{
      flexDirection:'row',
      justifyContent:'space-between',
      fontSize:14,
    },
    bottom:{
      flexDirection:'row',
      justifyContent:'space-between',
      fontSize:10,
      padding:5,
    },
    img:{
      aspectRatio: '1/1',
      width:'100%',
    },
    checkbox:{
      width: 16,
      height:16
    },
  });

export default ItemCard
