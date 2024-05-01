import { useEffect, useState } from "react";
import Input from "./inputComponent.js";
import { Link } from "react-router-dom";
import errorStates from "./constants/errorStates.js";
export default function SignupComponent() {
  const [userDetails, setUserDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    dob: "",
    phoneno: "",
    gender: "",
    password: "",
  });

  const [error, setError] = useState({
    fName: "",
    lName: "",
    email: "",
    dob: "",
    phoneno: "",
    gender: "",
    password: "",
  });

  const [genderValidation, setGenderValidation] = useState(false);

  useEffect(() => {
    if (error.gender) {
      setGenderValidation(true);
    }
  }, [error]);

  useEffect(()=>{
    setError({ fName: "",
    lName: "",
    email: "",
    dob: "",
    phoneno: "",
    gender: "",
    password: "",});
  },[userDetails])

  function checkValidation() {
    const errorArray = {};
    if (userDetails.fName === "") {
      errorArray.fName = errorStates.name.not_empty;
    }
    if (userDetails.lName === "") {
      errorArray.lName = errorStates.name.not_empty;
    }
    if (userDetails.email === "") {
      errorArray.email = errorStates.not_empty;
    }
    if (userDetails.dob === "") {
      errorArray.dob = errorStates.dob.not_empty;
    }
    if (userDetails.phoneno === "") {
      errorArray.phoneno = errorStates.phone.not_empty;
    }
    if (userDetails.gender === "") {
      errorArray.gender = errorStates.gender.not_empty;
    }
    if (userDetails.password === "") {
      errorArray.password = errorStates.password.not_empty;
    }
    console.log(errorArray);

    return errorArray;
  }

  function checkInputValidation() {
    const errorArray = {};
    const fnameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
    if (!fnameRegex.test(userDetails.fName)) {
      errorArray.fName = errorStates.name.invalid;
    }
    if (!fnameRegex.test(userDetails.lName)) {
      errorArray.lName = errorStates.name.invalid;
    }
    if (!emailRegex.test(userDetails.email)) {
      errorArray.email = errorStates.email.invalid;
    }
    if (!phoneRegex.test(userDetails.phoneno)) {
      errorArray.phoneno = errorStates.phone.invalid;
    }
    if (!passwordRegex.test(userDetails.password)) {
      errorArray.password = errorStates.password.straingth;
    }

    return errorArray;
  }

  function handleUserDetails(e) {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    
  }

  function handleSignup(e) {
    const validationError = checkValidation();
    const validationError2 = checkInputValidation();
    if (
      validationError.fName ||
      validationError.lName ||
      validationError.email ||
      validationError.dob ||
      validationError.phoneno ||
      validationError.gender ||
      validationError.password
    ) {
      e.preventDefault();
      setError({
        ...error,
        fName: validationError.fName,
        lName: validationError.lName,
        email: validationError.email,
        dob: validationError.dob,
        phoneno: validationError.phoneno,
        gender: validationError.gender,
        password: validationError.password,
      });
  
    }
    else{
    
    if( validationError2.fName ||
      validationError2.lName ||
      validationError2.email ||
      validationError2.dob ||
      validationError2.phoneno ||
      validationError2.gender ||
      validationError2.password){
        e.preventDefault();

      
      setError({
        ...error,
        fName: validationError2.fName,
        lName: validationError2.lName,
        email: validationError2.email,
        dob: validationError2.dob,
        phoneno: validationError2.phoneno,
        gender: validationError2.gender,
        password: validationError2.password,
      });

    }
  }


    
    // console.log( validationError.gender);
  }

  return (
    <div className="App">
      <div className="signup">
        <div>
          <div className="signupWord">Please Register</div>
          <Input
            name="fName"
            type="text"
            placeholder="FirstName"
            value={userDetails.fName}
            onChange={handleUserDetails}
            error={error.fName}
          ></Input>
          <Input
            name="lName"
            type="text"
            placeholder="LastName"
            value={userDetails.lName}
            onChange={handleUserDetails}
            error={error.lName}
          ></Input>
          <div className="dobandgender">
            <div className="dob">
              <Input
                name="dob"
                type="date"
                placeholder="dd/mm/yy"
                value={userDetails.dob}
                onChange={handleUserDetails}
                error={error.dob}
              ></Input>
            </div>
            <div className="genderDiv">
              <select
                name="gender"
                className="gender"
                selected={userDetails.gender}
                onChange={handleUserDetails}
              >
                <option value="">Please select one…</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="non-binary">Transgender</option>
              </select>
              {genderValidation ? (
                <span className="error">{error.gender}</span>
              ) : null}
            </div>
          </div>

          <Input
            name="phoneno"
            type="tel"
            placeholder="Phone No."
            value={userDetails.phoneno}
            onChange={handleUserDetails}
            error={error.phoneno}
          ></Input>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={handleUserDetails}
            error={error.email}
          ></Input>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={handleUserDetails}
            error={error.password}
          ></Input>
          <Link to="/home" className="signupButton" onClick={handleSignup}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
