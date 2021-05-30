import * as yup from 'yup';

const validationSchema = yup.object({
    fname: yup
        .string('Enter your first name')
        .required('First Name is required'),
    lname: yup
        .string('Enter your last name')
        .required('Last Name is required'),
    dob: yup
        .string('Enter your DOB')
        .required('DOB is required'),
    pcpCheck: yup
        .string('Enter your PCP status')
        .required('PCP status is required'),
    pcpname: yup.string()
        .when('pcpCheck', {
            is: 'true',
            then: yup
                .string('Enter your PCP name')
                .required('PCP Name is required'),
        }),
    concernsAndSymp: yup.string()
        .when('pcpCheck', {
            is: 'true',
            then: yup
                .string('Write concerns and Symptoms here')
                .required('concerns and Symptoms are required'),
        }),
    currHealthConcerns: yup.string()
        .when('pcpCheck', {
            is: 'true',
            then: yup
                .string('What are your current health concerns?')
                .required('current health concerns are required'),
        }),
        
});

export default validationSchema;