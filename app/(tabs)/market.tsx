import {Text, View, StyleSheet} from 'react-native'

export default function MarketView() {
    return (
        <View style={styles.container}>
            <Text>Market view</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});