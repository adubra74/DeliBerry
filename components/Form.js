import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";

function Form(props) {
    const [rue, setRue] = useState('');
    const [ville, setVille] = useState('');
    const [postal, setPostal] = useState('');
    const [detail, setDetail] = useState('');
    const setPage = props.setPage;
    const setItem = props.setItem;
    const page = props.page;

    const handleValidation = () => {
        if (rue !== '') {
            if (ville !== '') {
                if (postal !== '') {
                    console.log('Code Postal:', postal); 
                    setPage('Success');
                    setItem(null);
                    
                    props.panier.map(item => {
                        item.selected=false;
                    });
                }
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={{marginVertical:20,}}>
                <Text style={styles.title}>Où veut tu te faire livrer ?</Text>
                <Text style={styles.title}>Ta commande où tu veux !  🛼</Text>
            </View>
            <TextInput
                postal-address
                onChangeText={(text) => setRue(text)}
                value={rue}
                placeholder="Rue"
                style={styles.input}
            />
            <View style={styles.bottom}>
                <View style={styles.bloc}>
                    <TextInput
                        onChangeText={(text) => setVille(text)}
                        value={ville}
                        placeholder="Ville"
                        style={styles.input}
                    />
                </View>
                <View style={styles.bloc}>
                    <TextInput
                        inputMode='numeric'
                        postal-code
                        onChangeText={(text) => setPostal(text)}
                        value={postal}
                        placeholder="Code Postal"
                        style={styles.input}
                    />
                </View>
            </View>
            <TextInput
                inputMode='text'
                onChangeText={(text) => setDetail(text)}
                value={detail}
                placeholder="Détails"
                style={styles.input}
            />
            <View>
                <Button title="Passer la commande" onPress={handleValidation} color="#6D49FF" style={styles.button} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100vw',
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        height: 40,
        marginVertical: 5,
        borderBottomWidth: 1,
        padding: 10,
    },
    button: {
        //position:'absolute',
        textAlign: 'center',
        left: 30,
        marginTop: 10,
    },
    missing: {
        color: 'red',
    },
    bottom: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        //flexWrap:"wrap",
        justifyContent:'space-evenly',
    },
    title:{
        fontSize:17,
        
    },
    bloc:{
        width:'47%'
    }
});

export default Form;
