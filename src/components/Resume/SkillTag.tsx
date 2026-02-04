import { Text, StyleSheet, View } from 'react-native';

type Props = {
    label: string;
};

export function SkillTag({ label }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1f2933',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 8,
    },
    text: {
        color: '#fff',
        fontSize: 13,
    },
});
