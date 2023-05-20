import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Box, Container } from '@mui/material';

const validationSchema = yup.object().shape({
  employeeId: yup.string().required('Employee ID is required'),
  department: yup.string().required('Department is required'),
  category: yup.string().required('Category is required'),
  location: yup.string().required('Location is required'),
  salary: yup.string().required('Salary is required'),
});

const AddDepartment = () => {
  const formik = useFormik({
    initialValues: {
      employeeId: '',
      department: '',
      category: '',
      location: '',
      salary: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '500px',
          margin: 'auto',
          mt: 4,
          p: 3,
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      >
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <TextField
            fullWidth
            id="employeeId"
            name="employeeId"
            label="Employee ID"
            value={formik.values.employeeId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.employeeId && Boolean(formik.errors.employeeId)}
            helperText={formik.touched.employeeId && formik.errors.employeeId}
            margin="normal"
          />
          <TextField
            fullWidth
            id="department"
            name="department"
            label="Department"
            value={formik.values.department}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.department && Boolean(formik.errors.department)}
            helperText={formik.touched.department && formik.errors.department}
            margin="normal"
          />
          <TextField
            fullWidth
            id="category"
            name="category"
            label="Category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText={formik.touched.category && formik.errors.category}
            margin="normal"
          />
          <TextField
            fullWidth
            id="location"
            name="location"
            label="Location"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
            margin="normal"
          />
          <TextField
            fullWidth
            id="salary"
            name="salary"
            label="Salary"
            value={formik.values.salary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.salary && Boolean(formik.errors.salary)}
            helperText={formik.touched.salary && formik.errors.salary}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddDepartment;
