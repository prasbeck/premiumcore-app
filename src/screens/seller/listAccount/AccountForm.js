import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  Button,
  Pressable,
} from "react-native";
// import { Formik, Field } from "formik";
import StepIndicator from "react-native-step-indicator";
import Ionicons from "react-native-vector-icons/Ionicons";
import AccountDetails from "./steps/AccountDetails";
import BankDetails from "./steps/BankDetails";
import InventoryDetails from "./steps/InventoryDetails";
import Social from "./steps/Social";
import Uploads from "./steps/Uploads";

const AccountForm = ({ setModalVisible }) => {
  const [password, setPassword] = useState("");
  const [seasons, setSeasons] = useState([
    {
      title: "Levels",
      items: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60,
      ],
    },
    { title: "Regular", items: [] },
    { title: "Elite", items: [] },
    { title: "Elite Plus", items: [] },
  ]);
  const [titlesInput, setTitlesInput] = useState("");
  const [titlesArr, setTitlesArr] = useState([]);
  const [isTitlesKeyReleased, setIsTitlesKeyReleased] = useState(false);
  const [framesInput, setFramesInput] = useState("");
  const [framesArray, setFramesArray] = useState([]);
  const [isFramesKeyReleased, setIsFramesKeyReleased] = useState(false);

  const stepLabels = [
    "Account details",
    "Inventory details",
    "Uploads",
    "Social accounts",
    "Bank details",
  ];
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
    currentStepStrokeWidth: 1,
    stepStrokeCurrentColor: "#ffa700",
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: "#ffa800",
    stepStrokeUnFinishedColor: "rgb(81,81,81)",
    separatorFinishedColor: "#ffa800",
    separatorUnFinishedColor: "rgb(81,81,81)",
    stepIndicatorFinishedColor: "#ffa800",
    stepIndicatorUnFinishedColor: "rgb(81,81,81)",
    stepIndicatorCurrentColor: "#FFA800",
    labelColor: "rgb(81,81,81)",
    currentStepLabelColor: "#ffa800",
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
          <Text style={styles.h3}>Account details</Text>

          <AccountDetails />

          <View style={styles.btnContainer}>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.prev}>Cancel</Text>
            </Pressable>
            <Pressable onPress={handleNext} style={styles.btn}>
              <Text style={styles.next}>Next</Text>
              <Ionicons name="chevron-forward" color="#ffa800" size={25} />
            </Pressable>
          </View>
        </>
      )}
      {currentStep === 1 && (
        <>
          <Text style={styles.h3}>Inventory details</Text>
          <InventoryDetails
            seasons={seasons}
            setSeasons={setSeasons}
            framesInput={framesInput}
            setFramesInput={setFramesInput}
            framesArray={framesArray}
            setFramesArray={setFramesArray}
            isFramesKeyReleased={isFramesKeyReleased}
            setIsFramesKeyReleased={setIsFramesKeyReleased}
            titlesInput={titlesInput}
            setTitlesInput={setTitlesInput}
            titlesArr={titlesArr}
            setTitlesArr={setTitlesArr}
            isTitlesKeyReleased={isTitlesKeyReleased}
            setIsTitlesKeyReleased={setIsTitlesKeyReleased}
          />
          <View style={styles.btnContainer}>
            <Pressable onPress={handlePrev} style={styles.btn}>
              <Ionicons name="chevron-back" size={25} color="#ffffff" />
              <Text style={styles.prev}>Back</Text>
            </Pressable>
            <Pressable onPress={handleNext} style={styles.btn}>
              <Text style={styles.next}>Next</Text>
              <Ionicons name="chevron-forward" color="#ffa800" size={25} />
            </Pressable>
          </View>
        </>
      )}
      {currentStep === 2 && (
        <>
          <Text style={styles.h3}>Uploads</Text>
          <Uploads />
          <View style={styles.btnContainer}>
            <Pressable onPress={handlePrev} style={styles.btn}>
              <Ionicons name="chevron-back" size={25} color="#ffffff" />
              <Text style={styles.prev}>Back</Text>
            </Pressable>
            <Pressable onPress={handleNext} style={styles.btn}>
              <Text style={styles.next}>Next</Text>
              <Ionicons name="chevron-forward" color="#ffa800" size={25} />
            </Pressable>
          </View>
        </>
      )}
      {currentStep === 3 && (
        <>
          <Text style={styles.h3}>Social accounts</Text>
          <Social />
          <View style={styles.btnContainer}>
            <Pressable onPress={handlePrev} style={styles.btn}>
              <Ionicons name="chevron-back" size={25} color="#ffffff" />
              <Text style={styles.prev}>Back</Text>
            </Pressable>
            <Pressable onPress={handleNext} style={styles.btn}>
              <Text style={styles.next}>Next</Text>
              <Ionicons name="chevron-forward" color="#ffa800" size={25} />
            </Pressable>
          </View>
        </>
      )}
      {currentStep === 4 && (
        <>
          <Text style={styles.h3}>Bank details</Text>
          <BankDetails />
          <View style={styles.btnContainer}>
            <Pressable onPress={handlePrev} style={styles.btn}>
              <Ionicons name="chevron-back" size={25} color="#ffffff" />
              <Text style={styles.prev}>Back</Text>
            </Pressable>
            <Pressable
              onPress={handleSubmit}
              style={[
                styles.btn,
                {
                  backgroundColor: "#ffa800",
                  paddingHorizontal: 8,
                  borderRadius: 10,
                },
              ]}
            >
              <Text
                style={[
                  styles.next,
                  { color: "#000000", paddingTop: 4, paddingHorizontal: 10 },
                ]}
              >
                Submit
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

export default AccountForm;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexGrow: 1,
    overflow: "scroll",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  prev: {
    color: "#ffffff",
    fontWeight: "700",
    paddingTop: 2,
  },
  next: {
    color: "#ffa800",
    fontWeight: "700",
    paddingTop: 2,
  },
  btn: {
    flexDirection: "row",
    gap: 6,
  },
  inputBox: {
    width: "100%",
    backgroundColor:
      "linear-gradient(90.59deg, rgba(56, 55, 55, 0.5) -2.17%, rgba(152, 152, 152, 0) 110.76%)",
    borderColor: "#303030",
    borderRadius: 6,
    height: 48,
    color: "#fff",
    paddingHorizontal: 10,
  },
  h3: {
    color: "#ffa800",
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 8,
  },
});
