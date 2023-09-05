import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const PressableButton = (props: any) => {
    return (
        <Pressable
            style={styles.button}
            onPressIn={() => console.log('press in')}
            onPressOut={() => console.log('press out')}
            onPress={() => console.log('press')}
            onLongPress={() => console.log('long press')}
            delayLongPress={3000}
            pressRetentionOffset={{ bottom: 50, left: 50, right: 50, top: 50 }}
        >
            <Text style={{ fontSize: 24 }}>{props.children || props.title}</Text>
        </Pressable>
    )
}

PressableButton.defaultProps = {
    title: 'Button'
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'skyblue',
        padding: 10,
    },
    text: {
        padding: 10,
        fontSize: 30
    }
})

export default PressableButton;