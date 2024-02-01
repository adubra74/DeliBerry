import React, { useSyncExternalStore, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';

function ItemDetails(props) {
    //const selectedItem = 
    const item = props.item
    //console.log(item)
    return (
        <View contentContainerStyle={cardStyle.container}>
        
            <Image source={{ uri: item.img }} style={cardStyle.img} />
            <View style={cardStyle.CardContent}>
                <View style={cardStyle.top}>

                    <Text style={{ fontSize: 20, marginRight: 2, width: '80%' }}>{item.title}</Text>
                    <Text style={{ color: '#713335', fontSize: 16 }}>{item.price} €</Text>
                </View>

                <View style={cardStyle.bottom}>
                    <Text style={{ marginRight: 2 }}>{item.desc}</Text>
                    <Checkbox
                        style={cardStyle.checkbox}
                        value={item.selected}
                        onValueChange={() => props.change(item.id)}
                        color={item.selected ? '#6D49FF' : undefined}
                    />
                </View>
                <View style={cardStyle.allergy}>
                    <Text  style={{fontSize: 18, marginRight: 2, width: '80%'}}>Allergènes</Text>
                    <Text>{item.allergy}</Text>
                </View>

            </View>
        </View>
    )
}

const cardStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'start',
    },
    Card:{
      borderRadius: 5,
      backgroundColor: '#FFFFFF',
      margin: 10,
      width:'45%',
      borderColor: '#FDF7EF',
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
    fontSize:16,
  },
  bottom:{
    flexDirection:'row',
    justifyContent:'space-between',
    fontSize:16,
    padding:5,
  },
  allergy:{
    flexDirection:'column',
    fontSize:16,
    padding:5,
  },
  img:{
    aspectRatio: '1/1',
    width:'100%',
  },
  checkbox:{
    width: 20,
    height:20
  },
});

export default ItemDetails