import Card from '@/components/card';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';

import { AntDesign, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Button from '@/components/button';
import Flare from '@/components/flare';

import axios from 'axios';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { router, useRouter } from 'expo-router';

const API_ENDPOINT = "https://honeybee-model-broadly.ngrok-free.app";

function HomeScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    const router = useRouter();

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await getPosts();
        setRefreshing(false);
    }, []);

    const getPosts = async () => {
        try {
            const response = await axios.get(API_ENDPOINT + "/posts", {headers: {"Content-Type": "application/json"}});
            const data = await response.data;

            let _posts = []
            for (let i = 0; i < data.data.length; i++) {
                _posts.push(HomeCard(data.data[i].title, data.data[i].location, data.data[i].creation_date, data.data[i].flare, data.data[i].description));
            }
            setPosts([]);
            setPosts((post) => [...post, _posts]);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                {posts}
            </ScrollView>
            )}
            <Button onPress={() => router.push('/createPost')} style={{backgroundColor: '#b971d6', borderRadius: 25}}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', columnGap: 20}}>
                    <FontAwesome name="plus-square-o" size={20} />
                    <Text style={{fontWeight: '500', fontSize: 16}}>Create Post</Text>
                </View>
            </Button>
        </View>
    );
}

function HomeCard(title: string, location: string, timeAgo: string, flare: string, description: string) {
    return (
        <Card cardStyle={{marginLeft: 10, marginRight: 10, marginBottom: 10}} header={HomeCardHeader(title, location, timeAgo, flare)}>
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

function HomeCardHeader(title: string, location: string, timeAgo: string, flare: string) {
    const flareColor = () => {
        switch (flare) {
            case "News":
                return "#f34444";
            case "Questions":
                return "#fb80f4";
            case "Favor":
                return "#60eea4";
            case "Advice":
                return "#fdef79";
        }
    }

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
            <Flare color={flareColor()} text={flare}></Flare>
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