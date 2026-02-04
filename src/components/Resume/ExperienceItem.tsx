import { View, Text, StyleSheet } from 'react-native';

type Props = {
    role: string;
    company: string;
    period: string;
};

export function ExperienceItem({ role, company, period }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.role}>{role}</Text>
            <Text style={styles.company}>{company}</Text>
            <Text style={styles.period}>{period}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
    },
    role: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    company: {
        color: '#aaa',
        fontSize: 14,
        marginTop: 4,
    },
    period: {
        color: '#666',
        fontSize: 12,
        marginTop: 8,
    },
});
