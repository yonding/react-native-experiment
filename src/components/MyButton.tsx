import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

const MyButton = (props: any) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 24 }}>{props.children || props.title}</Text>
        </TouchableOpacity>
    )
}

MyButton.defaultProps = {
    title: 'Button'
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'skyblue',
        padding: 16,
        margin: 10,
        borderRadius: 8,
    }
})
export default MyButton;