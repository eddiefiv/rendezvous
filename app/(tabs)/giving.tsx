import {Text, View, StyleSheet} from 'react-native'

export default function GivingViews() {
    return (
        <View style={styles.container}>
            <Text>Giving</Text>
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