import GlobalStyles from '@/components/styles';
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons';
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
            name="giving"
            options = {{
                title: 'Giving',
                headerTitleStyle: {
                    color: 'white'
                },
                tabBarShowLabel: false,
                headerRight: ProfileButton,
                headerShown: true,
                headerStyle: globalHeaderStyle,
                tabBarStyle: {
                    backgroundColor: GlobalStyles.foreground.backgroundColor,
                },
                tabBarInactiveTintColor: GlobalStyles.unselectedTab.backgroundColor,
                tabBarActiveTintColor: GlobalStyles.selectedTab.backgroundColor,
                tabBarIcon: ({ focused, color }) => {
                    if (focused) return (<Ionicons size={28} name="gift" color={color} />)
                    return (<Feather size={28} name="gift" color={color} />)
                },
            }}
            />
            <Tabs.Screen
            name="market"
            options = {{
                title: 'Market',
                headerTitleStyle: {
                    color: 'white'
                },
                tabBarShowLabel: false,
                headerRight: ProfileButton,
                headerShown: true,
                headerStyle: globalHeaderStyle,
                tabBarStyle: {
                    backgroundColor: GlobalStyles.foreground.backgroundColor,
                },
                tabBarInactiveTintColor: GlobalStyles.unselectedTab.backgroundColor,
                tabBarActiveTintColor: GlobalStyles.selectedTab.backgroundColor,
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="pinterest" color={color} />,
            }}
            />
            <Tabs.Screen
            name="index"
            options = {{
                title: 'Home',
                headerTitleStyle: {
                    color: 'white'
                },
                tabBarShowLabel: false,
                headerRight: ProfileButton,
                headerShown: true,
                headerStyle: globalHeaderStyle,
                tabBarStyle: {
                    backgroundColor: GlobalStyles.foreground.backgroundColor,
                },
                tabBarInactiveTintColor: GlobalStyles.unselectedTab.backgroundColor,
                tabBarActiveTintColor: GlobalStyles.selectedTab.backgroundColor,
                tabBarIcon: ({ focused, color }) => {
                    if (focused) {
                        return (<Entypo size={28} name="home" color={color} />)
                    } return (<AntDesign size={28} name="home" color={color} />)
                },
            }}
            />
            <Tabs.Screen
            name="notifications"
            options = {{
                title: 'Notifications',
                tabBarBadge: 99,
                tabBarBadgeStyle: {
                    backgroundColor: 'red',
                    fontSize: 12
                },
                headerTitleStyle: {
                    color: 'white'
                },
                tabBarShowLabel: false,
                headerRight: ProfileButton,
                headerShown: true,
                headerStyle: globalHeaderStyle,
                tabBarStyle: {
                    backgroundColor: GlobalStyles.foreground.backgroundColor,
                },
                tabBarInactiveTintColor: GlobalStyles.unselectedTab.backgroundColor,
                tabBarActiveTintColor: GlobalStyles.selectedTab.backgroundColor,
                tabBarIcon: ({ focused, color }) => {
                    if (focused) return (<Ionicons size={28} name="notifications" color={color} />)
                    return (<Ionicons size={28} name="notifications-outline" color={color} />)
            },
            }}
            />
            <Tabs.Screen
            name="menu"
            options = {{
                title: 'Menu',
                headerTitleStyle: {
                    color: 'white'
                },
                tabBarShowLabel: false,
                headerRight: ProfileButton,
                headerShown: true,
                headerStyle: globalHeaderStyle,
                tabBarStyle: {
                    backgroundColor: GlobalStyles.foreground.backgroundColor,
                },
                tabBarInactiveTintColor: GlobalStyles.unselectedTab.backgroundColor,
                tabBarActiveTintColor: GlobalStyles.selectedTab.backgroundColor,
                tabBarIcon: ({ color }) => { return (<Feather size={28} name="menu" color={color} />)
                },
            }}
            />
        </Tabs>
    )
}

const globalHeaderStyle: Animated.WithAnimatedValue<StyleProp<ViewStyle>> = {
    backgroundColor: GlobalStyles.foreground.backgroundColor
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