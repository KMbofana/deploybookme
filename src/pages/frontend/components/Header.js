import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loginheader from './Loginheader';
import Headernotlogged from './Headernotlogged';
import {token} from '../../../config/config'

function Header(props) {
  
  

    return (
        <div style={{
            backgroundColor: ""
        }}>
            {token === "" ? (<Headernotlogged backgroundColor={props.backgroundColor} />) : (<Loginheader loggedin_user={token} backgroundColor={props.backgroundColor} />)}
           
       
        </div>
    )
}

export default Header