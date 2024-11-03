import Button from "@/components/button";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import GlobalStyles from "@/components/styles";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const flareData = [
    {label: "News", value: "News"},
    {label: "Question", value: "Questions"},
    {label: "Favor", value: "Favor"},
    {label: "Advice", value: "Advice"}
];

const API_ENDPOINT = "https://honeybee-model-broadly.ngrok-free.app";

function CreatePost() {
    const router = useRouter();

    const [title, onTitleChanged] = useState('');
    const [desc, onDescChanged] = useState('');
    const [flare, onFlareChanged] = useState('');

    const [titleFocused, setTitleFocused] = useState(false);
    const [descFocused, setDescFocused] = useState(false);
    const [flareFocused, setFlareFocused] = useState(false);

    const [isPublising, setIsPublising] = useState(false);

    const renderLabel = () => {
        if (flare || flareFocused) {
            return (
                <Text style={[LabelStyle.container, flareFocused && {color: 'blue'}]}>
                    Dropdown Label
                </Text>
            );
        }
        return null;
    }

    const publishPost = async () => {
        try {
            await axios.post(API_ENDPOINT + "/posts", {title: title, description: desc, author: "John Doe", flare: flare});

            setIsPublising(false);
            router.back();
        } catch (err) {
            console.error(err);
            setIsPublising(false);
            return null;
        }
    }

    return (
        <View style={{display: 'flex', flexDirection: 'column'}}>
            <View style={{height: 100, backgroundColor: GlobalStyles.foreground.backgroundColor, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: GlobalStyles.primary.backgroundColor, paddingBottom: 10}}>Create A Post</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', margin: 30}}>
                <View style={{display: 'flex', flexDirection: 'column', paddingBottom: 50}}>
                    <Text style={{fontWeight: '300'}}>Post Title</Text>
                    <TextInput editable={!isPublising} placeholder="Informative Post Title" style={titleFocused ? TextInputStyleFocused.container : TextInputStyle.container} onFocus={() => setTitleFocused(true)} onBlur={() => setTitleFocused(false)} onChangeText={text => onTitleChanged(text)}></TextInput>
                </View>
                <View style={{display: 'flex', flexDirection: 'column', paddingBottom: 50}}>
                    <Text style={{fontWeight: '300'}}>Post Description</Text>
                    <TextInput editable={!isPublising} placeholder="Informative Post Description" style={descFocused ? TextInputStyleFocused.container : TextInputStyle.container} onFocus={() => setDescFocused(true)} onBlur={() => setDescFocused(false)} onChangeText={text => onDescChanged(text)}></TextInput>
                </View>
                <View style={{display: 'flex', flexDirection: 'column', paddingBottom: 50}}>
                    <Text style={{fontWeight: '300'}}>Post Flare</Text>
                    {renderLabel()}
                    <Dropdown disable={isPublising} style={[DropdownStyle.container, flareFocused && {borderColor: "blue"}]} placeholderStyle={{fontSize: 16}} selectedTextStyle={{fontSize: 16}} iconStyle={{width: 20, height: 20}} inputSearchStyle={{height: 40, fontSize: 16}} data={flareData} maxHeight={300} labelField="label" valueField="value" placeholder={!flareFocused ? 'Select flare' : '...'} value={flare} onChange={item => {onFlareChanged(item.value); setFlareFocused(false)}} onFocus={() => setFlareFocused(true)} onBlur={() => setFlareFocused(false)} renderLeftIcon={() => (<AntDesign style={{marginRight: 5}} color={flareFocused ? 'blue' : 'black'} name="Safety" size={20} />)} />
                </View>
            </View>
            <Button onPress={async () => {setIsPublising(true); await publishPost(); setIsPublising(false);}} style={{backgroundColor: GlobalStyles.foreground.backgroundColor, marginLeft: 100, marginRight: 100, alignContent: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                <View>
                    <Text disabled={isPublising} style={{color: GlobalStyles.primary.backgroundColor}}>
                        {isPublising ? "Publish Post" : "Publishing..."}
                    </Text>
                </View>
            </Button>
        </View>
    )
}

const TextInputStyle = StyleSheet.create({
    container: {
        height: 40,
        marginLeft: 0,
        borderRadius: 0,
        borderBottomWidth: 1
    }
});

const TextInputStyleFocused = StyleSheet.create({
    container: {
        height: 40,
        marginLeft: 0,
        borderRadius: 2,
        borderBottomWidth: 2
    }
});

const LabelStyle = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "white",
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    }
});

const DropdownStyle = StyleSheet.create({
    container: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    }
});

export default CreatePost;