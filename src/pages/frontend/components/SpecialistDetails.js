import React, { useState, useEffect } from 'react'
import {
    Form,
    Carousel,
    Button,
    FormControl,
    Modal,


} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import loading from '../../../assets/images/bg.png'
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import  {UploadsDomain} from '../../../config/config'
function SpecialistDetails(props) {
 
    // props is an object with data array of business owners and their details
    const data = props.data

    const [booking, setBooking] = useState(false)
    const [date, setDate] = useState(new Date());
    const [value, setValue] = useState(new Date('12:00'))

    const [service, setService] = useState([])

    const handleOrder = (serviceRequired) => {
        setService(serviceRequired)
        setBooking(true)

    }
    const handleOrderClose = () => { setBooking(false) }

    const handleDelete = () => {

    }
    const handleClick = () => {

    }

    return (
        <div>

            <div className='row'>

                {data &&
                    data.map((data) => {

                        return (
                            <div className='row'
                            
                            style={{
                                boxShadow: "0px 2px 6px rgba(1, 41, 112, 0.24)",
                                padding: "0.8rem",
                                borderRadius: "10px",
                                marginBottom: "10px"
                            }}
                            >

                                <div className='col-md-4'>
                                <img src={typeof data.profileimageurl === "undefined" ? loading : UploadsDomain + data.profileimageurl} className="" alt=""
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                            />
                                </div>


                                <div className='col-md-8'>
                                    <a href='#'
                                        className='specialistLink'
                                    >
                                        <h4

                                        >
                                         Mall:   {data.mall && data.mall.mall } 

                                        </h4>
                                    </a>

                                    <span
                                        style={{
                                            fontSize: '12px'
                                        }}
                                    > {data.city && data.city.cityid } </span>
                                    {/* <span
                                        style={{
                                            fontSize: '12px'
                                        }}
                                    > Opens: Monday-Saturday 8am to 6pm</span>
                                    <span
                                        style={{
                                            fontSize: '12px'
                                        }}
                                    > and Closed on Sundays</span>
                                    <span
                                        style={{
                                            fontSize: '12px'
                                        }}
                                    > Phone:0783803662</span> */}

                                    <hr />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <a href='#'
                                            className='specialistLink'
                                        >
                                            <h5>{data.name}</h5>
                                        </a>

                                        {/* <div>
                                            <StarIcon />
                                            <StarHalfIcon />
                                            <StarOutlineIcon />
                                        </div> */}
                                    </div>


                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            fontSize: '12px'
                                        }}
                                    >
                                        <span>Phone:{data.phone}</span> | <span>Home Services</span>

                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}
                                    >

                                        <span
                                            style={{
                                                marginRight: '10px',
                                                fontSize: '12px'
                                            }}
                                        ></span>
                                        <div

                                        >
                                            <Link className="" to={typeof data._id.$oid === "undefined" ? "#" : "../more/" + data._id.$oid}>
                                                <Button
                                                    className='bookButton'
                                                    onClick={() => handleOrder(data.category)}
                                                >More...</Button>
                                            </Link>
                                            <Button
                                                variant="danger"
                                                className='reportButton'
                                                style={{
                                                    marginLeft: '10px'
                                                }}
                                            >Report</Button>
                                        </div>
                                    </div>
                                    <hr />


                                </div>
                            </div>
                        )
                    })


                }




            </div>
        



            {/* modal */}
            <Modal show={booking} onHide={handleOrder}>
                <Modal.Header>
                    <Modal.Title>

                        <ArrowBackIcon onClick={() => setBooking(false)} />


                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >

                        <div className='row'
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}
                        >
                            <LocalizationProvider dateAdapter={AdapterDateFns}>

                                <Grid item xs={12} md={6}>
                                    <Stack
                                        direction={{ xs: 'row', sm: 'row' }}
                                        spacing={{ xs: 1, sm: 2, md: 4 }}
                                    >


                                        <CalendarPicker
                                            date={date}
                                            onChange={(newDate) => {
                                                setDate(newDate)
                                                console.log(newDate)
                                            }
                                            }
                                            className='calendar'

                                        />

                                        <div
                                            style={{
                                                marginTop: '30px'
                                            }}
                                        >

                                            <TimePicker
                                                renderInput={(params) => <TextField className='timePicker' {...params} />}
                                                label={<strong>Time</strong>}
                                                value={value}
                                                style={{
                                                    marginTop: '200px',
                                                }}
                                                onChange={(newValue) => {
                                                    setValue(newValue)
                                                    console.log(newValue)
                                                }}
                                            />
                                        </div>

                                    </Stack>
                                </Grid>


                            </LocalizationProvider>

                        </div>

                        <div
                            style={{
                                display: 'block',
                                position: 'absolute',
                                top: '310px'
                            }}
                        >

                            <Form.Label>Service Required</Form.Label>

                            <Stack
                                direction={{ xs: 'row', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 4 }}
                                style={{
                                    marginBottom: '5px'
                                }}
                            >

                                <Chip
                                    label={service}
                                    onClick={handleClick}
                                    onDelete={handleDelete}

                                />
                            </Stack>


                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >


                                <a href="#"><AddIcon /></a>

                                <a href="#"> <p>Add another Service</p> </a>

                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <br />
                <Modal.Footer>

                    <Button className='modalSearch' variant="primary" onClick={handleOrderClose}>
                        Book
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default SpecialistDetails