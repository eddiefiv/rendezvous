import GlobalStyles from '@/components/styles';
import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import Button from '@/components/button';
import { Text, View } from 'react-native';
import { ViewStyle } from 'react-native';
import { StyleProp } from 'react-native';
import { Animated } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions = {{tabBarActiveTintColor: 'blue', tabBarStyle: {borderTopWidth: 0, elevation: 0, shadowOpacity: 0, backgroundColor: 'transparent', borderTopColor: 'transparent'}}}>
            <Tabs.Screen
            name="giving"
            options = {{
                title: 'Giving',
                headerTitleStyle: {
                    color: 'white'
                },
                tabBarShowLabel: false,
                header: (() => {
                    return (
                        <View style={{height: 100, backgroundColor: GlobalStyles.foreground.backgroundColor, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: GlobalStyles.primary.backgroundColor, paddingBottom: 10}}>Giving</Text>
                        </View>
                    )
                }),
                headerShown: true,
                headerStyle: globalHeaderStyle,
                tabBarStyle: {
                    backgroundColor: GlobalStyles.foreground.backgroundColor,
                    borderTopStartRadius: 20,
                    borderTopEndRadius: 20,
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
                header: (() => {
                    return (
                        <View style={{height: 100, backgroundColor: GlobalStyles.foreground.backgroundColor, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: GlobalStyles.primary.backgroundColor, paddingBottom: 10}}>Market</Text>
                        </View>
                    )
                }),
                headerShown: true,
                headerStyle: globalHeaderStyle,
                tabBarStyle: {
                    backgroundColor: GlobalStyles.foreground.backgroundColor,
                    borderTopStartRadius: 20,
                    borderTopEndRadius: 20,
                },
                tabBarInactiveTintColor: GlobalStyles.unselectedTab.backgroundColor,
                tabBarActiveTintColor: GlobalStyles.selectedTab.backgroundColor,
                tabBarIcon: ({ focused, color }) => {
                    if (focused) {
                        return (<MaterialCommunityIcons size={28} name="shopping" color={color} />)
                    } return (<MaterialCommunityIcons size={28} name="shopping-outline" color={color} />)
                },
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
                header: (() => {
                    return (
                        <View style={{height: 100, backgroundColor: GlobalStyles.foreground.backgroundColor, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: GlobalStyles.primary.backgroundColor, paddingBottom: 10}}>Home</Text>
                        </View>
                    )
                }),
                headerShown: true,
                headerStyle: globalHeaderStyle,
                tabBarStyle: {
                    backgroundColor: GlobalStyles.foreground.backgroundColor,
                    borderTopStartRadius: 20,
                    borderTopEndRadius: 20,
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
                header: (() => {
                    return (
                        <View style={{height: 100, backgroundColor: GlobalStyles.foreground.backgroundColor, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: GlobalStyles.primary.backgroundColor, paddingBottom: 10}}>Notifications</Text>
                        </View>
                    )
                }),
                headerShown: true,
                headerStyle: globalHeaderStyle,
                tabBarStyle: {
                    backgroundColor: GlobalStyles.foreground.backgroundColor,
                    borderTopStartRadius: 20,
                    borderTopEndRadius: 20,
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
                tabBarShowLabel: false,header: (() => {
                    return (
                        <View style={{height: 100, backgroundColor: GlobalStyles.foreground.backgroundColor, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: GlobalStyles.primary.backgroundColor, paddingBottom: 10}}>Menu</Text>
                        </View>
                    )
                }),
                headerShown: true,
                headerStyle: globalHeaderStyle,
                tabBarStyle: {
                    backgroundColor: GlobalStyles.foreground.backgroundColor,
                    borderTopStartRadius: 20,
                    borderTopEndRadius: 20,
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