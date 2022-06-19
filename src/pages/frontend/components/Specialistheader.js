import React, { useState, useEffect } from 'react'
import {
    Form,
    Carousel,
    Button,
    FormControl,
    Modal,


} from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import boy from '../../../assets/boy.jpg'
import man from '../../../assets/man.jpg'
import women from '../../../assets/women.jpg'
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

function Specialistheader(props) {
    // console.log(props.data)
    // props is an object with data array of business owners and their details
    // const data=props.data.datas

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

                <div className='row'>

                    <div className='col-md-4'>
                        <Carousel
                            className='serviceSpace'
                            fade>
                            <Carousel.Item

                            >
                                <img
                                    className="d-block w-100 serviceImage"
                                    src={boy}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item

                            >
                                <img
                                    className="d-block w-100 serviceImage"
                                    src={women}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item

                            >
                                <img
                                    className="d-block w-100 serviceImage"
                                    src={man}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>


                    <div className=''>
                        <h3>data.mall</h3>

                        <span>529V+8MG, Harare</span>
                        <span> Opens: Monday-Saturday 8am to 6pm</span>
                        <span> and Closed on Sundays</span>
                        <span> Phone:0783803662</span>

                        <hr />
                        <a href='#'
                            className='specialistLink'
                        >
                            <h3>data.name</h3>
                        </a>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <span>Speciaility:data.category</span>
                            <span>Phone:data.phone</span>

                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <span>Rating:</span>

                            <div

                            >
                                <span
                                    style={{
                                        marginRight: '10px'
                                    }}
                                >Trading Currency: data.tradingcurrency</span>
                                <Button
                                    className='bookButton'
                                    onClick={() => handleOrder("data.category")}
                                >Book</Button>
                                <Button
                                    variant="danger"
                                    style={{
                                        marginLeft: '10px'
                                    }}
                                >Report</Button>
                            </div>
                        </div>
                        <hr />


                    </div>
                </div>





            </div>
            <hr />



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
                                                    marginTop: '200px'
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

export default Specialistheader