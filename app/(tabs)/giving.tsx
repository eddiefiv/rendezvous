import Button from '@/components/button';
import Card from '@/components/card';
import Flare from '@/components/flare';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { router, useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import {Text, View, StyleSheet, ActivityIndicator, ScrollView, RefreshControl} from 'react-native'

const API_ENDPOINT = "https://honeybee-model-broadly.ngrok-free.app";

function GivingScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [charities, setCharities] = useState([]);

    const router = useRouter();

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await getCharities();
        setRefreshing(false);
    }, []);

    const getCharities = async () => {
        try {
            const response = await axios.get(API_ENDPOINT + "/charities", {headers: {"Content-Type": "application/json"}});
            const data = await response.data;

            let _posts = []
            for (let i = 0; i < data.data.length; i++) {
                let body = data.data[i];
                if (body.charity_type === "drive") {
                    _posts.push(DriveCard(body.charity_id, body.title, body.location, body.charity_deadline, body.description, body.deposit_address));
                } else {
                    _posts.push(DonationCard(body.charity_id, body.title, body.location, body.donation_goal, body.donation_current, body.description));
                }
            }
            setCharities([]);
            setCharities((post) => [...post, _posts]);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCharities();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                {charities}
            </ScrollView>
            )}
            <Button onPress={() => router.push('/createCharity')} style={{backgroundColor: '#b971d6', borderRadius: 25}}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', columnGap: 20}}>
                    <FontAwesome name="plus-square-o" size={20} />
                    <Text style={{fontWeight: '500', fontSize: 16}}>Create Charity</Text>
                </View>
            </Button>
        </View>
    );
}

function DriveCard(charity_id: Number, title: string, location: string, charity_deadline: string, description: string, deposit_address: string) {
    return (
        <Card onTouchEnd={() => router.push(`/charityPost`)} cardStyle={{marginLeft: 10, marginRight: 10, marginBottom: 10}} header={DriveCardHeader(title, location, charity_deadline, deposit_address)}>
            <View>
                <Text>{description}</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button style={{backgroundColor: 'transparent', paddingLeft: 25, paddingRight: 25}} onPress={() => {}}>
                        <AntDesign style={{paddingTop: 10, margin: 0}} size={20} name="like2"></AntDesign>
                    </Button>
                    <Button style={{backgroundColor: 'transparent', paddingLeft: 25, paddingRight: 25}} onPress={() => {}}>
                        <FontAwesome style={{paddingTop: 10, margin: 0}} size={20} name="comment-o"></FontAwesome>
                    </Button>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button style={{backgroundColor: 'transparent', paddingLeft: 25, paddingRight: 25}} onPress={() => {}}>
                        <Feather style={{paddingTop: 10, margin: 0}} size={20} name="eye"></Feather>
                    </Button>
                    <Button style={{backgroundColor: 'transparent', paddingLeft: 25, paddingRight: 25}} onPress={() => {}}>
                        <Feather style={{paddingTop: 10, margin: 0}} size={20} name="share-2"></Feather>
                    </Button>
                </View>
            </View>
        </Card>
    )
}

function DonationCard(charity_id: Number, title: string, location: string, dontaion_goal: Number, donation_curret: Number, description: string) {
    return (
        <Card cardStyle={{marginLeft: 10, marginRight: 10, marginBottom: 10}} header={DonationCardHeader(title, location, dontaion_goal, donation_curret)}>
            <View>
                <Text>{description}</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button style={{backgroundColor: 'transparent', paddingLeft: 25, paddingRight: 25}} onPress={() => {}}>
                        <AntDesign style={{paddingTop: 10, margin: 0}} size={20} name="like2"></AntDesign>
                    </Button>
                    <Button style={{backgroundColor: 'transparent', paddingLeft: 25, paddingRight: 25}} onPress={() => {}}>
                        <FontAwesome style={{paddingTop: 10, margin: 0}} size={20} name="comment-o"></FontAwesome>
                    </Button>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button style={{backgroundColor: 'transparent', paddingLeft: 25, paddingRight: 25}} onPress={() => {}}>
                        <Feather style={{paddingTop: 10, margin: 0}} size={20} name="eye"></Feather>
                    </Button>
                    <Button style={{backgroundColor: 'transparent', paddingLeft: 25, paddingRight: 25}} onPress={() => {}}>
                        <Feather style={{paddingTop: 10, margin: 0}} size={20} name="share-2"></Feather>
                    </Button>
                </View>
            </View>
        </Card>
    )
}

function DriveCardHeader(title: string, location: string, charity_deadline: string, deposit_address: string) {
    return (
        <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'light', fontSize: 12}}>{location}</Text>
                </View>
                <Text>Collecting until: {charity_deadline}</Text>
                <Text>Drop Off Address: {deposit_address}</Text>
            </View>
        </View>
    )
}

function DonationCardHeader(title: string, location: string, dontaion_goal: Number, donation_curret: Number) {
    return (
        <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'light', fontSize: 12}}>{location}</Text>
                </View>
                <Text>Goal: ${donation_curret.toString()}/${dontaion_goal.toString()}</Text>
            </View>
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

export default GivingScreen;