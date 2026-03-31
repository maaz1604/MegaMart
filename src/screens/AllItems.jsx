import { FlatList, StyleSheet, Text, View } from 'react-native'

const AllItems = ({data }) => {
    return (
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Items</Text>
                <Text style={styles.headingText}>Quantity</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer, item.stock < 10 ? styles.lowStockItem : styles.normalStockItem]}>
                        <Text style={styles.itemTxt}>{item.name}</Text>
                        <Text style={styles.itemTxt}>{item.stock}</Text>
                    </View>
                )}

                // eslint-disable-next-line react-native/no-inline-styles
                contentContainerStyle={{gap:10}}
            />
        </View>
    )
}

export default AllItems

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    headingText: {
        fontWeight: "500",
        fontSize: 16,
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:7,
    },
    lowStockItem: {
        backgroundColor: '#ff8fab',
    },
    normalStockItem: {
        backgroundColor: '#D7F6BFFF',
    },
    itemTxt: {
        fontWeight: "400",
        fontSize: 15,
    }
})