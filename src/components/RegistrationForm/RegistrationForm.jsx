import React from "react";
import { Grid, Paper, Button, Typography, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useAuth } from "@/hooks/AuthContext";
import axios from "axios";

const getEmployeeRole = (userInfo) => {
    if (userInfo.role === "LEADER") {
        return;
    }

    if (userInfo.role === "ADMINGD") {
        return "NVGD";
    }

    if (userInfo.role === "ADMINTK") {
        return "NVTK";
    }
};

const getPath = (userInfo) => {
    if (userInfo.role === "LEADER") {
        return;
    }

    if (userInfo.role === "ADMINGD") {
        return "/staff/captknv/nvgd";
    }

    if (userInfo.role === "ADMINTK") {
        return "/staff/captknv/nvtk";
    }
};

const RegistrationForm = (props) => {
    // const { usernameList } = props;

    const { getUser } = useAuth();
    const user = getUser();

    const paperStyle = {
        padding: "0 15px 40px 15px",
        width: "100%",
        align: "center",
    };
    const btnStyle = { marginTop: 10, justify: "center" };
    const phoneRegExp = /^0{1}[0-9]{8,9}$/;
    const passwordRegExp =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const initialValues = {
        name: "",
        // email: "",
        phoneNumber: "",
        username: "",
        password: "",
        confirmPassword: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        // email: Yup.string().email("Enter valid email").required("Required"),
        username: Yup.string()
            // .test(
            //     "Unique username",
            //     "Username already in use", // <- key, message
            //     function (value) {
            //         return new Promise((resolve, reject) => {
            //             axios
            //                 .get(
            //                     `http://localhost:8080/api/u/user/${value}/available`
            //                 )
            //                 .then((res) => {
            //                     resolve(true);
            //                 })
            //                 .catch((error) => {
            //                     if (
            //                         error.response.data.content ===
            //                         "The email has already been taken."
            //                     ) {
            //                         resolve(false);
            //                     }
            //                 });
            //         });
            //     }
            // )
            .required("Required"),
        phoneNumber: Yup.string()
            .matches(phoneRegExp, "Enter valid Phone number")
            .required("Required"),
        password: Yup.string()
            .min(8, "Minimum characters should be 8")
            .matches(
                passwordRegExp,
                "Password must have one upper, lower case, number, special symbol"
            )
            .required("Required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Password not matches")
            .required("Required"),
    });

    const onSubmit = async (values, props) => {
        try {
            const path = "http://localhost:8080" + getPath(user.userInfo);

            const data = {
                id_work: user.userInfo.id_work,
                name: values.name,
                username: values.username,
                password: values.password,
                role: getEmployeeRole(user.userInfo),
            };

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                    "Content-Type": "application/json",
                },
            };
            console.log(data);
            console.log(user);
            const res = await axios.post(path, data, config);
            console.log(res);
            props.resetForm();
        } catch (error) {
            // Xử lý lỗi khi thực hiện request
            console.error("Error:", error);
            // props.resetForm();
        }
    };

    return (
        <Grid>
            <Paper fullWidth elevation={0} style={paperStyle}>
                <Grid align="center">
                    <Typography variant="caption">
                        Thêm thông tin tạo tài khoản nhân viên
                    </Typography>
                </Grid>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {(props) => (
                        <Form noValidate>
                            {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} /> */}

                            <Field
                                as={TextField}
                                name="name"
                                label="Name"
                                fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name="name" />}
                                required
                                margin="normal"
                            />

                            {/* <TextField label='Email' name='email' type='Email' fullWidth 
                    {...props.getFieldProps('email')}/> */}

                            <Field
                                as={TextField}
                                name="phoneNumber"
                                label="Phone Number"
                                fullWidth
                                error={
                                    props.errors.phoneNumber &&
                                    props.touched.phoneNumber
                                }
                                helperText={<ErrorMessage name="phoneNumber" />}
                                required
                                margin="normal"
                            />

                            <Field
                                as={TextField}
                                name="username"
                                label="Username"
                                fullWidth
                                error={
                                    props.errors.username &&
                                    props.touched.username
                                }
                                helperText={<ErrorMessage name="username" />}
                                required
                                margin="normal"
                            />

                            <Field
                                as={TextField}
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                                error={
                                    props.errors.password &&
                                    props.touched.password
                                }
                                helperText={<ErrorMessage name="password" />}
                                required
                                margin="normal"
                            />

                            <Field
                                as={TextField}
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                error={
                                    props.errors.confirmPassword &&
                                    props.touched.confirmPassword
                                }
                                helperText={
                                    <ErrorMessage name="confirmPassword" />
                                }
                                required
                                margin="normal"
                            />

                            <Button
                                type="submit"
                                style={btnStyle}
                                align="center"
                                variant="contained"
                                color="primary"
                            >
                                Tạo tài khoảng
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
};

export default RegistrationForm;
