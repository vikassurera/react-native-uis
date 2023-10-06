import React, {MutableRefObject} from 'react';
import {
    Button, InputAccessoryView,
    Keyboard,
    Pressable,
    SafeAreaView,
    TextInput,
    ViewStyle
} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {MaterialIcons, AntDesign} from '@expo/vector-icons';

interface VerificationCodeScreenProps {

}

enum Colors {
    primary = '#32357c',
    primaryLight = '#989ac1',
    light = '#f6f6fb',
    white = '#ffffff'
}

interface CircularIconProps {
    style?: ViewStyle
}

const CircularIcon: React.FC<React.PropsWithChildren<CircularIconProps>> = ({children, style}) => {
    return <View style={[styles.circularIcon, style]}>
        {children}
    </View>
}
// Verification Code Screen
export const VerificationCodeScreen = ({}: VerificationCodeScreenProps) => {

    // states
    const otpNumbers = 5;
    const inputRefs: MutableRefObject<TextInput | undefined>[] = Array(otpNumbers).fill(0).map(() => React.useRef<TextInput | undefined>(undefined));
    const [otp, setOtp] = React.useState<string[]>(Array(otpNumbers).fill(''));

    const onOtpInput = (value: string, index: number) => {
        const otpCopy = [...otp];
        otpCopy[index] = value;
        setOtp(otpCopy);
        if (value.length > 0 && index < otp.length - 1) {
            // focus next input
            if (inputRefs[index + 1].current?.focus) {
                inputRefs[index + 1].current?.focus!();
            }
        } else if (value.length === 0 && index > 0) {
            // focus previous input
            if (inputRefs[index - 1].current?.focus) {
                inputRefs[index - 1].current?.focus!();
            }
        } else if (value.length > 0 && index === otp.length - 1) {
            // blur and dismiss keyboard
            inputRefs[index].current?.blur!();
        }
    }

    return <>
        <View style={styles.container}>
            <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
                <View>
                    <View style={styles.nav}>
                        <CircularIcon style={{position: 'absolute'}}>
                            <MaterialIcons name="keyboard-arrow-left" size={24} color={Colors.primary}/>
                        </CircularIcon>

                        <Text style={{fontSize: 20, color: Colors.primary, textAlign: 'center'}}>Verification</Text>
                    </View>
                    <View style={{
                        height: 100,
                        width: 100,
                        backgroundColor: Colors.light,
                        borderRadius: 50,
                        alignSelf: 'center',
                        marginVertical: 40
                    }}>

                    </View>
                    <View>
                        <Text style={{fontSize: 28, textAlign: 'center', color: Colors.primary}}>Verification
                            Code</Text>
                        <Text style={{textAlign: 'center', color: Colors.primaryLight, fontSize: 16, marginTop: 20}}>
                            We have sent the code verification to your email address
                        </Text>
                        <View style={{
                            marginTop: 30,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            {
                                otp.map((value, index) => {
                                    return <View key={`otp_input_${index}`}
                                                 style={[styles.otpContainer, value.length > 0 && styles.otpContainerFilled]}>
                                        <TextInput ref={inputRefs[index]}
                                                   onChangeText={(value) => onOtpInput(value, index)}
                                                   style={styles.otpInput} value={value} maxLength={1}
                                                   inputAccessoryViewID={`otp_input`}
                                                   keyboardType='numeric'/>
                                    </View>
                                })
                            }
                        </View>
                        <View style={{
                            marginTop: 30,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{fontSize: 20, color: Colors.primaryLight, textAlign: 'center'}}>
                                vikassurera@gmail.com
                            </Text>
                            <CircularIcon style={{marginLeft: 10}}>
                                <AntDesign name="edit" size={20} color={Colors.primary}/>
                            </CircularIcon>


                        </View>

                    </View>
                </View>
                <View>
                    <Pressable style={[styles.buttonContainer, styles.outlineButtonContainer]}>
                        <Text style={[styles.buttonText, styles.outlineButtonText]}>
                            Send Again
                        </Text>
                    </Pressable>
                    <Pressable style={styles.buttonContainer}>
                        <Text style={{textAlign: 'center', fontSize: 18, color: Colors.white}}>
                            Submit
                        </Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </View>
        <InputAccessoryView nativeID={`otp_input`}>
            <View style={{alignItems: 'flex-end'}}>
                <Button onPress={() => Keyboard.dismiss()} title="Done"/>
            </View>
        </InputAccessoryView>
    </>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    nav: {
        justifyContent: 'center',
        marginTop: 20,
    },
    circularIcon: {
        borderColor: Colors.primaryLight,
        borderWidth: 1,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    otpContainer: {
        flex: 1,
        margin: 5,
        height: 60,
        width: 60,
        borderRadius: 15,
        borderColor: Colors.light,
        borderWidth: 1,
        backgroundColor: Colors.light,
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpContainerFilled: {borderColor: Colors.primary},
    otpInput: {height: 40, width: 40, fontSize: 24, color: Colors.primary, textAlign: 'center'},
    buttonContainer: {
        margin: 10,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 15,
        backgroundColor: Colors.primary
    },
    buttonText: {
        textAlign: 'center', fontSize: 18, color: Colors.white
    },
    outlineButtonContainer: {
        backgroundColor: 'transparent',
        borderColor: Colors.primaryLight
    },
    outlineButtonText: {
        color: Colors.primary
    }
});