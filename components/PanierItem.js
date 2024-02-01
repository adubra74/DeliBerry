import React, { useSyncExternalStore, useState } from 'react';
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Checkbox from 'expo-checkbox';



function PanierItem(props) {
  const item = props.item;
  const handleClick = () => {
    props.setItem(item.id);

  };
  return (
    <View style={cardStyle.Card}>
      <Image source={{ uri: item.img }} style={cardStyle.img} />

      <View style={cardStyle.CardContent}>

        <View style={cardStyle.left}>
          <Text style={{ fontSize: 15, marginRight: 2 }}>{item.title}</Text>
          <Text style={{ marginRight: 2 }}>{item.desc}</Text>
        </View>

        <View style={cardStyle.right}>
          <Text style={{ color: '#6D49FF', fontSize: 15 }}>{item.price} €</Text>
          <Checkbox
            style={cardStyle.checkbox}
            value={item.selected}
            onValueChange={() => props.change(item.id)}
            color={item.selected ? '#6D49FF' : undefined}
          />
        </View>

      </View>
    </View>
  )
}

const cardStyle = StyleSheet.create({
  title: {

  },
  Card: {
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    margin: 10,
    width: '90vw',
    borderColor: '#E9E1FF',
    borderWidth: 2,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  CardContent: {
    display: 'flex',
    justifyContent:'space-between',
    flexDirection: 'row',
    padding: 3,
    width:'80%',
  },

  right: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  left: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth:'80%',
  },
  img: {
    justifyContent: 'flex-start',
    aspectRatio: '1/1',
    flexGrow:1,
    width: '7vw',

  },
  checkbox: {
    width: 16,
    height: 16
  },
});

export default PanierItem
