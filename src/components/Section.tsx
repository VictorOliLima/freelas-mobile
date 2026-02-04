import {View, Text} from "react-native";

export function Section({ title, children }: any) {
    return (
        <View style={{ marginBottom: 24 }}>
            <Text style={{ color: '#fff', fontSize: 16, marginBottom: 8 }}>
                {title}
            </Text>
            {children}
        </View>
    );
}
