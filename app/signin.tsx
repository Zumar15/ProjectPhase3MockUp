import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import { Formik } from "formik";
  import * as Yup from "yup";
  import { useRouter } from "expo-router";
  
  // Validation schema for Sign in
  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  export default function signin() {
    const router = useRouter();
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.returnButton} onPress={() => router.back()}>
        <Text style={styles.returnText}>Return to Starting Page</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Sign In</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={signInSchema}
          onSubmit={(values) => {
            console.log(values);
            router.push("/index");
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
              <TextInput 
              style = {styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur = {handleBlur("password")}
              value = {values.password}
              />
              {errors.password && <Text style = {styles.error}>{errors.password}</Text>}
              <TouchableOpacity style = {styles.button}onPress={() => handleSubmit()}>
                <Text style = {styles.buttonText}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.googleButton} onPress = {() => router.push("/")}>
                <Text style = {styles.buttonText}>Sign in with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.appleButton} onPress = {() => router.push("/")}>
                <Text style = {styles.buttonText}>Sign in with Apple</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#3a7bd5",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    input: {
      width: 300,
      height: 40,
      padding: 10,
      borderWidth: 1,
      borderColor: "#ccc",
      marginVertical: 10,
      borderRadius: 5,
      backgroundColor: "#f5f5f5",
    },
    error: {
      color: "red",
      fontSize: 12,
    },
    button: {
      backgroundColor: "#007aff",
      paddingHorizontal: 20,
      paddingVertical: 12,
      marginVertical: 10,
      padding: 12,
      borderRadius: 20,
      width: 300,
      alignItems: "center",
      marginTop: 10,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    googleButton: {
      backgroundColor: "#db4437",
      paddingHorizontal: 12,
      paddingVertical: 12,
      borderRadius: 8,
      marginVertical: 10,
      width: 300,
      alignItems: 'center',
    },
    appleButton: {
      backgroundColor: "black",
      paddingHorizontal: 12,
      paddingVertical: 12,
      borderRadius: 8,
      marginVertical: 10,
      width: 300,
      alignItems: 'center',
    },
    returnButton: {
      backgroundColor: "green",
      paddingHorizontal: 20,
      paddingVertical: 12,
      marginVertical: 10,
      padding: 12,
      borderRadius: 20,
      width: 300,
      alignItems: "center",
      marginTop: 10,
    },
    returnText: {
      color: "black",
      fontSize: 16,
      fontWeight: "bold",
    },
  });