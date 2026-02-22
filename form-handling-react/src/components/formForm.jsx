import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be atleast 6 characters").required("Password is required")
  });

  function onSubmit(values, { resetForm }) {
    console.log("Form Submitted:", values)

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User registered:", data);
      });

    resetForm();
  };

  return(
    <Formik 
    initialValues={initialValues} 
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      <Form>
        <h2>Register with Formik</h2>
        <div>
          <Field
           type="text"
           name="username"
           placeholder="Username"
           />
           <ErrorMessage name="username" component="p"/>
        </div>

        <div>
          <Field
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="p" />
        </div>

        <div>
          <Field
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" component="p" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  )
}

export default FormikForm