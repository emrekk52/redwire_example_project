import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthError, updateUserData } from "../../../store/actions";
import { showToast } from "../../../utils/tools";
import { useFocusEffect } from "@react-navigation/native";

const UserData = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (error) {
      showToast("error", "Sorry", error);
      setLoading(false);
    }
  }, [error]);

  useFocusEffect(
    useCallback(() => {
      return () => dispatch(clearAuthError());
    }, [])
  );

  const handleSubmit = (values) => {
    setLoading(true);
    dispatch(updateUserData(values, user)).then(({ payload }) => {
      setLoading(false);
      if (payload.error) showToast("error", "Ups !!", "Try again later");
      else showToast("success", "Congratulations", "Your profile was updated");
    });
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: user.name ? user.name : "",
        lastName: user.lastName ? user.lastName : "",
        age: user.age ? user.age : "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("The name is required"),
        lastName: Yup.string().required("The lastname is required"),
        age: Yup.number().required("The age is required"),
      })}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <View style={{ padding: 20 }}>
          <Title>About you</Title>
          <TextInput
            label="name"
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            mode="flat"
            error={errors.name && touched.name ? true : false}
          />

          <TextInput
            label="lastname"
            onChangeText={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
            value={values.lastName}
            mode="flat"
            error={errors.lastName && touched.lastName ? true : false}
          />

          <TextInput
            label="age"
            onChangeText={handleChange("age")}
            onBlur={handleBlur("age")}
            value={values.age}
            mode="flat"
            error={errors.age && touched.age ? true : false}
          />

          <Button
            disabled={loading}
            loading={loading}
            mode="contained"
            onPress={handleSubmit}
          >
            Updated
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default UserData;
