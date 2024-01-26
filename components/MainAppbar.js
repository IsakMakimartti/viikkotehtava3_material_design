import React from "react";
import { Appbar } from 'react-native-paper';
import StyleSheet from '../Styles'

export default function MainAppbar(props) {
    return (
        <Appbar.Header
            mode="center-aligned"
            elevated={true}
        >
            <Appbar.Content title="Login" />
        </Appbar.Header>
    )
}