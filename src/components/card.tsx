import React, { ReactNode } from 'react';

import { View, TextStyle } from 'react-native';
import { StyleProp, ViewStyle, StyleSheet } from 'react-native';

import GlobalStyles from './styles';

interface CardProps {
    header?: ReactNode,
    children?: ReactNode,
    titleStyle?: StyleProp<TextStyle>,
    headerStyle?: StyleProp<ViewStyle>,
    contentStyle?: StyleProp<ViewStyle>,
    cardStyle?: StyleProp<ViewStyle>
}

const Card: React.FC<CardProps> = ({
    header,
    children,
    headerStyle = {},
    contentStyle = {},
    cardStyle = {}
    }) => {
    return (
        <View style={[styles.card, cardStyle]}>
            <View style={[styles.header, headerStyle]}>
                {header}
            </View>
            <View style={[styles.content, contentStyle]}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: GlobalStyles.primary.backgroundColor,
        width: 'auto',
        height: 'auto',
        borderRadius: 10,
        padding: 15,
        shadowRadius: 5, // adds shadow on ios
        elevation: 5, // adds shadow on android
    },
    header: {
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'blue',
    },
    content: {
        marginTop: 5
    }
})

export default Card;