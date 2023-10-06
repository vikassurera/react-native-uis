import React from 'react';
import {Image, Pressable, SafeAreaView, TextInput} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {Design2Colors, Design2FontSizes, Design2Images} from "./Design2Constants";
import {MaterialIcons} from "@expo/vector-icons";

interface Design2GetStartedScreenProps {
    navigation: any
}

export const Design2LoginScreen = (props: Design2GetStartedScreenProps) => {

    return <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
            <View>
                <Pressable onPress={props.navigation.goBack}>
                    <MaterialIcons name="keyboard-arrow-left" size={30} color={Design2Colors.black}/>
                </Pressable>
                <Image style={styles.heroImage} source={Design2Images.relax}/>
            </View>
            <View style={{marginTop: 30}}>
                <Text style={styles.title}>
                    Sign Up
                </Text>
                <TextInput placeholder={'Enter your phone'} keyboardType={'email-address'} style={styles.inputText}/>
                <TextInput placeholder={'Enter your password'} keyboardType={'visible-password'}
                           style={styles.inputText}/>
                <View style={styles.divider}>
                    <Text style={styles.dividerText}>
                        or
                    </Text>
                </View>
                <Pressable style={styles.button}>
                    <Image style={styles.buttonImage} source={Design2Images.google}/>
                    <Text style={styles.buttonLabel}>
                        Register with Google
                    </Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Image style={styles.buttonImage} source={Design2Images.apple}/>
                    <Text style={styles.buttonLabel}>
                        Register with Apple
                    </Text>
                </Pressable>
                <Pressable style={styles.secondaryButton}>
                    <Text style={styles.secondaryButtonLabel}>
                        Continue
                    </Text>
                </Pressable>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.message}>Already have account?</Text>
                    <Pressable style={styles.textButton}>
                        <Text style={styles.textButtonLabel}>Login</Text>
                    </Pressable>
                </View>

            </View>
        </SafeAreaView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Design2Colors.white,
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    safeArea: {
        flex: 1,
        // justifyContent: 'space-between',
    },
    heroImage: {
        height: 180,
        width: 'auto',
        objectFit: 'contain',
    },
    title: {
        fontSize: Design2FontSizes.title,
        marginBottom: 10,
        color: Design2Colors.black,
    },
    inputText: {
        borderColor: Design2Colors.grey,
        borderWidth: 1,
        borderRadius: 10,

        paddingHorizontal: 10,
        paddingVertical: 15,
        fontSize: Design2FontSizes.medium,
        marginVertical: 10,
    },
    divider: {
        marginVertical: 20,
        height: 1,
        backgroundColor: Design2Colors.grey,
    },
    dividerText: {
        position: 'absolute',
        top: -10,
        left: '50%',
        transform: [{translateX: -10}],
        backgroundColor: Design2Colors.white,
        paddingHorizontal: 10,
        fontSize: Design2FontSizes.medium,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        borderColor: Design2Colors.grey,
        borderWidth: 1,
        borderRadius: 10,

        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
    },
    buttonImage: {
        height: 30,
        width: 30,
        objectFit: 'contain',
        marginRight: 10,
    },
    buttonLabel: {
        fontSize: Design2FontSizes.medium,
        color: Design2Colors.black,
    },
    secondaryButton: {
        borderRadius: 10,

        paddingHorizontal: 10,
        paddingVertical: 15,
        marginVertical: 15,
        backgroundColor: Design2Colors.secondary
    },
    secondaryButtonLabel: {
        fontSize: Design2FontSizes.medium,
        textAlign: 'center',
        color: Design2Colors.white,
    },
    message: {
        fontSize: Design2FontSizes.medium,
        textAlign: 'center',
        color: Design2Colors.black,
    },
    textButton: {
        marginLeft: 10,
    },
    textButtonLabel: {
        fontSize: Design2FontSizes.medium,
        textAlign: 'center',
        color: Design2Colors.secondary,
    },

});