import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Headernotlogged(props) {
    const [headerColor, setheaderColor] = useState("#ffffff00")
    
    
    let changeBackground = () => {
        // console.log(window.scrollY)
        if (props.backgroundColor){
            setheaderColor("#ffffff");
        }else{
            if (window.scrollY >= 60) {
                setheaderColor("#ffffff");
    
            } else {
                setheaderColor("#ffffff00");
            }
        }

        

    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground)
        props.backgroundColor && setheaderColor("#ffffff") 
        console.log(headerColor)
    })

    return (
        <div style={{
            backgroundColor: ""
        }}>
            <header id="header" className="header fixed-top "
                style={{
                    backgroundColor: headerColor,
                
                    marginBottom: "2vw"
                  
                }}
            >
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between"> <a href="/"
                    className="logo d-flex align-items-center"> <img src="" alt="" />
                    <span>Bookme</span> </a>
                    <nav id="navbar" className="navbar">
                        {/* <ul>
                            <li><a className="" href="">Login</a> | <a className="" href="">Sign up</a> </li>
                        </ul> */}
                        
                         <div className=""
                         style={{
                             paddingRight:"10px"
                         }}
                         >
                         <Link className="" to="../login">Login</Link> | <Link className="" to="../register">Sign up</Link>
                         </div>
                    </nav>
                    
                </div>
            </header>
         
        </div>
    )
}

export default Headernotlogged