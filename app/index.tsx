import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const LandingPage = () => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to SkyCast!</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/signin')}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/signup')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/countries')}>
                <Text style={styles.buttonText}>View Weather in Different Countries</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#3a7bd5",
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: "white",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginVertical: 10,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default LandingPage;