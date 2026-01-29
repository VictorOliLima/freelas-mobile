import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

type UserType = 'FREELANCER' | 'CONTRATANTE';

export default function Profile() {
    const [userType, setUserType] = useState<UserType>('FREELANCER');

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://i.pravatar.cc/150' }}
                    style={styles.avatar}
                />

                <Text style={styles.name}>Victor Lima</Text>
                <Text style={styles.type}>
                    {userType === 'FREELANCER' ? 'Freelancer' : 'Contratante'}
                </Text>

                <Text style={styles.bio}>
                    Desenvolvedor Front-end focado em React e React Native.
                </Text>
            </View>

            {/* Info Box */}
            <View style={styles.infoBox}>
                <View style={styles.infoItem}>
                    <Text style={styles.label}>Localização</Text>
                    <Text style={styles.value}>Londrina - PR</Text>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.label}>Contato</Text>
                    <Text style={styles.value}>Disponível no chat</Text>
                </View>
            </View>

            <View style={styles.stats}>
                {userType === 'FREELANCER' ? (
                    <>
                        <Stat title="Candidaturas" value="12" />
                        <Stat title="Contratos" value="3" />
                        <Stat title="Avaliação" value="4.8 ★" />
                    </>
                ) : (
                    <>
                        <Stat title="Vagas Criadas" value="8" />
                        <Stat title="Candidatos" value="34" />
                        <Stat title="Contratações" value="5" />
                    </>
                )}
            </View>

            {/* Actions */}
            <View style={styles.actions}>
                {userType === 'FREELANCER' ? (
                    <>
                        <Action text="Editar Perfil" />
                        <Action text="Meu Currículo" />
                        <Action text="Minhas Candidaturas" />
                    </>
                ) : (
                    <>
                        <Action text="Criar Nova Vaga" />
                        <Action text="Minhas Vagas" />
                        <Action text="Mensagens" />
                    </>
                )}
            </View>

            <TouchableOpacity
                style={styles.switchButton}
                onPress={() =>
                    setUserType(
                        userType === 'FREELANCER' ? 'CONTRATANTE' : 'FREELANCER'
                    )
                }
            >
                <Text style={styles.switchText}>
                    Trocar para {userType === 'FREELANCER' ? 'Contratante' : 'Freelancer'}
                </Text>
            </TouchableOpacity>

        </View>
    );
}

function Stat({ title, value }: { title: string; value: string }) {
    return (
        <View style={styles.stat}>
            <Text style={styles.statValue}>{value}</Text>
            <Text style={styles.statTitle}>{title}</Text>
        </View>
    );
}

function Action({ text }: { text: string }) {
    return (
        <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 24,
    },

    header: {
        alignItems: 'center',
        marginBottom: 24,
    },

    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        marginBottom: 12,
    },

    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    type: {
        color: '#4f9cff',
        fontSize: 14,
        marginTop: 2,
    },

    bio: {
        color: '#aaa',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 8,
    },

    infoBox: {
        backgroundColor: '#111',
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
        gap: 12,
    },

    infoItem: {},

    label: {
        color: '#888',
        fontSize: 12,
    },

    value: {
        color: '#fff',
        fontSize: 15,
    },

    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },

    stat: {
        alignItems: 'center',
        flex: 1,
    },

    statValue: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    statTitle: {
        color: '#888',
        fontSize: 12,
        marginTop: 4,
    },

    actions: {
        gap: 16,
    },

    action: {
        paddingVertical: 14,
        borderRadius: 10,
        backgroundColor: '#111',
    },

    actionText: {
        color: '#4f9cff',
        fontSize: 16,
        textAlign: 'center',
    },

    switchButton: {
        marginTop: 32,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#333',
    },

    switchText: {
        color: '#aaa',
        textAlign: 'center',
        fontSize: 12,
    },
});
