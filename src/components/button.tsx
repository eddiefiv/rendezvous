import { AntDesign } from '@expo/vector-icons';

import React, { ReactNode } from 'react';
import { Text, StyleSheet, Pressable, StyleProp, ViewStyle } from 'react-native';

interface ButtonProps {
    onPress: any,
    children?: ReactNode,
    style: StyleProp<ViewStyle>
}

const Button: React.FC<ButtonProps> = ({
    onPress,
    children,
    style
}) => {
    return (
    <Pressable style={[defaultButtonStyle.button, style]} onPress={onPress}>
        {children}
    </Pressable>
    );
}

const defaultButtonStyle = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default Button;