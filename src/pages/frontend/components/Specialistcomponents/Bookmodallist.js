import React, { useState, useEffect } from 'react'
import {
    Button,
    Modal,


} from 'react-bootstrap'
import toast, { Toaster } from 'react-hot-toast';
import { ApiDomain, token } from '../../../../config/config';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Bookmodallist(props) {


    const modal = props.modal && props.modal
    console.log(props.services.length)

    const [booking, setBooking] = useState(false)
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date('12:00'))



    const [service, setService] = useState([])

    const handleOrder = (serviceRequired) => {

        if (token) {
            props.onClick()
            setService(serviceRequired)
            setBooking(true)
        } else {
            alert("Oops! you are not logged in,Please Login or Sign Up to continue")
        }


    }
    const addTime = (time) => {
        alert(time)
        props.addTime(time)
    }
    const addDate = (date) => {
        props.addDate(date)
    }
    const handleOrderClose = () => { setBooking(false) }

    const handleDelete = () => {

    }
    const handleClick = () => {

    }
    const submitted = async () => {
        console.log("jjj")
        // setnameError(false);
        // if (!name) {
        //     setnameError(true);
        //     setLoading(false);
        //     return;
        // }


        const business = props.businessid
        const user = "6267c25cb6438b1e0decfa12"
        const services = props.services
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token ? token : "none"}`

            },

            body: JSON.stringify({
                service: services,
                date: props.date,
                time: props.time,
                user: user,
                totalcost: props.totalcost,
                business: business,
            })
        }

        try {
            const user = await fetch(`${ApiDomain}api/addbook`, requestOptions)

                .then(response => response.json())
                .then(result => {
                    if (result.status === 1) {
                        console.log(result.message)

                        // setWhat(false);
                        toast.success(result.message);
                        // window.location.reload(false);
                        handleOrderClose()

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
        // setBooking(props.modal)
    })

    return (
        <div>
            <button className='btn btn-sm bookButton'
                onClick={() => {
                    props.onClick()
                    handleOrder()
                }

                }

                style={{
                    zIndex: "2",
                    borderRadius: "21px",
                    color: "#ffffff",
                }}
            >Book</button>

            {/* modal */}
            <Modal show={booking} >
                <Modal.Header>
                    <Modal.Title>
                        <button className="btn btn-sm" onClick={() => {
                            handleOrderClose()
                            props.handleOrderClose()
                        }}>
                            <ArrowBackIcon />
                        </button>



                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <div className=''
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            marginBottom: "5px"
                        }}
                    >

                        <div className="form-floating">
                            <input type="date" value={props.date} className="form-control" style={{ width: "100%" }}
                                onChange={(e) => props.addDate(e.target.value)}
                                id="date"

                            />
                            <label for="date">Date</label>

                        </div>
                        <div className="form-floating">
                            <input type="time" value={props.time} className="form-control" style={{ width: "100%" }}

                                onChange={(e) => props.addTime(e.target.value)}
                                id="time"
                            />
                            <label for="time">Time</label>

                        </div>
                    </div>
                    {props.services[0] && props.services.map(service =>

                    (
                        <div className='card card-body'>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",

                                }}
                            >

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flexWrap: "wrap",
                                        float: "left",
                                        fontSize: "12px"
                                    }}
                                >
                                    <span>{service.serviceName}</span>
                                    <span>Price: {service.price}</span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flexWrap: "wrap",
                                        float: "right",
                                        fontSize: "12px"
                                    }}
                                >
                                    <span>Duration: {service.duration}</span>
                                    {/* <span>10:00am - 12:00am</span> */}
                                </div>
                            </div>



                        </div>

                    )
                    )}
                    <div
                        style={{
                            marginTop: "10px",
                        }}
                    >
                        <div style={{
                            float: "right",
                            fontSize: "12px"
                        }}>Total Cost {props.totalcost}</div>



                        <div
                            style={{
                                float: 'left',


                            }}
                        >

                            {/* <Form.Label>Service Required{props.services}</Form.Label> */}



                            <button className="btn btn-sm"
                                style={{
                                    backgroundColor: "#33B5BD",
                                    color: "#ffffff",
                                    fontSize: "11px"
                                }}
                                onClick={() => {
                                    props.AddService()
                                    handleOrderClose()
                                }

                                }>Add another Service </button>


                        </div>
                    </div>

                </Modal.Body>

                <Modal.Footer>

                    <Button className='modalSearch' variant="primary" onClick={submitted}>
                        Book
                    </Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div >

    )
}

export default Bookmodallist