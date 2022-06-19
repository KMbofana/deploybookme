import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../frontend/components/Header";
import { ApiDomain } from "../../config/config";
import toast, { Toaster } from 'react-hot-toast';

function VerifyAccount() {
  const [rememberPassword, setRememberPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const loginUser = async (event) => {
    console.log("jjj")
    setEmailError(false);
    setCodeError(false);
    setLoading(true);
    // alert(event)
    if (event === 'resend') {
      if (!email) {
        setEmailError(true);
        setLoading(false);
        alert("input your email" )
        return;
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',

        },
        body: JSON.stringify({
          email: email,
          // code: code
        })
      }

      try {
       
        const user = await fetch(`${ApiDomain}auth/verifyresend`, requestOptions)

          .then(response => response.json())
          .then(result => {
            if (result.status === 1) {
              // console.log(result.message)
              // console.log(result.status)
              // console.log("result.data")
              // window.localStorage.setItem(
              //   "user", JSON.stringify(result.data)
              // )
              toast.success(result.message);
              navigate("/verify");
              // window.location.reload(false);



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
    } else {
      if (!email) {
        setEmailError(true);
        setLoading(false);
        return;
      }
      if (!code) {
        setCodeError(true);
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
          code: code
        })
      }

      try {
        const user = await fetch(`${ApiDomain}auth/verify`, requestOptions)

          .then(response => response.json())
          .then(result => {
            if (result.status === 1) {
              // console.log(result.message)
              // console.log(result.status)
              console.log("result.data")
              // window.localStorage.setItem(
              //   "user", JSON.stringify(result.data)
              // )
              toast.success("verification in successfull");
              navigate("/login");
              // window.location.reload(false);



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
  }




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
            <h4 className="active">Verification</h4>
          </div>



          <div className="log form-floating">
            <input type="text" id="email" className="fadeIn form-control second" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <label for="email">Email</label>
          </div>
          <div className="log form-floating">
            <input type="code" id="code" className="fadeIn form-control third" name="code" placeholder="code" onChange={(e) => setCode(e.target.value)} />
            <label for="code">Code</label>
          </div>
          <div className="log">
            <input type="submit" className="fadeIn fourth" value="Verify" onClick={() => loginUser()} />

          </div>


          <div id="">
            <a className="underlineHover btn" href="#" onClick={() => loginUser("resend")}>Resend Code?</a>
          </div>


        </div>
      </div>
      <Toaster />
    </div>

  );
}

export default VerifyAccount;
