import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../frontend/components/Header";
import { ApiDomain } from "../../config/config";
import toast, { Toaster } from 'react-hot-toast';
import PersonIcon from '@mui/icons-material/Person';


function Register() {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [validate, setValidate] = useState("")
  const navigate = useNavigate()
  const compare = (e) => {
    // console.log(confirm)
    setConfirm(e.target.value)



  }
  const saveSettings = () => {

  }

  const registerUser =  () => {



    if (password !== confirm) {
      console.log("not similar")
      toast.error("Passwords do not match");
    }
    else if (password == confirm) {



      var requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fName: fullName,
          email: email,
          password: password,
        }),
        mode:"no-cors",
        redirect: 'follow'
      };

      // console.log(registrationDetails)
      let message = ""
      toast.promise( 
       fetch(`${ApiDomain}auth/register`, requestOptions)
        .then(response =>
          response.json()
          // console.log(response)
        )
        .then(result => {
          // const message = result.message
          console.log(result)
          if (result.status === 1) {
            message = result.message
            navigate("/verify");
          } else {
            message = result.message
          }



        })
        .catch((error) => {
          message = error
          
          console.log(error)
        }),
        {
          loading: 'Registering...',
          success: <b>{message}</b>,
          error: <b>{message}</b>,
        }


    



  )
}




  }
return (
  <div>

    <Header />

    <div className="wrapper reg-pos fadeInDown">
      <div id="formContent">

        {/* <h2 className="active"> Sign In </h2> */}


        <div className="" style={{
          marginTop: "10px"
        }}>
          <h4 className="active">Register</h4>
        </div>
        <br />

        <div className="log form-floating">
          <input type="text" id="fullname" className="fadeIn form-control second" name="" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} />
          <label for="fullname">Full Name</label>
        </div>

        <div className="log form-floating">
          <input type="text" id="email" className="fadeIn form-control second" name="" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <label for="email">Email</label>
        </div>

        <div className="log form-floating">
          <input type="password" id="Password" className="fadeIn form-control second " name="" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <label for="Password">Password</label>
        </div>
        <div className="log form-floating">
          <input type="password" id="Confirm" className={"fadeIn form-control second " + { validate }} name="" placeholder="Confirm Password" onChange={(e) => setConfirm(e.target.value)} />
          <label for="Confirm">Confirm Password</label>
        </div>


        <div className="log">
          <input type="submit" className="fadeIn fourth" value="Register" onClick={() => registerUser()} />

        </div>


        <div id="">
          <Link className="underlineHover btn" to="../login">Login</Link>|<Link className="underlineHover btn" to="../verify">Verify Account</Link>
        </div>


      </div>
    </div>
    <Toaster />
  </div>
)
}

export default Register