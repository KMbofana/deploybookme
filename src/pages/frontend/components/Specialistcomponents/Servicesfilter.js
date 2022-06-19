import React, { useState, useEffect } from 'react'
import { ApiDomain, token, UploadsDomain } from '../../../../config/config';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import {

    Button,


} from 'react-bootstrap'
import Bookmodallist from './Bookmodallist';
import AddService from '../EditModals/AddService';
import loading from '../../../../assets/images/bg.png'
function Servicesfilter(props) {
    const [book, setBook] = useState(false)
    const [date, setDate] = useState();
    const [time, setTime] = useState()

    const [totalcost, setTotalcost] = useState(0)
    const [serviceBook, setService] = useState([])
    const [bookedbusiness, setbookedbusiness] = useState("")
    const [serviceid, setServiceid] = useState([])
    const baseURL = ApiDomain + "/api/getServiceByBusId?business=" + props.businessid;
    const [getResult, setGetResult] = useState([]);
    const [getLocalData, setLocalData] = useState(null)
    const [isLoading, setisLoading] = useState(true)

    const handleOrder = () => {

        setBook(true)



    }

    const reloadComponent = (data) => {

        setGetResult(data)
    }
    const AddMoreService = () => {
        setBook(false)
    }
    const handleOrderClose = () => {
        setBook(false)
        setServiceid([])
        setService([])
        setTotalcost(0)
    }

    console.log(totalcost)
    const addTime = (time) => {

        setTime(time)
    }
    const addDate = (date) => {

        setDate(date)
    }
    console.log(bookedbusiness)
    function bookService(servicess,business,service_id) {
        setBook(true)
        // console.log(servicess.price)
        if (!serviceid.includes(service_id)) {
        if(bookedbusiness === "" || bookedbusiness === business){
            setbookedbusiness(business)
            setServiceid([...serviceid, service_id])
            const cost = totalcost + parseFloat(servicess.price)
            setService([...serviceBook, servicess])
    
            setTotalcost(cost)
        }else{
            alert("you can only book services under one specialist")
            
        }}else{
            alert('already added')
        }
        
    }


    useEffect(() => {
        setLocalData(window.localStorage.user && JSON.parse(window.localStorage.user))
        console.log(window.localStorage.user && JSON.parse(window.localStorage.user))

        console.log(getResult)

    }, []);
    return (
        <div className='row ' style={{
            justifyContent: "center"

        }}>
            <div className='col-lg-10 col-md-10 col-sm-10'>
                <div

                    style={{
                        display: "flex",
                        flexDirection: "row"


                    }}
                >    <h5>Services Results</h5>

                </div>

            </div>


            {props.data && props.data.map((data) => {
                return (<div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className='row'
                        style={{
                            boxShadow: "0px 2px 6px rgba(1, 41, 112, 0.24)",
                            padding: "0.8rem",
                            borderRadius: "10px",
                            marginBottom: "10px"
                        }}
                    >
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <img src={typeof data.businessData.profileimageurl === "undefined" ? loading : UploadsDomain + data.businessData.profileimageurl} className="" alt=""
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                            />
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                            <div className='row'>
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
                                        <h5>{data.businessData.name}</h5>
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
                                    <span>Mall:{data.mall && data.mall.mall} |  </span>  <span>{data.city && data.city.cityid} </span> | <span>Phone:{data.businessData.phone}</span> | <span>Home Services</span>

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
                                    >
                                        {/* Trading Currency: {data.businessData.tradingcurrency} */}
                                    </span>

                                    <div

                                    >
                                        <Link className="" to={typeof data.businessid === "undefined" ? "#" : "../more/" + data.businessid}>
                                            <Button
                                                className='bookButton'
                                                onClick={() => handleOrder(data.businessData.category)}
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

                            </div>
                            {data.serviceData && data.serviceData.map((service) =>
                                <div className='row '
                                    style={{

                                        boxShadow: "0px 0px 2px rgba(1, 41, 112, 0.24)",
                                        marginTop: "0.8rem",
                                        marginBottom: "0.8rem",
                                        borderRadius: "0.25rem",
                                        padding: "2%",
                                    }}
                                >
                                    <div className='col-6'>
                                        <div className="row">
                                            <div className='col-4'>
                                                <span>{service.name}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className='col-4'>
                                                {/* <span>Phone:data.phone</span> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-4'>

                                        <div className="row">
                                            <div className='col-8'></div>
                                            <div className='col-4'>
                                                <span style={{ color: "GrayText", fontSize: "12px", float: "right" }}>${service.price}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className='col-8'></div>
                                            <div className='col-4'>
                                                <span style={{ color: "GrayText", fontSize: "12px", float: "right" }}>{service.duration}hrs</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-1'>

                                        {/* <button className="btn btn-sm bookButton" onClick={() => bookService(data._id.$oid)}


                             style={{
                                 zIndex: "2",

                                 color: "#ffffff",
                             }}
                         >
                             Book
                         </button> */}
                                        {service._id && (<Bookmodallist serviceid={service._id} businessid={service.businessid} onClick={() => bookService({ servicesID: service._id, serviceName: service.name, price: service.price, duration: service.duration },service.businessid,service._id)} modal={book} AddService={AddMoreService} handleOrderClose={handleOrderClose} addTime={addTime} addDate={addDate} services={serviceBook} totalcost={totalcost} time={time} date={date} />)

                                        }



                                    </div>

                                </div>
                            )}


                        </div>

                    </div>




                </div>)
            })}


        </div >
    )
}

export default Servicesfilter