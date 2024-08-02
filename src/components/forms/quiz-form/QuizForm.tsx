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
// import * as Yup from "yup"
import {TextField} from "formik-material-ui"


type TForm = {
    quizName: string
    steps:[
        {question: string, id: string}
    ]
}
//Data
const initialValues: TForm = {
    quizName: "",
    steps:[
        {question: 'тест1', id: '1'}
    ]
}

const options = [
    {label: "Computer Programmer", value: "Computer_programmer"},
    {label: "Web Developer", value: "web_developer"},
    {label: "User Experience Designer", value: "user_experience_designer"},
    {label: "Systems Analyst", value: "systems_analyst"},
    {label: "Quality Assurance Tester", value: "quality_assurance_tester"},
]

const QuizForm = () => {

    const onSubmit = (values: TForm) => {
        console.log(values)
    }

    return (
        <Grid container justifyContent="center" spacing={1}>
            <Grid item md={12}>
                <Card>
                    <CardHeader title="QUIZ FORM"></CardHeader>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}>
                        {({values, handleChange}) => {
                            return (
                                <Form>
                                    <CardContent>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <Field
                                                label="Quiz Name"
                                                variant="outlined"
                                                fullWidth
                                                name="Quiz Name"
                                                value={values.quizName}
                                                component={TextField}
                                            />
                                        </Grid>
                                    </CardContent>
                                    <CardContent>
                                        {
                                            values.steps.map((step) => (
                                                <Grid key={step.id} item xs={12} sm={6} md={6}>
                                                    <Field
                                                        label="question"
                                                        variant="outlined"
                                                        fullWidth
                                                        name="question"
                                                        value={step.question}
                                                        component={TextField}
                                                    />
                                                </Grid>
                                            ))}
                                        <Grid item container spacing={1} justifyContent="center">

                                            {/*<Grid item xs={12} sm={6} md={12}>*/}
                                            {/*    <FormControl fullWidth variant="outlined">*/}
                                            {/*        <InputLabel id="demo-simple-select-outlined-label">*/}
                                            {/*            Occupation*/}
                                            {/*        </InputLabel>*/}
                                            {/*        <Select*/}
                                            {/*            labelId="demo-simple-select-outlined-label"*/}
                                            {/*            id="demo-simple-select-outlined"*/}
                                            {/*            label="Occupation"*/}
                                            {/*            onChange={handleChange}*/}
                                            {/*            onBlur={handleBlur}*/}
                                            {/*            value={values.occupation}*/}
                                            {/*            name="occupation">*/}
                                            {/*            <MenuItem>None</MenuItem>*/}
                                            {/*            {options.map((item) => (*/}
                                            {/*                <MenuItem key={item.value} value={item.value}>*/}
                                            {/*                    {item.label}*/}
                                            {/*                </MenuItem>*/}
                                            {/*            ))}*/}
                                            {/*        </Select>*/}
                                            {/*    </FormControl>*/}
                                            {/*</Grid>*/}
                                        </Grid>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            variant="contained"
                                        >
                                            SUBMIT
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

export default QuizForm
