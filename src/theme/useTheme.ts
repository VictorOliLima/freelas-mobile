import {useColorScheme} from "react-native";
import {theme} from "@/src/theme/theme";


export default function useTheme() {
    const schema = useColorScheme();
    return theme[schema === 'dark' ? 'dark' : 'light'];
}