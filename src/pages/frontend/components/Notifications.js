import React,{useState, useEffect} from 'react'
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Badge} from '@mui/material';
import  {ApiDomain} from '../../../config/config'
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import {Link} from 'react-router-dom';
import { token } from '../../../config/config';


function Notifications() {
    const [notificationsData, setNotificationsData]=useState([])
    const [services, setServices]=useState([])
    // const [toOrderPage, setToOrderPage]=useState()

    const user_id=JSON.parse(window.localStorage.user)
    // console.log(user_id._id)

    const getNotifications= async ()=>{

        

        // const notices=["Haircut","Braids", "Peddicure"]
        // setNotificationsData(notices)
        // console.log(notificationsData)

        
        
        var requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              application: 'application/json',
              'Authorization': `Bearer ${token ? token : "none"}`
            },
            body: JSON.stringify({
              id: '',
            }),
            mode:"no-cors",
            redirect: 'follow'
          };

          await fetch(`${ApiDomain}api/notifications`,requestOptions)
            .then((result)=>{
                // console.log(result)
                return result.json()
            })
            .then((data)=>{
                setNotificationsData(data.data)
                

                const retrieved=data.data

                retrieved.map((rd)=>{
                    // setNotificationsData(rd)
                    setServices(rd.services)
                    // console.log(rd.services)
                })
                
            
            })
            .catch((error)=>{
                console.log(error)
            })


    }

    useEffect(() => {
     getNotifications()
     console.log(notificationsData)
    }, [])
    

  return (
    
        <Menu 
            menuButton={<MenuButton
                style={{
                    borderStyle:'none',
                    backgroundColor:'transparent',
                    // paddingRight:'50px'

                }}
            >
                <Badge badgeContent={0}>
                    <NotificationsNoneIcon onClick={()=>{getNotifications()}} />
                </Badge>
            </MenuButton>}
         transition       
         
         >
     
               
                    {
                        notificationsData.length !=0 ? 
                        
                         (

                                <div
                                style={{
                                    display:'flex',
                                    flexDirection:'column'
                                }}
                                >

                                  

                             
                                
                                        {notificationsData &&
                                        
                                            notificationsData.map((time)=>
                                               <>

                                               <MenuItem
                                                    style={{
                                                        width:'400px',
                                                        height:'100px',
                                                        display:'flex', 
                                                        flexDirection:'row', 
                                                        justifyContent:'space-between'
                                                    }}
                                                >
                    
                                            <div
                                                style={{
                                                    display:'flex',
                                                    flexDirection:'column'
                                                }}
                                            >
                              
                                                   <div>

                                                        <p>
                                                          {time.time}
                                                        </p>
                                                       
                                                   </div>

                                                {
                                                    
                                                    notificationsData[0].services.map((f)=>{
                                                        return(
                                                            <Chip
                                                                label={f.serviceName}
                                                                style={{
                                                                    marginLeft:'2px',
                                                                    marginBottom:'5px',
                                                                    fontSize:'10px'
                                                                }}
                                                            />
                                                         
                                                        )
                                                    })  
                                                }
                                               
                                </div>
                               
                                    <div
                                        style={{
                                            display:'flex',
                                            justifyContent:'flex-end'
                                        }}
                                    >
                                        <Link
                                            to='/order'
                                            state={notificationsData}
                                        >

                                            ... More
                                        </Link>

                                    </div>
                            
                            </MenuItem>

                                                </>
                                            )
                                        }
                            </div>  
                                               
                             

                                
                           
                         )
                        
                        :(
                            <MenuItem
                                style={{
                                    width:'400px',
                                    height:'100px'
                                }}
                                >
                            <h4>No notifications yet!!</h4>
                           
                            </MenuItem>
                            )
                    }
        </Menu>
    
  )
}

export default Notifications