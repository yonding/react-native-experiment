import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from 'react-native';

const EventInput = () => {
    const [text, setText] = useState('');
    const _onChangeText = (text: React.SetStateAction<string>) => setText(text);
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.text}>{text}</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter a text"
                onChangeText={_onChangeText}
            >

            </TextInput>
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
    text: {
        margin: 10,
        fontSize: 30
    },
    input: {
        borderWidth: 1,
        padding: 10,
        fontSize: 20
    }
})

export default EventInput;