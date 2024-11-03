import React from "react";
import { ColorValue } from "react-native";
import { Text, View } from "react-native";

interface FlareProps {
    color?: ColorValue,
    text?: string
}

const Flare: React.FC<FlareProps> = ({
    color,
    text
    }) => {
    return (
        <View style={{
            backgroundColor: color,
            borderRadius: 15,
            width: 'auto',
            paddingRight: 10,
            paddingLeft: 10,
            justifyContent: 'center',
        }}>
            <Text>{text}</Text>
        </View>
    );
};



export default Flare;