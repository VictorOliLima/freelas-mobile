import { View, Text, StyleSheet } from 'react-native';

type Props = {
    course: string;
    institution: string;
    period: string;
};

export function EducationItem({ course, institution, period }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.course}>{course}</Text>
            <Text style={styles.institution}>{institution}</Text>
            <Text style={styles.period}>{period}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#222',

    },
    course: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
    },
    institution: {
        color: '#aaa',
        fontSize: 13,
        marginTop: 4,
    },
    period: {
        color: '#666',
        fontSize: 12,
        marginTop: 4,
    },
});
