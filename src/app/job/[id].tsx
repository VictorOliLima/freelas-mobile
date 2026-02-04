import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Job } from '@/src/types/Job';
import { jobService } from '@/src/service/job.service';
import { Linking } from 'react-native';


export default function JobDetailsScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [job, setJob] = useState<Job | null>(null);

    useEffect(() => {
        if (id) {
            jobService.findById(id).then(setJob);
        }
    }, [id]);

    if (!job) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{job.title}</Text>
            <Text style={styles.price}>R$ {job.price}</Text>

            <Text style={styles.tag}>
                {job.isRemote ? 'Remoto' : 'Presencial'}
            </Text>

            <Text style={styles.description}>{job.description}</Text>
            {job.contractorPhone && (
                <Pressable
                    style={styles.button}
                    onPress={() =>
                        Linking.openURL(`https://wa.me/55${job.contractorPhone}`)
                    }
                >
                    <Text style={styles.buttonText}>Entrar em contato</Text>
                </Pressable>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#0f0f0f',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    price: {
        fontSize: 18,
        color: '#4ade80',
        marginVertical: 8,
    },
    tag: {
        alignSelf: 'flex-start',
        backgroundColor: '#1f2933',
        color: '#93c5fd',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#e5e7eb',
        marginBottom: 6,
    },
    description: {
        fontSize: 14,
        color: '#9ca3af',
        lineHeight: 20,
    },
    button: {
        marginTop: 24,
        backgroundColor: '#2563eb',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
});
