import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { Formik } from "formik";
  import * as Yup from "yup";
  import { useRouter } from "expo-router";
  
  import React from "react";
  
  const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    location: Yup.string().required("Location is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
  });
  
  const signup = () => {
    const router = useRouter();
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TouchableOpacity style={styles.returnButton} onPress={() => router.back()}>
          <Text style={styles.returnText}>Return to Starting Page</Text>
        </TouchableOpacity>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            location: "",
          }}
          validationSchema={signUpSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
              />
              {errors.firstName && (
                <Text style={styles.error}>{errors.firstName}</Text>
              )}
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
              />
              {errors.lastName && (
                <Text style={styles.error}>{errors.lastName}</Text>
              )}
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
              <TextInput
                style={styles.input}
                placeholder="Location"
                onChangeText={handleChange("location")}
                onBlur={handleBlur("location")}
                value={values.location}
              />
              {errors.location && <Text style={styles.error}>{errors.location}</Text>}
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.googleButton} onPress = {() => router.push("/")}>
                <Text style = {styles.buttonText}>Sign up with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.appleButton} onPress = {() => router.push("/")}>
                <Text style = {styles.buttonText}>Sign up with Apple</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    );
  };
  
  export default signup;
  
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
      padding: 12,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      marginVertical: 5,
      backgroundColor: "#f5f5f5",
    },
    error: {
      color: "red",
      fontSize: 12,
      marginVertical: 5,
      marginLeft: 5,
    },
    button: {
      backgroundColor: "#007AFF",
      padding: 12,
      borderWidth: 1,
      paddingVertical: 12,
      borderRadius: 8,
      width: 300,
      alignItems: "center",
      marginTop: 20,
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