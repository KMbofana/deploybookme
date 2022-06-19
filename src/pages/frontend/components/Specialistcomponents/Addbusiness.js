import React, { useState, useEffect } from 'react'
import {
    Button,
    Modal,


} from 'react-bootstrap'
import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select';
import { ApiDomain, token } from '../../../../config/config';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

function Addbusiness(props) {


    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [category, setCategory] = useState("")
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")
    const [locError, setLocationError] = useState("")
    const [SelectedCategory, setselectedCategory] = useState([])
    const [SelectedCity, setselectedCity] = useState([])
    const [modal, setModal] = useState(false)
    const [categories, setCatResult] = useState([])
    const [cities, setCityResult] = useState([])

    const handleClose = () => { setModal(false) }
    const handleOrder = () => { setModal(true) }
    const handleDelete = () => {

    }
    const handleClick = () => {

    }
    const categoryOnSelect = (item) => {
        if (SelectedCategory.length < 4) {
            setselectedCategory(item)
        } else {
            alert("you can only select 4 categories")
        }

        console.log(SelectedCategory)
        // setSelectedPaymentNames(selected)

    }
    const cityOnSelect = (item) => {
       
            setselectedCity(item)
      
        console.log(SelectedCity)
        // setSelectedPaymentNames(selected)

    }
    async function getAllCategory() {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                // 'Authorization': `Bearer ${token ?token : "none" }`, // notice the Bearer before your token
            },
            // mode:"no-cors"
            // redirect: 'follow'
        };


        await fetch(`${ApiDomain}/api/categories`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 1) {
                    // setisLoding(false)
                    const category = []
                    const data = result.data
                    if (data) {

                        data.map((cat, key) => {

                            console.log(categories)
                            category.push({ value: cat._id.$oid, label: cat.categoryName })
                            // setCatResult([...categorie, {value:cat._id.$oid,label:cat.categoryName}])
                        })
                         setCatResult(category)
                       
                    }
                   

                    console.log(category)

                } else {
                    // setisLoding(false)
                }

            })

            .catch(error => console.log('error', error));

    }
    async function getAllCity() {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                // 'Authorization': `Bearer ${token ?token : "none" }`, // notice the Bearer before your token
            },
            // mode:"no-cors"
            // redirect: 'follow'
        };


        await fetch(`${ApiDomain}/api/cities`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 1) {
                    // setisLoding(false)
                    const city = []
                    const data = result.data
                    if (data) {

                        data.map((cat, key) => {

                            console.log(categories)
                            city.push({ value: cat._id.$oid, label: cat.city })
                            // setCatResult([...categorie, {value:cat._id.$oid,label:cat.categoryName}])
                        })
                        setCityResult(city)
                      
                    }
                   

                    console.log(city)

                } else {
                    // setisLoding(false)
                }

            })

            .catch(error => console.log('error', error));

    }
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function getLocation() {
        let geolocation = navigator.geolocation;
        if (geolocation) {
            geolocation.getCurrentPosition(onGeoSuccess, onGeoError, options);
        } else {
            setLocationError("Geolocation is not supported by this browser.");
        }
    }

    function onGeoSuccess(position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
        setLocationError("");
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
    }

    function onGeoError(error) {
        let detailError;

        if (error.code === error.PERMISSION_DENIED) {
            detailError = "User denied the request for Geolocation.";
        }
        else if (error.code === error.POSITION_UNAVAILABLE) {
            detailError = "Location information is unavailable.";
        }
        else if (error.code === error.TIMEOUT) {
            detailError = "The request to get user location timed out."
        }
        else if (error.code === error.UNKNOWN_ERROR) {
            detailError = "An unknown error occurred."
        }

        setLocationError(`Error: ${detailError}`);
    }

    const submitted = async () => {
        const categorylist = []
        let location ={}
        let city ={}
        if(SelectedCategory.length > 0){
            SelectedCategory.map((cat, key) => {
                categorylist.push({ categoryId: cat.value })
            })
        }else{

            categories && categories.map((cat, key) => (key === 0 || key === 1) && categorylist.push({ categoryId: cat.value }))
        //    return
        }
        // setselectedCategory([categories && categories.map((cat, key) => (key === 0 || key === 1) && cat)])
        // setselectedCity(cities && cities.map((cat, key) => (key === 0) && cat))
        if(SelectedCity.length > 0){
            city =   {cityid : SelectedCity.value}
        }else{
            city =  {cityid : cities && cities[0].value}
            // alert("select your city")
            // alert(cities[0].city)
            // return
        }

        if(!name){
            alert("business name missing")
            return
        }
        console.log(city)
        console.log(categorylist)
      
     
        if(lat && long){
        location = {type:"place",lat:lat,long:long}
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token ? token : "none"}`

            },

            body: JSON.stringify({
                name: name,
                categories:categorylist,
                city:city,
                location:location

            })
        }

        try {
            const user = await fetch(`${ApiDomain}api/addBusiness`, requestOptions)

                .then(response => response.json())
                .then(result => {
                    if (result.status === 1) {
                        console.log(result.message)
                        alert(result.message)
                        // setWhat(false);
                        toast.success(result.message);
                        // window.location.reload(false);
                        handleClose()

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
        categories.length === 0 && getAllCategory()
        cities.length === 0 && getAllCity()
        

    })

    return (
        <div>
            {props.data.length === 0 ? (
                <>
                    <button className='btn btn-sm bookButton'
                        onClick={() => {
                            handleOrder()
                        }

                        }

                        style={{
                            zIndex: "2",
                            borderRadius: "21px",
                            color: "#ffffff",
                        }}
                    >Create Business</button>


                    <Modal show={modal} onHide={handleOrder}>
                        <Modal.Header>
                            <Modal.Title>
                                <button className="btn btn-sm" onClick={() => {
                                    handleClose()

                                }}>
                                    <ArrowBackIcon />
                                </button>



                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className=""
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "5px",
                                    justifyContent: "space-between"
                                }}
                            >
                                <div className="form-floating">
                                    <input type="text" value={name} className="form-control" style={{ width: "100%" }}

                                        onChange={(e) => setName(e.target.value)}
                                        id="name"
                                    />
                                    <label for="name">Business Name</label>

                                </div>

                                <div className=""
                                    style={{
                                        display: "flex",
                                        flexDirection: "column"
                                    }}
                                >
                                    <span>Business City</span>
                                    <Select
                                        // defaultValue={cities && cities.map((cat, key) => (key === 1) && cat)}
                                        defaultValue={cities && cities.map((cat, key) => (key === 0) && cat)}
                                        // isMulti
                                        id="cities"
                                        onChange={cityOnSelect}
                                        // onDeselect={categoryOnDeSelect}
                                        name="categories"
                                        options={cities}
                                        className="basic-multi-select"
                                        classNamePrefix="select"

                                    />


                                </div>
                                <div className=""
                                    style={{
                                        display: "flex",
                                        flexDirection: "column"
                                    }}
                                >
                                    <span>Business category</span>
                                    <Select
                                        defaultValue={categories && categories.map((cat, key) => (key === 0 || key === 1) && cat)}
                                        isMulti
                                        id="category"
                                        onChange={categoryOnSelect}
                                        // onDeselect={categoryOnDeSelect}
                                        name="categories"
                                        options={categories}
                                        className="basic-multi-select"
                                        classNamePrefix="select"

                                    />


                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    margintTop: "5px"

                                }}>
                                    <div className="form-floating">
                                        <input type="text" value={lat} className="form-control" style={{}}

                                            onChange={(e) => setLat(e.target.value)}
                                            id="lat"
                                        // readOnly
                                        />
                                        <label for="lat">Longitude</label>

                                    </div>
                                    <div className="form-floating">
                                        <input type="text" value={long} className="form-control" style={{}}

                                            onChange={(e) => setLong(e.target.value)}
                                            id="long"
                                        // readOnly
                                        />
                                        <label for="long">Longitude</label>

                                    </div>
                                    <button className='btn btn-sm bookButton'
                                        onClick={() => {
                                            getLocation()
                                        }

                                        }

                                        style={{
                                            zIndex: "2",
                                            borderRadius: "21px",
                                            color: "#ffffff",
                                        }}
                                    >Get Location</button>
                                </div>
                                <span style={{
                                    fontSize: "10px", color: "red"
                                }}><i>{locError}</i></span> <br />


                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button className='modalSearch' variant="primary" onClick={submitted}>
                                Create
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>) : (
                <>
                    <Link to={`../more/${props.data._id}`}>My Business Link</Link>
                </>
            )
            }
            <Toaster />

        </div >

    )
}

export default Addbusiness