import { ScrollView, StyleSheet, View } from 'react-native';
import { resumeMock } from '@/src/mocks/resumeMock';
import ResumeHeader from '@/src/components/Resume/Header';
import ResumeSection from '@/src/components/Resume/Section';
import {SkillTag} from "@/src/components/Resume/SkillTag";
import {EducationItem} from "@/src/components/Resume/EducationItem";

export default function Resume() {
    return (
        <ScrollView style={styles.container}>
            <ResumeHeader
                name={resumeMock.name}
                role={resumeMock.role}
                location={resumeMock.location}
            />

            <ResumeSection title="Resumo profissonal">
                {resumeMock.summary}
            </ResumeSection>

            <ResumeSection title="Experiência">
                {resumeMock.experience.map((item, index) => (
                    <View key={index}>
                        {/* vamos componentizar já já */}
                    </View>
                ))}
            </ResumeSection>

            <ResumeSection title="Habilidades">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {resumeMock.skills.map((skill) => (
                        <SkillTag key={skill} label={skill} />
                    ))}
                </ScrollView>
            </ResumeSection>

            <ResumeSection title="Formação">
                {resumeMock.education.map((edu, index) => (
                    <EducationItem
                        key={index}
                        course={edu.course}
                        institution={edu.institution}
                        period={edu.period}
                    />
                ))}
            </ResumeSection>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#090b10',
        padding: 16,
    },
});
