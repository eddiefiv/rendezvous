import React, { useCallback, useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import GlobalStyles from '@/components/styles';
import Button from '@/components/button';
import { Entypo } from '@expo/vector-icons';

const API_ENDPOINT = "https://honeybee-model-broadly.ngrok-free.app";

export default function CharityPost() {
    const [region, setRegion] = useState({
        latitude: 35.90922859993376, // Default latitude
        longitude: -79.0469519436701, // Default longitude
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
    });

    // Function to update the region
    const updateRegion = (newRegion) => {
        setRegion(newRegion);
    };

    return (
        <View style={{display: 'flex', flexDirection: 'column'}}>
            <View style={{height: 100, backgroundColor: GlobalStyles.foreground.backgroundColor, display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                <Button style={{alignSelf: 'auto'}} onPress={() => router.back()}>
                    <Entypo name="chevron-left" size={20} color={GlobalStyles.primary.backgroundColor} />
                </Button>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: GlobalStyles.primary.backgroundColor, paddingBottom: 10}}>Donation Drive At UNC!</Text>
            </View>
            <ScrollView style={{height: '100%'}}>
                <View style={{display: 'flex', flexDirection: 'column', margin: 30}}>
                    <View style={{display: 'flex', flexDirection: 'column', paddingBottom: 50}}>
                        <Text style={{fontWeight: '500'}}>We are looking for the following to donate to Western NC:</Text>
                        <Text style={{fontWeight: '500'}}>- Paper Towels</Text>
                        <Text style={{fontWeight: '500'}}>- Baby Formula</Text>
                        <Text style={{fontWeight: '500'}}>- Diapers</Text>
                        <Text style={{fontWeight: '500'}}>- Trash Bags</Text>
                        <Text style={{fontWeight: '500'}}>- Non-Perishable Foods</Text>
                        <Text style={{fontWeight: '500'}}></Text>
                        <Text style={{fontWeight: '500'}}>We will be driving these items up on 12/01, so please drop your items off by then. Thank you so much!!</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        <Text style={{fontWeight: 'bold'}}>Donation Location</Text>
                        <Text>  Fetzer Gym</Text>
                        <Text>  University of Chapel Hill, North Carolina</Text>
                        <MapView style={styles.map} region={region} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 5,
    },
    });