/* eslint-disable react-native/no-inline-styles */
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import CreateScreen from './CreateScreen'

const HomeScreen = () => {
    const [view, setView] = useState(0);
    const [data, setData] = useState([
  { "id": 1, "name": "Wheat", "stock": 5, "unit": "kg" },
  { "id": 2, "name": "Basmati Rice", "stock": 12, "unit": "kg" },
  { "id": 3, "name": "All-Purpose Flour", "stock": 8, "unit": "kg" },
  { "id": 4, "name": "Brown Sugar", "stock": 15, "unit": "kg" },
  { "id": 5, "name": "Olive Oil", "stock": 20, "unit": "L" },
  { "id": 6, "name": "Sea Salt", "stock": 50, "unit": "g" },
  { "id": 7, "name": "Black Pepper", "stock": 30, "unit": "g" },
  { "id": 8, "name": "Whole Milk", "stock": 10, "unit": "L" },
  { "id": 9, "name": "Unsalted Butter", "stock": 25, "unit": "pc" },
  { "id": 10, "name": "Large Eggs", "stock": 60, "unit": "pc" },
  { "id": 11, "name": "Red Lentils", "stock": 7, "unit": "kg" },
  { "id": 12, "name": "Chickpeas", "stock": 9, "unit": "kg" },
  { "id": 13, "name": "Honey", "stock": 14, "unit": "kg" },
  { "id": 14, "name": "Apple Cider Vinegar", "stock": 6, "unit": "L" },
  { "id": 15, "name": "Quinoa", "stock": 4, "unit": "kg" },
  { "id": 16, "name": "Rolled Oats", "stock": 11, "unit": "kg" },
  { "id": 17, "name": "Green Tea", "stock": 40, "unit": "pc" },
  { "id": 18, "name": "Coffee Beans", "stock": 3, "unit": "kg" },
  { "id": 19, "name": "Almonds", "stock": 2, "unit": "kg" },
  { "id": 20, "name": "Walnuts", "stock": 5, "unit": "kg" },
  { "id": 21, "name": "Tomato Paste", "stock": 18, "unit": "pc" },
  { "id": 22, "name": "Coconut Milk", "stock": 22, "unit": "L" },
  { "id": 23, "name": "Soy Sauce", "stock": 8, "unit": "L" },
  { "id": 24, "name": "Pasta (Penne)", "stock": 13, "unit": "kg" },
  { "id": 25, "name": "Corn Starch", "stock": 10, "unit": "kg" }
])

    const activeTitle = view === 0 ? 'Item List' : view === 1 ? 'Low Stock' : 'Add Item';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{activeTitle}</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, view===0 ? {backgroundColor:'#72C37AFF'} : null]} onPress={() => setView(0)}>
                    <Text style={[styles.btnText,view===0 ? {color:'white'} : null]}>All Items</Text>
                </Pressable>
                <Pressable style={[styles.button, view===1 ? {backgroundColor:'#72C37AFF'} : null]} onPress={() => setView(1)}>
                    <Text style={[styles.btnText,view===1 ? {color:'white'} : null]}>Low Stock</Text>
                </Pressable>
                <Pressable style={[styles.button, view===2 ? {backgroundColor:'#72C37AFF'} : null]} onPress={() => setView(2)}>
                    <Text style={[styles.btnText,view===2 ? {color:'white'} : null]}>Create</Text>
                </Pressable>
            </View>
            {view === 0 && <AllItems data={data} />}
            {view === 1 && <AllItems data={data.filter((item) => item.stock < 10)} />}
            {view === 2 && <CreateScreen data={data} setData={setData} />}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        padding: '4%',
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black"
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 10,
    },
    button: {
        borderRadius: 50,
        borderWidth: 0.8,
        borderColor: "#72C37AFF",
        paddingVertical: 3.5,
        paddingHorizontal: 10,
    },
    btnText: {
        color: '#72C37AFF',
        fontWeight: '400',
        fontSize: 13
    }
})