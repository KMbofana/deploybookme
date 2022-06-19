import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {
        Box, 
        Badge, 
        ListItem, 
        List, 
        Button,
        Avatar, 
        ListItemAvatar, 
        ListItemText, 
        DialogTitle,
        Dialog
        
    } from '@mui/material';
import PropTypes from 'prop-types';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import Notifications from './Notifications';
import Usersettings from './Specialistcomponents/Usersettings';
import { name } from '../../../config/config';
const emails = ['username@gmail.com', 'user02@gmail.com'];


function HandleNotifications(props){
    const { onClose, selectedValue, open } = props;
    

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };
    return(
        <Dialog
         onClose={handleClose} 
         open={open}
         style={{
             position:'absolute',
             bottom: '100px',
             left: 700,
         }}
        >
  <DialogTitle>Set backup account</DialogTitle>
  <List sx={{ pt: 0 }}>
    {emails.map((email) => (
      <ListItem button onClick={() => handleListItemClick(email)} key={email}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={email} />
      </ListItem>
    ))}

    <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
      <ListItemAvatar>
        <Avatar>
          <AddIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Add account" />
    </ListItem>
  </List>
</Dialog>
    )
}


function Loginheader(props) {
    const [headerColor, setheaderColor] = useState("#ffffff00")

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
    };

    

    const logout = () => {
        window.localStorage.clear()
        window.location.reload(false);
    };

    
    
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
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between"> <Link to="/"
                    className="logo d-flex align-items-center"> <img src="" alt="" />
                    <span>Bookme</span> </Link>
                    <nav id="navbar" className="navbar">
                        {/* <ul>
                            <li><a className="" href="">Login</a> | <a className="" href="">Sign up</a> </li>
                        </ul> */}
                        <Link className="headermobile" to="#">{name && name} |</Link>  
                         <Notifications/>
                         <div className=""
                         style={{
                             paddingRight:"10px",
                             display:"flex",
                             flexDirection:"row"
                             
                         }}
                         >
                          
                            
                        <Usersettings /> 
                        <button 
                        style={{
                            marginLeft:"5px",
                            backgroundColor:"#ffffff"
                        }}
                         onClick={logout}>Logout
                         </button>
                       
                         </div>
                        
                    </nav>
                </div>
            </header>
         
        </div>
    )
}

export default Loginheader