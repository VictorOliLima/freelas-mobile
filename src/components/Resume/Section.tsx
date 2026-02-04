import { Text, View, StyleSheet } from 'react-native';
import {ReactNode} from "react";

type Props = {
    title: string,
    children?: ReactNode
}

export default function ResumeSection({ title, children } : Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 20 },
    title: {
        color: '#38bdf8',
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '600',
    },
    content: {
        color: '#e5e7eb',
        fontSize: 14,
        lineHeight: 20,
    },
});
