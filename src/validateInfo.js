export default function validateInfo(values) {
  let errors = {};

  //first name
  if (!values.firstname.trim()) {
    errors.firstname = "First Name cannot be empty";
  } else if (values.firstname.trim().length < 3) {
    errors.firstname = "First Name must be at least 3 characters long";
  }

  //last name
  if (!values.lastname.trim()) {
    errors.lastname = "Last Name cannot be empty";
  } else if (values.lastname.trim().length < 3) {
    errors.lastname = "Last Name must be at least 3 characters long";
  }

  //email
  if (!values.email) {
    errors.email = "Email Address cannot be empty";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/i.test(values.email)
  ) {
    errors.email = "Looks like this is not an email";
  }
  //password
  if (!values.password) {
    errors.password = "Password cannot be empty";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }
  return errors;
}
