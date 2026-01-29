import { View, Text, StyleSheet, Pressable } from 'react-native';

interface JobCardProps {
    title: string;
    price: number;
    onPress: () => void;
}

export function JobCard({ title, price, onPress }: JobCardProps) {
    return (
        <Pressable onPress={onPress} style={styles.card}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>R$ {price}</Text>
            </View>

            <Text style={styles.action}>Ver detalhes</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1f1f1f',
        padding: 14,
        borderRadius: 10,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    price: {
        color: '#9ca3af',
        marginTop: 4,
    },
    action: {
        color: '#3b82f6',
        fontWeight: '500',
    },
});
