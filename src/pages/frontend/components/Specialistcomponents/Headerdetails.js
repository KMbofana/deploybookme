import React, { useState, useEffect } from 'react'
import {

    Button,


} from 'react-bootstrap'
import {
    FacebookOutlined,
    Smartphone,
    Home,
    Face,
    Twitter,
    EmailOutlined,
    Verified,
    WhatsApp,
    Instagram,
    ThumbDown,
    ThumbUp,
    CategoryOutlined,
    DirectionsRunOutlined,
    DoneAllOutlined,
    MusicNote
} from "@mui/icons-material";
import EditingBusinessUser from "../EditModals/EditingBusinessUser"
import { Link } from 'react-router-dom';
import Reviews from './Reviews';
import AddReview from '../EditModals/AddReviews';
import ViewReviews from '../EditModals/ViewReviews';

function Headerdetails(props) {
    const data = props.data
    const hahaha = () => {  }

    return (


        <div className="row">
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <div

                    style={{
                        display: "flex",
                        flexDirection: "row",
                        float: "right"


                    }}
                ><small style={{}}>homeservice
                        {props.data.homeservice == "yes" ? (
                            <Verified style={{

                                width: "15px",
                                height: "15px",

                                color: "green",
                            }} />) : (<span style={{ fontSize: "9px" }}> Not Available </span>)



                        }


                    </small>
                    {props.data.length !== 0 && (window.localStorage.user && JSON.parse(window.localStorage.user)._id === props.data.userID) ? (<EditingBusinessUser id={props.id} onChange={props.onChange} data={props.data.length !== 0 && props.data} edit="others" />) : ""}


                </div>

                <div

                    style={{
                        display: "flex",
                        flexDirection: "row",


                    }}
                >
                    <h5>About Us</h5>

                    {props.data.length !== 0 && (window.localStorage.user && JSON.parse(window.localStorage.user)._id === props.data.userID) ? (<EditingBusinessUser id={props.id} onChange={props.onChange} category={props.category} loadCat={props.loadCat} data={props.data.length !== 0 && props.data} edit="aboutus" />) : ""}

                </div>

                <div
                    className=""
                    style={{

                        display: "flex",
                        flexDirection: "column",
                    }}
                >

                    <span className="" style={{
                        color: "",
                        fontSize: "14px"
                    }}><b>{data !== null && data.name !== "" ? data.name : "no name"} </b></span>



                    <span className="lead text-muted" style={{
                        fontSize: "12px"
                    }}>{data !== null && data.address !== "" ? data.address : "no address"}</span>

                    <span className="lead text-muted" style={{
                        fontSize: "12px"
                    }}>{data !== null && data.bio !== "" ? data.bio : "no bio"}</span>
                    {props.data.phone !== null && (<span className="lead text-muted" style={{ fontSize: "12px", color: "#000000" }}>Phone Number : {props.data.phone}</span>)}




                </div>


                <div

                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "10px",
                        justifyContent: "center"

                    }}
                >
                    {/* <h6>Social Media</h6> */}


                </div>
                <div
                    className=""
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "23px",
                        justifyContent: ""
                    }}
                >

                    {props.data.social !== null &&
                        props.data.social.instagram &&
                        (<a href={`https://instagram.com/${props.data.social.instagram}`} target="_blank">
                            <div

                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    boxShadow: " 0 5px 8px rgba(63,81,181,0.50)",
                                    background: "#ffc107",
                                    background: "linear-gradient(to right,#ffc107 0%,#f50057 50%,#3f51b5 100%)",
                                    backgroundSize: "400%",
                                    borderRadius: "34px"
                                }}
                            >


                                <Instagram style={{

                                    width: "25px",
                                    height: "25px",

                                    color: "#ffffff",
                                }} />

                            </div>
                        </a>


                        )
                    }
                    {props.data.social !== null &&
                        props.data.social.facebook &&
                        (<a href={`https://facebook.com/${props.data.social.facebook}`} target="_blank">
                            <div

                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    boxShadow: " 0 5px 8px rgba(63,81,181,0.50)",
                                    background: "#3949ab",
                                    background: "linear-gradient(to right,#3949ab 0%,#2196f3 100%)",
                                    backgroundSize: "400%",
                                    borderRadius: "34px"

                                }}
                            >


                                <FacebookOutlined style={{

                                    width: "25px",
                                    height: "25px",

                                    color: "#ffffff",
                                }} />

                            </div>
                        </a>


                        )
                    }
                    {props.data.social !== null &&
                        props.data.social.twitter &&
                        (<a href={`https://twitter.com/${props.data.social.twitter}`} target="_blank">
                            <div

                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    boxShadow: "0 5px 8px rgba(33,150,243,0.50)",
                                    background: "#00bcd4",
                                    background: "linear-gradient(to right,#00bcd4 0%,#2196f3 100%)",
                                    backgroundSize: "400%",
                                    borderRadius: "34px"
                                }}
                            >


                                <Twitter style={{

                                    width: "25px",
                                    height: "25px",

                                    color: "#ffffff",
                                }} />

                            </div>
                        </a>


                        )
                    }
                    {props.data.social !== null &&
                        props.data.social.whatsapp &&
                        (<a href={`https://wa.me/${props.data.social.whatsapp}?text= I%20saw%20your%20business%20profile%20on%20bookme`} target="_blank">
                            <div

                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    boxShadow: " 0 5px 8px rgba(63,81,181,0.50)",
                                    background: "#ffc107",
                                    background: "linear-gradient(to right, rgb(7 255 48) 0%, rgb(12 86 31) 50%, rgb(63, 81, 181) 100%) 0% 0% / 400%",
                                    backgroundSize: "400%",
                                    borderRadius: "34px"
                                }}
                            >


                                <WhatsApp style={{

                                    width: "25px",
                                    height: "25px",

                                    color: "#ffffff",
                                }} />

                            </div>
                        </a>


                        )
                    }
                    {props.data.social !== null &&
                        props.data.social.tiktok &&
                        (<a href={`https://tiktok.com/@${props.data.social.tiktok}`} target="_blank">
                            <div

                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    boxShadow: " 0 5px 8px rgba(63,81,181,0.50)",
                                    background: "#ffc107",
                                    background: "linear-gradient(to right,#ffc107 0%,#f50057 50%,#3f51b5 100%)",
                                    backgroundSize: "400%",
                                    borderRadius: "34px"
                                }}
                            >


                                <MusicNote style={{

                                    width: "25px",
                                    height: "25px",

                                    color: "#ffffff",
                                }} />

                            </div>
                        </a>


                        )
                    }
                    {props.data.length !== 0 && (window.localStorage.user && JSON.parse(window.localStorage.user)._id === props.data.userID) ?
                        (

                            <div

                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                }}>
                                <EditingBusinessUser id={props.id} onChange={props.onChange} data={props.data.length !== 0 && props.data} edit="socialmedia" />

                            </div>)
                        : ""}





                </div>


                <button className="btn btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    <span style={{ fontSize: "9px" }}><i>Click to veiw Business Hours</i> </span>
                </button>


                {props.data.businesshrs !== null &&

                    (
                        <div className="collapse collapse-vertical" id="collapseWidthExample">
                            <div
                                className=""
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    fontSize: "10px",
                                    boxShadow: "0px 2px 20px rgba(1, 41, 112, 0.1)",
                                    borderRadius: "10px",
                                    padding: "10px"
                                    // justifyContent: "space-between"
                                }}
                            >
                                <div
                                    className=""
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        justifyContent: "space-between"
                                    }}
                                >

                                    {props.data.length !== 0 && (window.localStorage.user && JSON.parse(window.localStorage.user)._id === props.data.userID) ? (<EditingBusinessUser id={props.id} onChange={props.onChange} data={props.data.length !== 0 && props.data} edit="businesshours" />) : ""}
                                </div>

                                {props.data.businesshrs !== null && (
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between"

                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "45%"
                                            }}
                                        >

                                            <div

                                                style={{
                                                    // //display: "flex",
                                                    flexDirection: "row",
                                                    flexWrap: "wrap",
                                                    marginRight: "5px"
                                                }}
                                            >

                                                <small style={{ color: "#000000" }}>Sunday  </small><small style={{ color: "#000000", float: "right" }}>({props.data.businesshrs.sunday.open} - {props.data.businesshrs.sunday.closed})</small>

                                            </div>

                                            <div

                                                style={{
                                                    //display: "flex",
                                                    flexDirection: "row",
                                                    flexWrap: "wrap",
                                                    marginRight: "5px"
                                                }}
                                            >


                                                <small style={{ color: "#000000" }}>Monday </small><small style={{ color: "#000000", float: "right" }}>({props.data.businesshrs.monday.open} - {props.data.businesshrs.monday.closed})
                                                </small>
                                            </div>
                                            <div

                                                style={{
                                                    //display: "flex",
                                                    flexDirection: "row",
                                                    flexWrap: "wrap",
                                                    marginRight: "5px"
                                                }}
                                            >


                                                <small style={{ color: "#000000" }}>Tuesday </small><small style={{ color: "#000000", float: "right" }}>({props.data.businesshrs.tuesday.open} - {props.data.businesshrs.tuesday.closed})
                                                </small>
                                            </div>
                                            <div

                                                style={{
                                                    //display: "flex",
                                                    flexDirection: "row",
                                                    flexWrap: "wrap",
                                                    marginRight: "5px"
                                                }}
                                            >

                                                <small style={{ color: "#000000" }}>Wednesday </small><small style={{ color: "#000000", float: "right" }}>({props.data.businesshrs.wednesday.open} - {props.data.businesshrs.wednesday.closed})
                                                </small>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "45%"
                                            }}
                                        >
                                            <div

                                                style={{
                                                    //display: "flex",
                                                    flexDirection: "row",
                                                    flexWrap: "wrap",
                                                    marginRight: "5px"
                                                }}
                                            >

                                                <small style={{ color: "#000000" }}>Thursday </small><small style={{ color: "#000000", float: "right" }}>({props.data.businesshrs.thursday.open} - {props.data.businesshrs.thursday.closed})
                                                </small>
                                            </div>
                                            <div

                                                style={{
                                                    //display: "flex",
                                                    flexDirection: "row",
                                                    flexWrap: "wrap",
                                                    marginRight: "5px"
                                                }}
                                            >

                                                <small style={{ color: "#000000" }}>Friday </small><small style={{ color: "#000000", float: "right" }}>({props.data.businesshrs.friday.open} - {props.data.businesshrs.friday.closed})
                                                </small>
                                            </div>
                                            <div

                                                style={{
                                                    //display: "flex",
                                                    flexDirection: "row",
                                                    flexWrap: "wrap",
                                                    marginRight: "5px"
                                                }}
                                            >

                                                <small style={{ color: "#000000" }}>Saturday </small><small style={{ color: "#000000", float: "right" }}>({props.data.businesshrs.saturday.open} - {props.data.businesshrs.saturday.closed})
                                                </small>
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                    )
                }


               
                  
                     
                   
              
            </div>



        </div >
    )
}

export default Headerdetails