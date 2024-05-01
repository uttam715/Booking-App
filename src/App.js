import { useEffect, useState } from "react";
import "./App.css";
import Input from "./inputComponent.js";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import BookingComponent from "./home.js";
import SignupComponent from "./singupComponent.js";
import errorStates from "./constants/errorStates.js";
import PaymentSummary from "./paymentsummaryComponent.js";
import row from "./MockData/screen1.js";
import Paymentcompleted from "./paymentcompletedComponent.js";
//Login component
function Home() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  useEffect(() => {
    setError({ email: "", password: "" });
  }, [input]);

  function handleInput(e) {
    if (e.target.type === "email") {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
    if (e.target.type === "password") {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
  }

  function checkValidation() {
    const errorArray = {};
    if (input.email === "") {
      errorArray.email = errorStates.not_empty;
    }
    if (input.password === "") {
      errorArray.password = errorStates.not_empty;
    }
    return errorArray;
  }

  function handleLoginButton(e) {
    console.log(input);
    const validationError = checkValidation(); // []
    if (validationError.email || validationError.password) {
      e.preventDefault();
    }
    setError({
      ...error,
      email: validationError.email,
      password: validationError.password,
    });
  }

  return (
    <div className="App">
      <div className="Login">
        <div>
          <div className="loginWord">LOGIN</div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInput}
            value={input.loginId}
            error={error.email}
          ></Input>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
            value={input.logintPassword}
            error={error.password}
          ></Input>
          <Link to="/home" className="loginButton" onClick={handleLoginButton}>
            LOGIN
          </Link>
          <p className="newuserWord">
            <Link to="/signup">New User? Register Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [btnStatus, setBtnStatus] = useState(true);
  const [selectedSeat, setSelectedSeat] = useState(false);
  const [seatPrice, setSeatPrice] = useState({});

  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignupComponent />} />
          <Route
            exact
            path="/home"
            element={
              <BookingComponent
                btnStatus={btnStatus}
                setBtnStatus={setBtnStatus}
                selectedSeat={selectedSeat}
                setSelectedSeat={setSelectedSeat}
                seatPrice={seatPrice}
                setSeatPrice={setSeatPrice}
                
              />
            }
          />
          <Route exact path="/payment" element={<PaymentSummary seatPrice={seatPrice} />}></Route>
          <Route exact path="/paymentcompleted" element={<Paymentcompleted seatPrice={seatPrice} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat}/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
