import Card from '@/components/card';
import {Link} from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

import Button from '@/components/button';
import Flare from '@/components/flare';

import GlobalStyles from '@/components/styles';

function HomeScreen() {
    return (
        <View style={styles.container}>
            {HomeCard(
                "WEATHER UPDATES (pinned)",
                "Raleigh",
                "3 hours ago",
                "News",
                "Flash flood warning in the area. Please seek higher ground for shelter.")
            }
        </View>
    );
}

function HomeCard(title: string, location: string, timeAgo: string, flare: string, description: string) {
    return (
        <Card header={HomeCardHeader(title, location, timeAgo, flare)}>
            <View>
                <Text>{description}</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Button title="Like" color="black"></Button>
                <Button title="Comment"></Button>
            </View>
        </Card>
    )
}

function HomeCardHeader(title: string, location: string, timeAgo: string, flare: string) {
    return (
        <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'light', fontSize: 12}}>{location}</Text>
                    <Text style={{fontWeight: 'light', fontSize: 12}}> | </Text>
                    <Text style={{fontWeight: 'light', fontSize: 12}}>{timeAgo}</Text>
                </View>
            </View>
            <Flare color="red" text="News"></Flare>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
});

export default HomeScreen;