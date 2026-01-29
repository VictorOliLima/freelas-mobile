import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {useRouter} from "expo-router";
import {JobCard} from "@/src/components/JobCard";

const mockJobs = [
    { id: '1', title: 'Designer UI', price: 500 },
    { id: '2', title: 'Dev React', price: 800 },
];

export default function HomeScreen() {

    const router = useRouter();

    return (
        <View style={{ padding: 16 }}>
            <FlatList
                data={mockJobs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <JobCard
                        title={item.title}
                        price={item.price}
                        onPress={() => router.push(`/job/${item.id}`)}
                    />
                )}
            />
        </View>
    );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
    },

    containerVacancies: {
        padding: 12,
        marginBottom: 8,
        backgroundColor: '#222',
        borderRadius: 10
    },

    buttonDetails: {
        height: 30,
        width: 80,
        marginLeft: 270,
        bottom: 15,
        backgroundColor: '#1986f4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    textButton: {
        color: '#fff',
        fontSize: 10,
    }
})