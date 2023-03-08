import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  Button,
} from "react-native";
// import { Formik, Field } from "formik";
import StepIndicator from "react-native-step-indicator";

const AccountForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [gender, setGender] = useState("male");
  const stepLabels = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const [currentStep, setCurrentStep] = useState(0);
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSubmit = () => {
    // Do something with the form data
    console.log("submit successful");
  };

  // const initialValues = {
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // };

  // const validationSchema1 = Yup.object().shape({
  //   name: Yup.string().required("Please enter your name"),
  // });

  // const validationSchema2 = Yup.object().shape({
  //   email: Yup.string()
  //     .email("Please enter a valid email address")
  //     .required("Please enter your email"),
  //   password: Yup.string()
  //     .min(6, "Password must be at least 6 characters")
  //     .required("Please enter your password"),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref("password"), null], "Passwords must match")
  //     .required("Please confirm your password"),
  // });

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: "#4CAF50",
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: "#4CAF50",
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#4CAF50",
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: "#4CAF50",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
  };

  const handleSubmitStep1 = (values) => {
    console.log(values);
    setCurrentStep(1);
  };

  const handleSubmitStep2 = (values) => {
    console.log(values);
    alert("Form submitted successfully!");
  };

  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentStep}
        labels={stepLabels}
        stepCount={stepLabels.length}
      />
      {/* <View style={styles.formContainer}>
        {currentStep === 0 && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema1}
            onSubmit={handleSubmitStep1}
          >
            {({ handleSubmit }) => (<>
                <Text style={styles.formTitle}>Step 1: Enter your name</Text>
                <Field
                  name="name"
                  placeholder="" /><>)}</Formik>)}</View> */}
      {currentStep === 0 && (
        <>
          <TextInput label="Name" value={name} onChangeText={setName} />
          <Button mode="contained" onPress={handleNext} title="next" />
        </>
      )}
      {currentStep === 1 && (
        <>
          <TextInput label="Email" value={email} onChangeText={setEmail} />
          <View style={styles.btnContainer}>
            <Button mode="contained" onPress={handlePrev} title="Prev" />
            <Button mode="contained" onPress={handleNext} title="next" />
          </View>
        </>
      )}
      {currentStep === 2 && (
        <>
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            label="Remember me"
          />
          <View style={styles.btnContainer}>
            <Button mode="contained" onPress={handlePrev} title="Prev" />
            <Button mode="contained" onPress={handleNext} title="next" />
          </View>
        </>
      )}
      {currentStep === 3 && (
        <>
          <View style={styles.btnContainer}>
            <Button mode="contained" onPress={handlePrev} title="Prev" />

            <Button mode="contained" onPress={handleSubmit} title="Submit" />
          </View>
        </>
      )}
    </View>
  );
};

export default AccountForm;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
