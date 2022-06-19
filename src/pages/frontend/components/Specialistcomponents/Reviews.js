import React, { useState } from 'react'
import {

    Button,


} from 'react-bootstrap'
import loading from '../../../../assets/images/headerloading.gif'
import { UploadsDomain } from '../../../../config/config';
function Reviews(props) {
    const [booking, setBooking] = useState(false)
    const [date, setDate] = useState(new Date());
    const [value, setValue] = useState(new Date('12:00'))
    const [service, setService] = useState([])

    return (


        <>
            {(props.reviews && props.number !== "1") &&
                props.reviews.map((review) => (
                    <>
                        <div className='row'
                            style={{ justifyContent: "space-around" }}
                        >
                            <div className='col-8'>
                                <div className='row'>
                                    <div className='col-4 d-flex justify-content-end' >
                                        <div
                                            style={{
                                                // backgroundColor: "grey",
                                                // borderRadius: "50px",

                                            }}
                                        >
                                            <img src={review.userData.prolifeurl ? UploadsDomain + review.userData.prolifeurl : loading}
                                                style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    borderRadius: "50px",
                                                }}
                                            ></img>
                                        </div>
                                    </div>
                                    <div className='col-8 '>
                                        <div className='row'>

                                            <div className='col-12 '>
                                                <span style={{ fontSize: "12px" }}>{review.userData.firstname}</span>
                                            </div>
                                            <div className='col-12 '
                                                style={{ height: "40px" }}
                                            >
                                                <span style={{ fontSize: "10px" }}>{review.review}</span>
                                                <span style={{ color: "GrayText", fontSize: "8px", float: "right" }}>{review.datecreated}</span>


                                            </div>




                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2'>

                                <div className="row">

                                    <div className='col-12 d-flex justify-content-start' >
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-12 d-flex justify-content-start'>
                                        {/* <Button className='bookButton' style={{ float: "right" }}
                                        // onClick={alert(key)}
                                        >

                                            Report
                                        </Button> */}
                                    </div>
                                </div>
                            </div>


                        </div>
                        <hr />
                    </>
                )

                )
            }
            {
                (props.reviews && props.number === "1") &&
                props.reviews.map((review, key) => {
                    if (key === 0) {
                        return (
                            <>
                                <div className='row'
                                    style={{ justifyContent: "space-around" }}
                                >
                                    <div className='col-8'>
                                        <div className='row'>
                                            <div className='col-4 d-flex justify-content-end' >
                                                <div
                                                    style={{
                                                        // backgroundColor: "grey",
                                                        // borderRadius: "50px",

                                                    }}
                                                >
                                                    <img src={review.userData.prolifeurl ? UploadsDomain + review.userData.prolifeurl : loading}
                                                        style={{
                                                            width: "60px",
                                                            height: "60px",
                                                            borderRadius: "50px",
                                                        }}
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className='col-8 '>
                                                <div className='row'>

                                                    <div className='col-12 '>
                                                        <span style={{ fontSize: "12px" }}>{review.userData.firstname}</span>
                                                    </div>
                                                    <div className='col-12 '
                                                        style={{ height: "40px" }}
                                                    >
                                                        <span style={{ fontSize: "10px" }}>{review.review}</span>
                                                        <span style={{ color: "GrayText", fontSize: "8px", float: "right" }}>{review.datecreated}</span>


                                                    </div>




                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-2'>

                                        <div className="row">

                                            <div className='col-12 d-flex justify-content-start' >
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className='col-12 d-flex justify-content-start'>
                                                {/* <Button className='bookButton' style={{ float: "right" }}
                                                // onClick={alert(key)}
                                                >

                                                    Report
                                                </Button> */}
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <hr />
                            </>
                        )
                    }

                }
                )


            }
        </>

    )
}

export default Reviews