import React from "react";
import {
  Container,
  Grid,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Button,
  TextField,
  Radio,
  RadioGroup,
  Paper,
  Typography,
  TextareaAutosize
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import validationSchema from "../utils/validationSchema";
import { useFormik } from 'formik';

export function MedicalForm({ title, subTitle1, subTitle2, subTitle3, onSubmit }) {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    }
  }));
  const initialState = {
    fname: "",
    lname: "",
    dob: "",
    phone: "",
    pcpCheck: "",
    pcpname: "",
    concernsAndSymp: "",
    currHealthConcerns: ""
  };

  const classes = useStyles();

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,

    onSubmit: (values, { resetForm }) => {
      resetForm();
      onSubmit(values);
    },
  });

  return (
    <Container component="main" maxWidth="md">
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>

        <form onSubmit={formik.handleSubmit} noValidate>
          <Grid item xs={12}>
            <Typography component="p">{subTitle1}</Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="First Name"
                id="fname"
                name="fname"
                value={formik.values.fname}
                className={classes.textField}
                helperText="Enter your first name"
                onChange={formik.handleChange}
                error={formik.touched.fname && Boolean(formik.errors.fname)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Last Name"
                id="lname"
                name="lname"
                value={formik.values.lname}
                className={classes.textField}
                helperText="Enter your last name"
                onChange={formik.handleChange}
                error={formik.touched.lname && Boolean(formik.errors.lname)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="dob"
                label="DOB"
                type="date"
                name="dob"
                value={formik.values.dob}
                className={classes.textField}
                helperText="Enter your DOB"
                onChange={formik.handleChange}
                error={formik.touched.dob && Boolean(formik.errors.dob)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Phone"
                id="phone"
                name="phone"
                value={formik.values.phone}
                className={classes.textField}
                helperText="Enter your phone"
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="p">{subTitle2}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset" error={formik.touched.pcpCheck && Boolean(formik.errors.pcpCheck)}>
                <FormLabel component="legend">Are you currently under PCP?</FormLabel>
                <RadioGroup aria-label="pcpCheck" name="pcpCheck" value={formik.values.pcpCheck} onChange={formik.handleChange}>
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
                <FormHelperText>{formik.touched.pcpCheck && formik.errors.pcpCheck}</FormHelperText>
              </FormControl>
            </Grid>
            {
              formik.values.pcpCheck === 'true' && (
                <>
                  <Grid item xs={12}>
                    <Typography component="p">{subTitle3}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="PCP Name"
                      id="pcpname"
                      name="pcpname"
                      value={formik.values.pcpname}
                      className={classes.textField}
                      helperText="Enter your PCP name"
                      onChange={formik.handleChange}
                      error={formik.touched.pcpname && Boolean(formik.errors.pcpname)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset" error={formik.touched.concernsAndSymp && Boolean(formik.errors.concernsAndSymp)}>
                      <FormLabel component="legend">Health Concerns and Symptoms</FormLabel>
                      <TextareaAutosize
                        aria-label="Health Concerns and Symptoms"
                        placeholder="Write concerns and Symptoms here"
                        name="concernsAndSymp"
                        value={formik.values.concernsAndSymp}
                        onChange={formik.handleChange}
                      />
                      <FormHelperText>{formik.touched.concernsAndSymp && formik.errors.concernsAndSymp}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset" error={formik.touched.currHealthConcerns && Boolean(formik.errors.currHealthConcerns)}>
                      <FormLabel component="legend">What are your current health concerns?</FormLabel>
                      <TextareaAutosize
                        aria-label="What are your current health concerns?"
                        placeholder="Write your current health concerns here"
                        name="currHealthConcerns"
                        value={formik.values.currHealthConcerns}
                        onChange={formik.handleChange}
                      />
                      <FormHelperText>{formik.touched.currHealthConcerns && formik.errors.currHealthConcerns}</FormHelperText>
                    </FormControl>
                  </Grid>
                </>
              )
            }
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
