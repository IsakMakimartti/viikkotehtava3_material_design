import React, { useState } from "react";
import MainAppbar from "../components/MainAppbar";
import { View } from "react-native";
import StyleSheet from '../Styles'
import { Button, TextInput } from "react-native-paper";

export default function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" })
    const [showError, setShowError] = useState(false)

    const validateAndSubmit = () => {
        setShowError(true)
        if (formData.username.length > 0 && formData.password.length > 8) {
            setFormData({ username: "", password: "" })
            setShowError(false)
        }
    }

    return (
        <>
            <MainAppbar title="Login" />
            <View style={StyleSheet.container}>
                <TextInput
                    label="Username"
                    style={StyleSheet.input_field}
                    value={formData.username}
                    onChangeText={text => setFormData({ ...formData, username: text })}
                    error={formData.username.length === 0 && showError}
                />
                <TextInput
                    label="Password"
                    style={StyleSheet.input_field}
                    value={formData.password}
                    keyboardType="visible-password"
                    onChangeText={text => setFormData({ ...formData, password: text })}
                    error={formData.password.length < 8 && showError}
                />
                <Button mode="contained" style={StyleSheet.button} onPress={validateAndSubmit}>
                    Submit
                </Button>
            </View>
        </>
    )
}