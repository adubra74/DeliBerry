import React, { useSyncExternalStore, useState } from 'react';
import {ScrollView, Image, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import ItemCard from '../components/ItemCard';

function Home(props){

return(
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>La carte</Text>
      
    <ScrollView contentContainerStyle={styles.cardContainer}>
      {props.dishes.map((dish,index) => 
        <ItemCard item={dish} key={index} change={props.change} setItem={props.setItem}/>
        )}
      </ScrollView>
    </ScrollView>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'start',
    },
    title:{
      padding:'5%',
      fontSize:26,
    },
    cardContainer:{
      display: 'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'flex-start',
      alignItems:'center',
    }
  });

export default Home