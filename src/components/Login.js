import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [issignup, setIssignup] = useState(true);
  const [errmessage, setErrMessage] = useState(null);
  const navigate = useNavigate()
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();

    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidate(email.current.value, password.current.value);
    setErrMessage(message);

    if (message) return;

    if (!issignup) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user)
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode+' '+errmessage)
          navigate('/')
          // ..
        });
    } else {

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode+' '+errmessage)
    
  });
    }
  };

  const toggleIssignup = () => {
    setIssignup(!issignup);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-"
        ></img>
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2">
          {issignup ? "Sign In" : "Sign Up"}
        </h1>
        {!issignup && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 my-2 w-full bg-gray-800"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-800"
        />
        <p className="text-red-500 p-2 font-bold text-lg">{errmessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-2 my-4 bg-red-700 w-full rounded-sm"
        >
          {issignup ? "Sign In" : "Sign up"}
        </button>
        <p className="cursor-pointer" onClick={toggleIssignup}>
          {issignup
            ? "New to Netflix? Sign up Now"
            : "Already have account? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
