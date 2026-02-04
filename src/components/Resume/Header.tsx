import { Text, View, StyleSheet } from 'react-native';

type Props = {
    name: string,
    role: string,
    location: string
}

export default function ResumeHeader({ name, role, location } : Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.role}>{role}</Text>
            <Text style={styles.location}>{location}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
        alignItems: 'center',
        marginTop: 10,
    },
    name: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
    role: { fontSize: 16, color: '#38bdf8' },
    location: { fontSize: 14, color: '#94a3b8' },
});
