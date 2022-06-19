import React, { useState, useEffect } from 'react'
import { ApiDomain, token } from '../../../../config/config';
import Pagination from '@mui/material/Pagination';
import {

    Button,


} from 'react-bootstrap'
import Bookmodal from './Bookmodal';
import AddService from '../EditModals/AddService';
function Services(props) {
    const [book, setBook] = useState(false)
    const [date, setDate] = useState();
    const [time, setTime] = useState()
 
    const [totalcost, setTotalcost] = useState(0)
    const [service, setService] = useState([])
    const [serviceid, setServiceid] = useState([])
    const [totalrecord, settotal] = useState(0)
    const [getResult, setGetResult] = useState([]);
    const [getLocalData, setLocalData] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [offset, setoffset] = useState(0);
    // const baseURL = ApiDomain + "/api/getServiceByBusId?business=" + props.businessid+"&offset="+page+"&limit=10";
    const handleChange = (event, value) => {
         if(value === 1){
            setPage(value);
         }else{
            setPage(value*10);  
         }
        
        getAllData() 
    };
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
        setService([])
        setServiceid([])
        setTotalcost(0)
    }

    console.log(totalcost)
    const addTime = (time) => {

        setTime(time)
    }
    const addDate = (date) => {

        setDate(date)
    }


    console.log()
    function bookService(servicess, service_id) {
        if (!serviceid.includes(service_id)) {
            setBook(true)
            setServiceid([...serviceid, service_id])
            const cost = totalcost + parseFloat(servicess.price)
            setService([...service, servicess])

            setTotalcost(cost)
        } else {
            alert('already added')
        }

    }
    async function getAllData(event, value) {
        let offset = 0
        // const data = window.localStorage.user && JSON.parse(window.localStorage.user)
        setPage(value);
        if(value === 1){
            offset = 0
        }else{
            offset = (value-1) * 5 
        }
        // const token = token
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token ? token : "none"}`, // notice the Bearer before your token
            },
            // mode:"no-cors"
            // redirect: 'follow'
        };

        await fetch(ApiDomain + "/api/getServiceByBusId?business=" + props.businessid+"&offset="+offset+"&limit=5", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 1) {
                    setisLoading(false)
                    setGetResult(result.data)
                    // if(result.totalrecords/10)
                    settotal(Math.ceil(result.totalrecords/5))
                    // setoffset(result.offset * 10)
                    
      
                } else {
                    setisLoading(false)
                }

            })

            .catch(error => console.log('error', error));

    }

    useEffect(() => {
        setLocalData(window.localStorage.user && JSON.parse(window.localStorage.user))
        console.log(window.localStorage.user && JSON.parse(window.localStorage.user))
        getAllData("", 1)
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
                >    <h4>My Services</h4>
                    {window.localStorage.user && JSON.parse(window.localStorage.user)._id === props.userID ? (<AddService id={props.businessid} onChange={reloadComponent} edit="others" />) : ""}

                </div>

            </div>


            {getResult && getResult.map((data) => {

                return (<div className='col-lg-10 col-md-10 col-sm-10'>


                    <div className='row '
                        style={{

                            // boxShadow: "rgb(1 41 112 / 22%) 0px 1px 3px",
                            border:"solid 0.20px #d2cfcf",
                            marginBottom: "0.8rem",
                            borderRadius: "0.25rem",
                            padding: "1rem 1rem"
                        }}
                    >
                        <div className='col-6'>
                            <div className="row">
                                <div className='col-4'>
                                    <span>{data.name}</span>
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
                                    <span style={{ color: "GrayText", fontSize: "12px", float: "right" }}>${data.price}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-8'></div>
                                <div className='col-4'>
                                    <span style={{ color: "GrayText", fontSize: "12px", float: "right" }}>{data.duration}hrs</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-2'>

                            {/* <button className="btn btn-sm bookButton" onClick={() => bookService(data._id.$oid)}


                                style={{
                                    zIndex: "2",

                                    color: "#ffffff",
                                }}
                            >
                                Book
                            </button> */}
                            {data._id.$oid && (<Bookmodal serviceid={data._id.$oid} businessid={props.businessid} onClick={() => bookService({ servicesID: data._id.$oid, serviceName: data.name, price: data.price, duration: data.duration }, data._id.$oid)} modal={book} AddService={AddMoreService} handleOrderClose={handleOrderClose} addTime={addTime} addDate={addDate} services={service} totalcost={totalcost} time={time} date={date} />)

                            }



                        </div>

                    </div>


                </div>)
            })}
            <div className='col-lg-10 col-md-10 col-sm-10'>
               
                <Pagination count={totalrecord} page={page} onChange={getAllData} />
            </div>
        </div >
    )
}

export default Services