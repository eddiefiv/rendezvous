import {Text, View, StyleSheet} from 'react-native'

export default function NotifView() {
    return (
        <View style={styles.container}>
            <Text>Notifications here</Text>
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