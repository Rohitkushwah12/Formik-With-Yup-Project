import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import "./bootstrap/css/bootstrap.css";
import { registerSchema } from "./registerSchema";

const RegisterForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
              age: "",
              gender: "",
              country: "",
              preferredLanguage: [],
              termsAndCondition: false,
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ touched, errors, isSubmitting, values }) =>
              !isSubmitting ? (
                <div>
                  <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                      <h1 className="mt-5">Register Form</h1>
                    </div>
                  </div>
                  <Form>
                    <div className="form-group">
                      <lable htmlFor="firstName">First Name</lable>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        autocomplete="off"
                        className={`mt-2 form-control ${
                          touched.firstName && errors.firstName
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <lable htmlFor="lastName">Last Name</lable>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        autocomplete="off"
                        className={`mt-2 form-control ${
                          touched.lastName && errors.lastName
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <lable htmlFor="username">Username</lable>
                      <Field
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        autocomplete="off"
                        className={`mt-2 form-control ${
                          touched.username && errors.username
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <lable htmlFor="email">Email</lable>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        autocomplete="off"
                        className={`mt-2 form-control ${
                          touched.email && errors.email ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <lable htmlFor="password">Password</lable>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        autocomplete="off"
                        className={`mt-2 form-control ${
                          touched.password && errors.password
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <lable htmlFor="confirmPassword">Confirm Password</lable>
                      <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Enter Password again"
                        autocomplete="off"
                        className={`mt-2 form-control ${
                          touched.confirmPassword && errors.confirmPassword
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <lable htmlFor="age">Age</lable>
                      <Field
                        type="text"
                        name="age"
                        placeholder="Enter Age"
                        autocomplete="off"
                        className={`mt-2 form-control ${
                          touched.age && errors.age ? "is-invalid" : ""
                        }`}
                      />

                      <ErrorMessage
                        name="age"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div>
                      <label>Gender</label>
                      <lable>
                        <Field type="radio" name="gender" value="male" />
                        male
                      </lable>
                      <lable>
                        <Field type="radio" name="gender" value="female" />
                        female
                      </lable>
                      <lable>
                        <Field type="radio" name="gender" value="other" />
                        other
                      </lable>
                      <ErrorMessage name="gender" component="div" />
                    </div>
                    <div>
                      <label>Country</label>
                      <Field name="country" as="select">
                        <option name="India">India</option>
                        <option name="Pakistan">Pakistan</option>
                        <option name="Usa">Usa</option>
                      </Field>
                      <ErrorMessage name="country" component="div" />
                    </div>
                    <div>
                      <lable>Preferred Language</lable>
                      <lable>
                        <Field
                          type="checkbox"
                          name="preferredLanguage"
                          value="hindi"
                        />
                        Hindi
                      </lable>
                      <lable>
                        <Field
                          type="checkbox"
                          name="preferredLanguage"
                          value="english"
                        />
                        English
                      </lable>
                      <ErrorMessage name="preferredLanguage" component="div" />
                    </div>
                    <div>
                      <lable>
                        <Field type="checkbox" name="termsAndCondition" />
                        agree to terms & condition
                      </lable>
                      <ErrorMessage name="termsAndCondition" component="div" />
                    </div>
                    <button
                      className="btn btn-primary btn-block mt-4"
                      type="submit"
                    >
                      Submit
                    </button>
                  </Form>
                </div>
              ) : (
                <div>
                  <h1>{values.username} Form Submitted Successfully</h1>
                </div>
              )
            }
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
