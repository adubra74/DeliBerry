import React, { useSyncExternalStore, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import NavBar from '../components/NavBar';
import PanierItem from '../components/PanierItem';
import Form from '../components/Form';

function Panier(props) {
    const dishes = props.dishes;
    const panier = dishes.filter(dish => { return dish.selected });
    const page = props.page;
    const setPage = props.setPage;
    const setItem = props.setItem;

    var total = 0;

    panier.map(item => {
        total += item.price;
       
    });
    total=total.toFixed(2);
    //console.log(total);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.panier}>
            {panier.map((dish, index) =>
                <PanierItem item={dish} key={index} change={props.change} style={styles.item} />
            )}
            
            <Text style={styles.total}>Total:  <Text style={{fontWeight:'bold', fontSize:16}}>{total}€</Text> </Text>
            </View>
            <View style={styles.form} >
                <Form page={page} setPage={setPage} setItem={setItem} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        //justifyContent: 'space-around',
        alignItems: 'center',

    },
    panier:{
        display:'flex'
    },
    form: {
        width:'100%',
        margin:5,
        padding:10,
    },
    total:{
        textAlign:"right",
        alignSelf:"flex-end",
        marginTop:5,
        marginRight:20,
        fontSize:15,
    }
})

export default Panier