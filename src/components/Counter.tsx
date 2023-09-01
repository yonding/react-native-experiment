import React, { useState } from "react";
import { View, StyleSheet, Text } from 'react-native';
import MyButton from "./MyButton";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.title}>{count}</Text>
            <MyButton title="+1" onPress={() => setCount(count + 1)} />
            <MyButton title="-1" onPress={() => setCount(count - 1)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    }
})

export default Counter;