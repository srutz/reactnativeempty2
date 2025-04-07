import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Home</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
