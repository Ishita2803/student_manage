const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.prn = !isEmpty(data.prn) ? data.prn : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.branch = !isEmpty(data.branch) ? data.branch : "";
  data.year = !isEmpty(data.year) ? data.year : "";
  
  const emailPattern= /^([a-z\d\.-]+)@siesgst\.ac\.in$/;
  const prnPattern= /^\d{3}[A-Z]{1}\d{4}$/;
  
  if(!prnPattern.test(data.prn)){
    errors.prn="PRN is invalid";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  } else if(!emailPattern.test(data.email)){
    errors.email="Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  if (Validator.isEmpty(data.branch)) {
    errors.branch = "Branch field required";
  }
  if (Validator.isEmpty(data.year)) {
    errors.year = "Year field required";
  }
  if (Validator.isEmpty(data.prn)) {
    errors.prn = "PRN field required";
  } 
  //alert(errors);

return {
    errors,
    isValid: isEmpty(errors)
  };
};