import * as Yup from "yup";
import axios from "axios";

export const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name must be 2 characters or long")
    .required("First Name required"),
  lastName: Yup.string()
    .min(2, "Last Name must be 2 characters or long")
    .required("Last Name required"),
  username: Yup.string()
    .required("Username required")
    .test("Unique Username", "Username already exist", (value) => {
      return new Promise((resolve, reject) => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then(({ data }) => {
            data.map((values) => {
              if (values.username === value) {
                return resolve(false);
              }
            });
            resolve(true);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters or long")
    .required("Password required")
    .matches(/^(?=.*[a-z])/, "must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "must contain at least one number")
    .matches(
      /^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/,
      "must contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  age: Yup.number().min(18, "Age must be 18 or older").required("Age required"),
  gender: Yup.string().required("Gender Required"),
  country: Yup.string().required("Country required"),
  preferredLanguage: Yup.array().min(1, "please select altleast one language"),
  termsAndCondition: Yup.boolean().isTrue("please agree to terms & conditions"),
});
