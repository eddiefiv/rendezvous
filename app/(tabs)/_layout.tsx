import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import { Button } from 'react-native';
import { ViewStyle } from 'react-native';
import { StyleProp } from 'react-native';
import { Animated } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions = {{tabBarActiveTintColor: 'blue'}}>
            <Tabs.Screen
            name="index"
            options = {{
                title: 'Home',
                headerTitleStyle: {
                    color: 'white'
                },
                headerRight: ProfileButton,
                headerShown: true,
                headerStyle: globalHeaderStyle,
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }}
            />
            <Tabs.Screen
            name="giving"
            options = {{
                title: 'Giving',
                headerShown: true,
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="gift" color={color} />,
            }}
            />
            <Tabs.Screen
            name="notifications"
            options = {{
                title: 'Notifications',
                tabBarBadge: 99,
                tabBarBadgeStyle: {
                    backgroundColor: 'green'
                },
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="bell" color={color} />,
            }}
            />
            <Tabs.Screen
            name="market"
            options = {{
                title: 'Market',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="pinterest" color={color} />,
            }}
            />
        </Tabs>
    )
}

const globalHeaderStyle: Animated.WithAnimatedValue<StyleProp<ViewStyle>> = {
    backgroundColor: 'green'
}

function ProfileButton() {
    return (
        <Button
            title="Learn More"
            color="skyblue"
            accessibilityLabel="Learn more about this purple button"
        />
    );
}