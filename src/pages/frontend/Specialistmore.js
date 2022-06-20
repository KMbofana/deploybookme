import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Specialistheader from './components/Specialistheader';
import HeaderContents from './components/HeaderContents';
import { ApiDomain, UploadsDomain, token } from '../../config/config';
import Headerdetails from './components/Specialistcomponents/Headerdetails';
import Carousel_ from './components/Specialistcomponents/Carousel';
import Carouselw_ from './components/Specialistcomponents/Carouselwork';

import Services from './components/Specialistcomponents/Services';
import Reviews from './components/Specialistcomponents/Reviews';
import { useParams } from 'react-router-dom';
import AddService from './components/EditModals/AddService';

import { UploadImagemodal, UploadThumbNailPreview, UploadWorkmodal } from './components/EditModals/UploadImagemodal';
import ViewReviews from './components/EditModals/ViewReviews';
import AddReview from './components/EditModals/AddReviews';

function Specialistmore() {
    const { id } = useParams();
    const baseURL = ApiDomain + "/api/business?business=" + id;
    const [getResult, setGetResult] = useState([]);
    const [workChange, setworkChange] = useState(0);
    const [getLocalData, setLocalData] = useState(null)
    const [isLoading, setloading] = useState(true)
    const [categories, setCatResult] = useState([])
    const [reviews, setReviewResult] = useState([])
    const [hasmore, sethasmore] = useState(true)
    const [offset, setoffset] = useState(0)
    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    }

    async function getReviews() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                // 'Authorization': `Bearer ${token ?token : "none" }`, // notice the Bearer before your token
            },
            mode:"no-cors",
            redirect: 'follow'
        };
        let newoffset = 0
        if (offset === 0) {
            newoffset = offset
            setoffset(newoffset + 5)
        } else {
            newoffset = offset
            setoffset(newoffset + 5)
        }


        await fetch(`${ApiDomain}/api/reviewbybusinessId?business=${id}&offset=${newoffset}&limit=5`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 1) {
                    // setisLoding(false)
                    // setReviewResult(result.data)
                    setReviewResult(reviews => [...reviews, ...result.data])
                    setloading(false)
                    // alert(data.data.length)
                    if (result.data.length <= 5 && result.totalrecords <= newoffset + 1) {
                        sethasmore(false)
                    } else {
                        sethasmore(true)
                    }
                } else {
                    setloading(false)
                }

            })

            .catch(error => console.log('error', error));
    }
    async function getAllCategory() {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                // 'Authorization': `Bearer ${token ?token : "none" }`, // notice the Bearer before your token
            },
            mode:"no-cors",
            redirect: 'follow'
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

                    }
                    setCatResult(category)

                    console.log(category)

                } else {
                    // setisLoding(false)
                }

            })

            .catch(error => console.log('error', error));

    }

    const reloadComponent = (data) => {
        // console.log("hahha")
        // alert(data)
        // getAllData()
        if (data === "work") {
            setworkChange(1)
        } else {
            setGetResult(data)
        }

    }
    async function getAllData() {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token ? token : "none"}`, // notice the Bearer before your token
            },
            mode:"no-cors",
            redirect: 'follow'
        };

        await fetch(`${baseURL}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 1) {
                    setloading(false)
                    setGetResult(result.data)
                    console.log(result.data)
                } else {
                    setloading(false)

                }

            })

            .catch(error => console.log('error', error));

    }

    useEffect(() => {
        setLocalData(window.localStorage.user && JSON.parse(window.localStorage.user))
        // console.log(window.localStorage.user && JSON.parse(window.localStorage.user))
        getAllData()
        getReviews()
        getAllCategory()
        console.log(getResult.length)

    }, []);
    return (
        <div>

            {isLoading && (
                <p>loading</p>
            )}
            {!isLoading && (
                <>
                    <Header backgroundColor="#ffffff" />
                    {getResult.length !== 0 ?
                        (<div className='spebody'
                        >
                            <div className='row' style={{
                                marginBottom: "20px",
                                justifyContent: "space-between",
                                background: "#ffffff",
                                // borderRadius: "17px",
                                padding: "18px",
                                // boxShadow: "0px 2px 20px rgba(1, 41, 112, 0.1)"
                            }} >
                                <div className='col-lg-5 col-md-6 col-sm-12'>
                                    <div className="row">
                                        <div className='col-lg-12 col-md-12 col-sm-12'>
                                            <Carousel_ userID={getResult.userID} files={getResult.profileheaderimageurl && typeof getResult.profileheaderimageurl === 'object' ? Object.values(getResult.profileheaderimageurl) : getResult.profileheaderimageurl} profile={getResult.profileimageurl && getResult.profileimageurl} from="server" />
                                        </div>
                                        <div className="row"
                                            style={{
                                                justifyContent: "space-between"
                                            }}
                                        >
                                            <div className='col-lg-4 col-md-4 col-sm-4'>
                                                {window.localStorage.user && JSON.parse(window.localStorage.user)._id === getResult.userID ? (<UploadImagemodal onChange={reloadComponent} id={id} />) : ""}

                                            </div>
                                            <div className='col-lg-4 col-md-4 col-sm-4'>


                                                {window.localStorage.user && JSON.parse(window.localStorage.user)._id === getResult.userID ? (<UploadThumbNailPreview onChange={reloadComponent} id={id} />) : ""}

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6  col-md-6 col-sm-12'
                                    style={{ marginTop: "26px" }}
                                >
                                    {categories &&
                                        <Headerdetails id={id} data={getResult} category={categories} reviews={reviews && reviews} hasmoreReviews={hasmore} loadReviews={() => getReviews} loadCat={getResult.category && getResult.category.map((cat) => categories && categories.filter((cate) => cate.value === cat.categoryId))} onChange={reloadComponent} />
                                    }
                                </div>
                            </div>
                            <div style={{
                                marginBottom: "20px",
                                justifyContent: "space-between",
                                background: "#ffffff",
                                borderRadius: "17px",
                                padding: "18px",
                                // boxShadow: "0px 2px 20px rgba(1, 41, 112, 0.1)"
                            }} >

                                <div className='row'>
                                    <div className='col-md-8 col-lg-8 col-sm-12'>
                                        <Services businessid={id} userID={getResult.userID} />
                                    </div>
                                    <div className='col-md-4 col-lg-4 col-sm-12'>
                                        <div className="row">
                                            <div className="row"
                                                style={{
                                                    justifyContent: "space-between"
                                                }}
                                            >
                                                <div className='col-lg-10 col-md-10 col-sm-10'>
                                                    <div

                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "row"


                                                        }}
                                                    >    <h4>Our Work</h4>
                                                        {window.localStorage.user && JSON.parse(window.localStorage.user)._id === getResult.userID ? (<UploadWorkmodal onChange={reloadComponent} id={id} />) : ""}

                                                    </div>

                                                </div>


                                            </div>
                                            <div className='col-lg-12 col-md-12 col-sm-12'
                                                style={{

                                                    // boxShadow: "0px 2px 6px rgba(1, 41, 112, 0.24)",
                                                    border: "solid 0.20px #d2cfcf",
                                                    marginBottom: "0.8rem",
                                                    borderRadius: "0.25rem",
                                                    padding: "1rem 1rem",
                                                    position:"relative"
                                                }}
                                            >
                                                {/* <Headerdetails id={id} data={getResult} category={categories} reviews={reviews && reviews} hasmoreReviews={hasmore} loadReviews={() => getReviews} loadCat={getResult.category && getResult.category.map((cat) => categories && categories.filter((cate) => cate.value === cat.categoryId))} onChange={reloadComponent} /> */}


                                                <Carouselw_ businessid={id} change={workChange} from="server" />
                                                <hr />
                                                <div className="" id="">
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "row"
                                                        }}
                                                    >

                                                        <button className="btn btn-sm" type="button"
                                                            style={{
                                                                backgroundColor: "White",
                                                                padding: "0.1rem",
                                                                
                                                                // fontSize: "0.7vw",
                                                                zIndex: "2",
                                                                // border: "1px solid #012970",
                                                                // borderRadius: "4px",


                                                                textAlign: "center",
                                                                // color: "#012970",
                                                            }}
                                                        >
                                                            <span style={{ fontSize: "15px" }}>Reviews</span>
                                                        </button>
                                                        <AddReview id={id} />
                                                    </div>

                                                    <div
                                                        className=""
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            flexWrap: "wrap",
                                                            fontSize: "10px",
                                                            // boxShadow: "0px 2px 20px rgba(1, 41, 112, 0.1)",
                                                            border: "solid 0.20px #d2cfcf",
                                                            borderRadius: "10px",
                                                            paddingRight: "10px",
                                                            paddingLeft: "5px",
                                                            paddingTop: "10px",
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

                                                            {/* {getResult.length !== 0 && (window.localStorage.user && JSON.parse(window.localStorage.user)._id === getResult.userID) ? (<EditingBusinessUser id={id} onChange={reloadComponent} data={getResult.length !== 0 && getResult} edit="businesshours" />) : ""} */}
                                                        </div>
                                                        {reviews &&

                                                            <Reviews reviews={reviews} number="1" />
                                                        }
                                                        {reviews &&
                                                          
                                                            <ViewReviews reviews={reviews} hasmoreReviews={hasmore} loadReviews={() => getReviews} />
                                                        }


                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>





                            </div>

                            <div className='row  ' style={{
                                justifyContent: "center"
                            }}>


                            </div>

                        </div>) :

                        (
                            <p
                                style={{
                                    marginTop: "282px",
                                    textAlign: "center"
                                }}
                            >Oops! Not Found</p>
                        )}

                </>
            )}

        </div >
    )
}

export default Specialistmore