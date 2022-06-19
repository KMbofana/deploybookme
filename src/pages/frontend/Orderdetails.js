import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import {
    Carousel,
  } from 'react-bootstrap'
import imgT from '../../assets/man.jpg'
import { useLocation} from 'react-router-dom'
import Chip from '@mui/material/Chip';
import {ApiDomain} from '../../config/config'
import Button from 'react-bootstrap/Button'
import toast, { Toaster } from 'react-hot-toast';

function Orderdetails() {
    const location=useLocation()
    const data=location.state
    
    const [services, setServices]=useState([])
    // console.log(data)


    useEffect(() => {
        data.map((t)=>{
            setServices(t.services)
    
            console.log(t.services)
        })
    }, [])

    const reserveOrder=()=>{

        var requestOptions={
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              application:'application/json'  
            },
            body:JSON.stringify({
                name:'customerName',
                orderstatus:'reserved'
            })
        }

        fetch(`${ApiDomain}api/reserve`,requestOptions)
        .then((response)=>{
         
            // console.log(response)
            return response.json()
        })
        .then((data)=>{
        
            console.log(data)
            data.orderstatus === 1 ? toast.success(data.msg) : toast.error(data.msg)
        })
        .catch((error)=>
        console.log(error)
        )


    }

    const revokeOrder=()=>{

        var requestOptions={
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                application:'application/json'
            },
            body:JSON.stringify({
                name:'clientName',
                orderStatus:'revoked'
            }),
            redirect:'follow'
        }

        fetch(`${ApiDomain}api/revoke`, requestOptions)
        .then((response)=>{
            console.log(response)
            return response.json()
        })
        .then((result)=>{

            console.log(result.orderstatus)
            result.orderstatus === 1 ? toast.success(result.msg) : toast.error(result.msg)
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }


  return (
    <div>
         

        <Header backgroundColor="#ffffff" />
            <div className='spebody'
            >
                <div className='row' style={{
                    marginBottom: "20px",
                    justifyContent: "space-between",
                    background: "#ffffff",
                    borderRadius: "17px",
                    padding: "18px",
                    boxShadow: "0px 2px 20px rgba(1, 41, 112, 0.1)"
                }} >
                    <div className='col-lg-5 col-md-6 col-sm-12'>

                        <Carousel>
                            <img
                                className="d-block  moreCarousel"
                                src={imgT}
                                alt="First slide"
                            />
                       
                        </Carousel>
                        
             
                      
                    </div>
                    <div className='col-lg-6  col-md-6 col-sm-12'
                        style={{ marginTop: "26px" }}
                    >
                        <h4>Customer Name</h4>
                     
                        <h5>Services Required</h5>
                        <div
                        style={{
                            display:'flex',
                            flexDirection:'row',
                            flexWrap:'wrap',
                            
                            }}
                        >

                            {services && 
                                services.map((service)=>{
                                    return(
                                            
                                            <>
                                                <Chip
                                                label={service.serviceName} 
                                                style={{
                                                            marginLeft:'2px',
                                                            marginBottom:'5px',
                                                            fontSize:'10px'
                                                        }}

                                                />
                                                <h5>Total Cost: ${service.price}</h5>
                                            </>
                                )
                                }
                                )
                            }
                        </div>
                        
                        <div
                            style={{
                                display:'flex',
                                justifyContent:'flex-end'
                            }}
                        >
                            <Button
                            variant="primary"
                                style={{
                                    marginLeft:'5px'
                                }}
                                onClick={()=>reserveOrder()}
                            >Reserve</Button>
                            <Button
                            
                            variant="danger"
                                style={{
                                    marginLeft:'5px',
                                    
                                }}
                                onClick={()=>revokeOrder()}
                            >Revoke</Button>
                        </div>
                    </div>
                </div>
            

        </div>

        <Toaster />
    </div>
  )
}

export default Orderdetails