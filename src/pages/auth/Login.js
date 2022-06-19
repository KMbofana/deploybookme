import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../frontend/components/Header";
import { ApiDomain, token } from "../../config/config";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const [rememberPassword, setRememberPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const checkAuth = () => {
    if (token) {
      navigate("/")
    }

  }
  const loginUser = async () => {
    console.log("jjj")
    setEmailError(false);
    setPasswordError(false);
    setLoading(true);
    if (!email) {
      setEmailError(true);
      setLoading(false);
      return;
    }
    if (!password) {
      setPasswordError(true);
      setLoading(false);
      return;
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',

      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }

    try {
      const user = await fetch(`${ApiDomain}auth/login`, requestOptions)

        .then(response => response.json())
        .then(result => {
          if (result.status === 1) {
            // console.log(result.message)
            // console.log(result.status)
            console.log("result.data")
            window.localStorage.setItem(
              "user", JSON.stringify(result.data)
            )
            toast.success("Login in successfull");

            window.location.reload(false);
            // navigate("/");


          } else {
            toast.error(result.message);
          }
        }
        )
        .catch(error => {
          toast.error(error);
          console.log(error);
        })
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    checkAuth()
    console.log(token)
  })


  return (

    <div className=""
      style={{

      }}
    >

      <Header

        backgroundColor="blue"

      />

      <div className="wrapper auth-pos fadeInDown"
      >
        <div id="formContent">

          {/* <h2 className="active"> Sign In </h2> */}


          <div className="log" style={{
            marginTop: "41px"
          }}>
            <h4 className="active">Login</h4>
          </div>



          <div className="log form-floating">
            <input type="text" id="email" className="fadeIn form-control second" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <label for="email">Email</label>
          </div>
          <div className="log form-floating">
            <input type="password" id="password" className="fadeIn form-control third" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <label for="password">Password</label>
          </div>
          <div className="log">
            <input type="submit" className="fadeIn fourth" value="Login" onClick={() => loginUser()} />

          </div>


          <div id="">
            <Link className="underlineHover btn" to="../register">Sign Up</Link>|<Link className="underlineHover btn" to="../verify">Verify Account</Link>
          </div>


        </div>
      </div>
      <Toaster />
    </div>

  );
}

export default Login;
