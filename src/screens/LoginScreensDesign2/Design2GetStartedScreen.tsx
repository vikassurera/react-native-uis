import React from 'react';
import {Image, Pressable, SafeAreaView} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {Design2Colors, Design2FontSizes, Design2Images} from "./Design2Constants";

interface Design2GetStartedScreenProps {
    navigation: any
}

export const Design2GetStartedScreen = (props: Design2GetStartedScreenProps) => {
    const goToLogin = () => {
        props.navigation.push('Design2Login');
    }

    return <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.heroSection}>
                <Image style={styles.heroImage} source={Design2Images.explore}/>
                <Text style={styles.title}>
                    Start your journey with us
                </Text>
                <Text style={styles.message}>
                    SwiftRecruit began like many other online hiring sites, where we connected businesses with needed
                    talent
                </Text>
            </View>
            <Pressable style={styles.button} onPress={goToLogin}>
                <Text style={styles.buttonLabel}>
                    Get started for free
                </Text>
            </Pressable>
        </SafeAreaView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Design2Colors.primary,
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    safeArea: {
        flex: 1,
        justifyContent: 'space-between',
    },
    heroSection: {
        marginTop: 100,
        flex: 1,
        // justifyContent: 'center',
    },
    heroImage: {
        height: 120,
        width: 'auto',
        objectFit: 'contain',
    },
    title: {
        marginTop: 20,
        fontSize: Design2FontSizes.title,
        color: Design2Colors.white,
        textAlign: 'center',
    },
    message: {
        marginTop: 20,
        color: Design2Colors.lightWhite,
        textAlign: 'center',
        fontSize: Design2FontSizes.medium,
        lineHeight: Design2FontSizes.medium * 1.5,
    },
    button: {
        backgroundColor: Design2Colors.white,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonLabel: {
        color: Design2Colors.primary,
        fontSize: Design2FontSizes.large,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: '500'
    }

});