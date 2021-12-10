import React from "react";
import useForm from "./useForm.js";
import validateInfo from "./validateInfo.js";
import "./css/SignUp.css";

const SignUp = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);
  return (
    <div className="signup">
      <button className="seven-btn">
        <span className="seven-span">Try it free 7 days</span> then $20/mo.
        thereafter
      </button>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <input
            id="firstname"
            type="text"
            name="firstname"
            className="form-input"
            placeholder="First Name"
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p className="errortext">{errors.firstname}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="lastname"
            type="text"
            name="lastname"
            className="form-input"
            placeholder="Last Name"
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p className="errortext">{errors.lastname}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="errortext">{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="errortext">{errors.password}</p>}
        </div>
        <button className="form-submit-btn" type="submit">
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="terms">
          By clicking the button, you are agreeing to our{" "}
          <a href="#">Terms and Services</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
