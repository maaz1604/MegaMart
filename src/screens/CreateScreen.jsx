/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react'
import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'


const CreateScreen = ({ data, setData }) => {
    const [itemName, setItemName] = useState('');
    const [stockAMount, setstockAMount] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editItemID, setEditItemID] = useState(null);
    const namePattern = /^[A-Za-z\s]+$/;

    const validateItemDetails = () => {
        const trimmedName = itemName.trim();
        const trimmedStock = stockAMount.trim();
        const parsedStock = Number(trimmedStock);

        if (!trimmedName) {
            Alert.alert('Validation Error', 'Item name is required.');
            return null;
        }

        if (typeof trimmedName !== 'string' || !namePattern.test(trimmedName)) {
            Alert.alert('Validation Error', 'Item name must contain only letters and spaces.');
            return null;
        }

        if (!trimmedStock) {
            Alert.alert('Validation Error', 'Stock amount is required.');
            return null;
        }

        if (!/^\d+(\.\d+)?$/.test(trimmedStock) || !Number.isFinite(parsedStock) || parsedStock < 0) {
            Alert.alert('Validation Error', 'Stock amount must be a valid number.');
            return null;
        }

        return {
            name: trimmedName,
            stock: parsedStock,
        };
    };

    const addItemHandler = () => {
        const validatedItem = validateItemDetails();
        if (!validatedItem) return;

        const newItem = {
            id: Date.now(),
            name: validatedItem.name,
            stock: validatedItem.stock
        }

        setData((prevData) => [newItem, ...prevData]);
        setItemName('');
        setstockAMount('');
        setIsEdit(false);
    }

    const deleteItemHandler = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    }

    const editItemHandler = (item) => {
        if (!item || item.id === undefined || !item.name || item.stock === undefined || item.stock === null) {
            Alert.alert('Validation Error', 'Selected item data is invalid.');
            return;
        }

        setIsEdit(true);
        setItemName(item.name.toString());
        setstockAMount(item.stock.toString());
        setEditItemID(item.id);
    }

    const updateItemHandler = () => {
        if (editItemID === null) {
            Alert.alert('Validation Error', 'No item is selected for update.');
            return;
        }

        const validatedItem = validateItemDetails();
        if (!validatedItem) return;

        setData((prevData) => prevData.map((item) => (
            item.id === editItemID ? { ...item, name: validatedItem.name, stock: validatedItem.stock } : item
        )));
        setItemName('');
        setstockAMount('');
        setEditItemID(null);
        setIsEdit(false);
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter an Item name...'
                placeholderTextColor='#999'
                style={styles.input}
                value={itemName}
                onChangeText={(item) => setItemName(item)}
            />
            <TextInput
                placeholder='Enter stock amount...'
                placeholderTextColor='#999'
                style={styles.input}
                value={stockAMount}
                keyboardType='numeric'
                onChangeText={(item) => setstockAMount(item)}
            />
            <Pressable style={styles.addbutton} onPress={() => isEdit ? updateItemHandler() : addItemHandler()}>
                <Text style={styles.btnTxt}>{isEdit ? "Edit Item in the Stock" : "Add Item in Stock"}</Text>
            </Pressable>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.headingText}>All Items in the Stock</Text>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={[styles.itemContainer, { backgroundColor: item.stock < 10 ? '#ff8fab' : '#D7F6BFFF' }]}>
                            <Text style={styles.itemTxt}>{item.name}</Text>

                            <View style={{ flexDirection: "row", gap: 20 }}>

                                <Text style={styles.itemTxt}>{item.stock}</Text>

                                <Pressable onPress={() => editItemHandler(item)}>
                                    <Text style={styles.itemTxt}>Edit</Text>
                                </Pressable>

                                <Pressable onPress={() => deleteItemHandler(item.id)}>
                                    <Text style={styles.itemTxt}>Delete</Text>
                                </Pressable>

                            </View>
                        </View>
                    )}

                    contentContainerStyle={{ gap: 10 }}
                />
            </View>
        </View>

    )
}

export default CreateScreen

const styles = StyleSheet.create({
    container: {
        paddingVertical: "4%",
        gap: 10,
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#72C37AFF',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,

    },
    btnTxt: {
        color: "white",
        fontWeight: "500",
        fontSize: 15
    },
    addbutton: {
        backgroundColor: '#CABFEEFF',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center"
    },
    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    headingText: {
        fontWeight: "500",
        fontSize: 16,
        marginBottom: 15,
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,
    },
    itemTxt: {
        fontWeight: "400",
        fontSize: 15,
    }
})