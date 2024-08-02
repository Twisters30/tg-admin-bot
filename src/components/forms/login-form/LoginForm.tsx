import React from "react"
import {
    Grid,
    Card,
    CardContent,
    MenuItem,
    InputLabel,
    Select,
    CardActions,
    Button,
    CardHeader,
    FormControl,
} from "@mui/material"

import {Formik, Form, Field} from "formik"
import * as Yup from "yup"
import {TextField} from "formik-material-ui"


type TForm = {
    email: string,
    password: string,
}
//Data
const initialValues: TForm = {
    email: "",
    password: "",
}

const options = [
    {label: "Computer Programmer", value: "Computer_programmer"},
    {label: "Web Developer", value: "web_developer"},
    {label: "User Experience Designer", value: "user_experience_designer"},
    {label: "Systems Analyst", value: "systems_analyst"},
    {label: "Quality Assurance Tester", value: "quality_assurance_tester"},
]

//password validation
const lowercaseRegEx = /(?=.*[a-z])/
const uppercaseRegEx = /(?=.*[A-Z])/
const numericRegEx = /(?=.*[0-9])/
const lengthRegEx = /(?=.{6,})/

//validation schema
let validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .matches(
            lowercaseRegEx,
            "Must contain one lowercase alphabetical character!"
        )
        .matches(
            uppercaseRegEx,
            "Must contain one uppercase alphabetical character!"
        )
        .matches(numericRegEx, "Must contain one numeric character!")
        .matches(lengthRegEx, "Must contain 6 characters!")
        .required("Required!"),
})

const UserForm = () => {

    const onSubmit = (values: TForm) => {
        console.log(values)
    }

    return (
        <Grid container justifyContent="center" spacing={1}>
            <Grid item md={12}>
                <Card>
                    <CardHeader title="REGISTER FORM"></CardHeader>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {({dirty, isValid, values, handleChange, handleBlur}) => {
                            return (
                                <Form>
                                    <CardContent>
                                        <Grid item container spacing={1} justifyContent="center">
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Field
                                                    label="Email"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="email"
                                                    value={values.email}
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Field
                                                    label="Password"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="password"
                                                    value={values.password}
                                                    type="password"
                                                    component={TextField}
                                                />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            disabled={!dirty || !isValid}
                                            variant="contained"
                                        >
                                            REGISTER
                                        </Button>
                                    </CardActions>
                                </Form>
                            )
                        }}
                    </Formik>
                </Card>
            </Grid>
        </Grid>
    )
}

export default UserForm
