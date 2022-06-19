import React, { useEffect, useState, useRef } from 'react'
import {
    Form,
    Button,
    FormControl,
    Modal
} from 'react-bootstrap'
import Select from 'react-select';

import toast, { Toaster } from 'react-hot-toast';
// import SelectMe
import { ApiDomain } from '../../../../config/config';
import { Link, useNavigate, useParams } from "react-router-dom";

function EditingBusinessUser(props) {
    const key = props.id;
    const data = props.data
    var nameprop = props.data && data.name
    const addressprop = props.data && data.address
    const bioprop = props.data && data.bio
    const autoclick = useRef(null)
    // const businesshrsprop = props.data && data.businesshrs.sunday.open
    const categoryprop = props.data && data.category
    const emailprop = props.data && data.email
    const homeserviceprop = props.data && data.homeservice
    const facebookprop = props.data.social && data.social.facebook
    const whatsappprop = props.data.social && data.social.whatsapp
    const websiteprop = props.data && data.website
    const tiktokprop = props.data.social && data.social.tiktok
    const twitterprop = props.data.social && data.social.twitter
    const phoneprop = props.data && data.phone
    const instagramprop = props.data.social && data.social.instagram

    const latprop = props.data && props.data.location !== null ? props.data.location.lat : ""
    const longprop = props.data && props.data.location !== null ? props.data.location.long : ""
    const mallprop = props.data && data.mall
    const tradingcurrencyprop = props.data && data.tradingcurrency
    const userIDprop = props.data && data.userID

    //business hours


    const sundayopenprop = props.data && props.data.businesshrs !== null ? data.businesshrs.sunday.open : ""
    const sundaycloseprop = props.data && props.data.businesshrs !== null ? data.businesshrs.sunday.closed : ""
    const mondayopenprop = props.data && props.data.businesshrs !== null ? data.businesshrs.monday.open : ""
    const mondaycloseprop = props.data && props.data.businesshrs !== null ? data.businesshrs.monday.closed : ""
    const tuesdayopenprop = props.data && props.data.businesshrs !== null ? data.businesshrs.tuesday.open : ""
    const tuesdaycloseprop = props.data && props.data.businesshrs !== null ? data.businesshrs.tuesday.closed : ""
    const wednesdayopenprop = props.data && props.data.businesshrs !== null ? data.businesshrs.wednesday.open : ""
    const wednesdaycloseprop = props.data && props.data.businesshrs !== null ? data.businesshrs.wednesday.closed : ""
    const thursdayopenprop = props.data && props.data.businesshrs !== null ? data.businesshrs.thursday.open : ""
    const thursdaycloseprop = props.data && props.data.businesshrs !== null ? data.businesshrs.thursday.closed : ""
    const fridayopenprop = props.data && props.data.businesshrs !== null ? data.businesshrs.friday.open : ""
    const fridaycloseprop = props.data && props.data.businesshrs !== null ? data.businesshrs.friday.closed : ""
    const saturdayopenprop = props.data && props.data.businesshrs !== null ? data.businesshrs.saturday.open : ""
    const saturdaycloseprop = props.data && props.data.businesshrs !== null ? data.businesshrs.saturday.closed : ""




    const [where, setWhere] = useState(false)
    const [homeservice, setHomeservice] = useState(homeserviceprop)
    const [what, setWhat] = useState(false)
    const [name, setname] = useState(nameprop);
    const [nameError, setnameError] = useState(false);
    const [address, setaddress] = useState(addressprop);
    const [bio, setbio] = useState(bioprop);

    const [searchLocation, setSearchLocation] = useState(mallprop && mallprop.mall)
    const [searchResultLocation, setSearchResultLocation] = useState([])
    // const [businesshrs, setbusinesshrs] = useState(businesshrsprop);
    const [category, setcategory] = useState(categoryprop);
    const [categoryDefault, setcategoryDefault] = useState();
    const [email, setemail] = useState(emailprop);
    const [whatsapp, setwhatsapp] = useState(whatsappprop);
    const [facebook, setfacebook] = useState(facebookprop);
    const [instagram, setinstagram] = useState(instagramprop);
    const [tiktok, settiktok] = useState(tiktokprop);
    const [phone, setphone] = useState(phoneprop);
    const [lat, setlat] = useState(latprop);
    const [long, setlong] = useState(longprop);
    const [mall, setmall] = useState(mallprop);
    const [tradingcurrency, settradingcurrency] = useState(tradingcurrencyprop);
    const [twitter, settwitter] = useState(twitterprop);
    const [userID, setuserID] = useState(userIDprop);
    const [website, setwebsite] = useState(websiteprop);

    // business hours

    const [sundayopen, setsundayopen] = useState(sundayopenprop)
    const [sundayclose, setsundayclose] = useState(sundaycloseprop)
    const [mondayopen, setmondayopen] = useState(mondayopenprop)
    const [mondayclose, setmondayclose] = useState(mondaycloseprop)
    const [tuesdayopen, settuesdayopen] = useState(tuesdayopenprop)
    const [tuesdayclose, settuesdayclose] = useState(tuesdaycloseprop)
    const [wednesdayopen, setwednesdayopen] = useState(wednesdayopenprop)
    const [wednesdayclose, setwednesdayclose] = useState(wednesdaycloseprop)
    const [thursdayopen, setthursdayopen] = useState(thursdayopenprop)
    const [thursdayclose, setthursdayclose] = useState(thursdaycloseprop)
    const [fridayopen, setfridayopen] = useState(fridayopenprop)
    const [fridayclose, setfridayclose] = useState(fridaycloseprop)
    const [saturdayopen, setsaturdayopen] = useState(saturdayopenprop)
    const [saturdayclose, setsaturdayclose] = useState(saturdaycloseprop)
    const [SelectedCategory, setselectedCategory] = useState([props.loadCat && props.loadCat.map((cat) => cat[0])])
    // console.log(props)


    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    // let nametest = "test"
    // // console.log(props)
    const handleCloseWhat = () => setWhat(false);
    const handleCloseWhere = () => setWhere(false);
    // const hahah = () => {alert("hahah")};
    const handleWhat = () => {
        setWhat(true);
        console.log("testing " + name)
    }

    console.log(SelectedCategory)
    const categoryOnSelect = (item) => {
        console.log(SelectedCategory)
        setselectedCategory(item)
        console.log(SelectedCategory)
        // setSelectedPaymentNames(selected)

    }
    // Payment on deselect function
    const categoryOnDeSelect = (item) => {
        // const deSelectedPaymentIndex = selectedPaymentState.indexOf(item.value)
        const selectedPayment = item.value

        setselectedCategory(selectedPayment)
        console.log(SelectedCategory)
    }
    const searchQLocation = async (searchText) => {
        // alert(searchText)

        const baseLocationURL = `https://cors-anywhere.herokuapp.com/https://www.google.co.zw/s?tbm=map&gs_ri=maps&suggest=p&authuser=0&hl=en&gl=zw&pb=!2i13!4m12!1m3!1d2853.0430636320407!2d30.921657099999994!3d-17.863716499999995!2m3!1f0!2f0!3f0!3m2!1i344!2i577!4f13.1!7i20!10b1!12m8!1m1!18b1!2m3!5m1!6e2!20e3!10b1!16b1!19m4!2m3!1i296!2i120!4i8!20m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!22m3!1sqx-XYtDMBdG78gK-8LyoBQ!3b1!7e81!23m2!4b1!10b1!24m65!1m21!13m8!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!18m11!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!2b1!5m5!2b1!3b1!5b1!6b1!7b1!10m1!8e3!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!71b1!72m4!1m2!3b1!5b1!4b1!89b1!26m4!2m3!1i80!2i92!4i8!34m17!2b1!3b1!4b1!6b1!8m5!1b1!3b1!4b1!5b1!6b1!9b1!12b1!14b1!20b1!23b1!25b1!26b1!37m1!1e81!47m0!49m5!3b1!6m1!1b1!7m1!1e3!67m2!7b1!10b1!69i606&q=${searchText}&pf=t&tch=1&ech=9&ech=39&psi=qx-XYtDMBdG78gK-8LyoBQ.1654071300887.1`;

        var myHeaders = new Headers();
        // myHeaders.append("Cookie", "1P_JAR=2022-06-01-08; NID=511=vSGjmmbpAx11VX4ZDMcyNVCks2xiDDFV1f3UiNnEj4yYsNbTurPlpqxf-IZvMKttH28ETZJId2FweW-FEGzf1gdPQ7zA8ythFnaK3ebEzwb2cOvUNdvzawzHW5JgVP9_wBozKKcc-Lx30LQPn0vqlmGTs_OkW5kJpZatgoeLD3A");
        searchText = searchText.replace(/ /g, "+")
        var requestOptions = {
            method: 'GET',
            //   headers: myHeaders,
            redirect: 'follow'
        };
        let results
        await fetch(ApiDomain + "api/testapi?searchText=" + searchText + "&type='mall'", requestOptions)
            .then(response => response.text())
            .then(result => {
                results = result.replace(/\\/g, "")
                results = results.replace(")]}'n", "")
                results = results.replace('"[', "[")
                results = results.replace(']"', "]")
                results = results.replace('/*""*/', "")
                console.log(JSON.parse(results).d[0][1][0][22][14])
                console.log(JSON.parse(results).d[0][1])
                setSearchResultLocation(JSON.parse(results).d[0][1])


                // if (result.status === 1) {
                //     // setisLoading(false)
                //     setSearchResultLocation(result.data)
                //     console.log(searchResultLocation)
                // } else {
                //     // setisLoading(false)
                // }

            })

            .catch(error => console.log('error', error));



    }
    const selectLocation = (lat, long) => {
        setmall({ mall: searchLocation, lat: lat, long: long })
        // alert(mall.mall)
    }

    const submitted = async () => {
        console.log("jjj")
        setnameError(false);
        if (!name) {
            setnameError(true);
            setLoading(false);
            return;
        }
        const categorylist = []
        // alert(SelectedCategory[0])
        SelectedCategory[0] !== undefined && SelectedCategory.map((cat, key) => {
            categorylist.push({ categoryId: cat.value })
        })



        const socialtest = {
            facebook: facebook,
            twitter: twitter,
            tiktok: tiktok,
            whatsapp: whatsapp,
            instagram: instagram
        }
        const businesstest = {
            sunday: { open: sundayopen, closed: sundayclose },
            monday: { open: mondayopen, closed: mondayclose },
            tuesday: { open: tuesdayopen, closed: tuesdayclose },
            wednesday: { open: wednesdayopen, closed: wednesdayclose },
            thursday: { open: thursdayopen, closed: thursdayclose },
            friday: { open: fridayopen, closed: fridayclose },
            saturday: { open: saturdayopen, closed: saturdayclose },



        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',

            },

            body: JSON.stringify({
                business: key,
                name: name,
                address: address,
                bio: bio,
                businesshrs: businesstest,
                category: categorylist,
                email: email,
                social: socialtest,
                instagram: instagram,
                homeservice: homeservice,
                location: { type: "place", lat: lat, long: long },

                mall: mall,
                phone: phone,
                tiktok: tiktok,
                tradingcurrency: tradingcurrency,
                twitter: twitter,
                user: userID,
                website: website,

            })
        }

        try {
            const user = await fetch(`${ApiDomain}api/updatebusiness`, requestOptions)

                .then(response => response.json())
                .then(result => {
                    if (result.status === 1) {
                        console.log(result.message)

                        setWhat(false);
                        toast.success(result.message);
                        // autoclick.current.click()
                        props.onChange(result.data)
                        // window.location.reload(false);

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


        if (name === undefined) {
            setaddress(addressprop)
            setbio(bioprop)
            // setbusinesshrs(businesshrsprop)
            setcategory(categoryprop)
            setemail(emailprop)
            setfacebook(facebookprop)
            setwhatsapp(whatsappprop)
            setinstagram(instagramprop)
            setlat(latprop)
            setHomeservice(homeserviceprop)
            setlong(longprop)
            setmall(mallprop)
            setname(nameprop)
            setphone(phoneprop)
            settiktok(tiktokprop)
            settradingcurrency(tradingcurrencyprop)
            settwitter(twitterprop)
            setuserID(userIDprop)
            setwebsite(websiteprop)
            setsundayopen(sundayopenprop)
            setsundayclose(sundaycloseprop)
            setmondayopen(mondayopenprop)
            setmondayclose(mondaycloseprop)
            settuesdayopen(tuesdayopenprop)
            settuesdayclose(tuesdaycloseprop)
            setwednesdayopen(wednesdayopenprop)
            setwednesdayclose(wednesdaycloseprop)
            setthursdayopen(thursdayopenprop)
            setthursdayclose(thursdaycloseprop)
            setfridayopen(fridayopenprop)
            setfridayclose(fridaycloseprop)
            setsaturdayopen(saturdayopenprop)
            setsaturdayclose(saturdaycloseprop)
            setSearchLocation(mallprop.mall)
            setselectedCategory([props.loadCat && props.loadCat.map((cat) => cat[0])])
            // setcategoryDefault(props.loadCat)



        }
        console.log(props.loadCat && props.loadCat.map((cat) => cat[0]))


    })
    console.log(name)
    return (
        <div>
            <button className='btn btn-sm'
                onClick={() => {
                    handleWhat()
                    if (props.edit === "aboutus") {
                        // props.loadCat()
                    }

                }}

                style={{
                    backgroundColor: "White",
                    padding: "0.1rem",
                    fontSize: "9px ",
                    // fontSize: "0.7vw",
                    zIndex: "2",
                    border: "2px solid #012970",
                    borderRadius: "4px",

                    flexDirection: "row",
                    textAlign: "center",
                    color: "#012970",
                }}
            >Edit</button>



            <Modal size="lg" show={what} centered={true} onHide={handleCloseWhat}
                style={{


                }}
            >
                <Modal.Header>
                    <Modal.Title>
                        <h3>Edit</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* <Form.Label>Info</Form.Label> */}

                        {

                            (
                                <div className="">
                                    {props.edit === "aboutus" && (
                                        <div>
                                            <div className="form-floating">

                                                <input type="text" className="form-control editform" id="name" placeholder="name" value={name} onChange={(e) => setname(e.target.value)} />
                                                <label for="name">name</label>
                                            </div>
                                            <div className="form-floating">
                                                <input type="text" className="form-control editform" id="tradingcurrency" placeholder="tradingcurrency" value={tradingcurrency} onChange={(e) => settradingcurrency(e.target.value)} />
                                                <label for="tradingcurrency">tradingcurrency</label>

                                            </div>

                                            {props.loadCat &&

                                                <Select
                                                    defaultValue={props.loadCat && props.loadCat.map((cat) => cat[0])}
                                                    isMulti
                                                    onChange={categoryOnSelect}
                                                    // onDeselect={categoryOnDeSelect}
                                                    name="colors"
                                                    options={props.category}
                                                    className="basic-multi-select"
                                                    classNamePrefix="select"
                                                />

                                            }

                                            <div className="form-floating">
                                                <textarea type="text" className="form-control editform" id="bio" placeholder="bio" value={bio} onChange={(e) => setbio(e.target.value)} />
                                                <label for="bio">bio</label>

                                            </div>
                                            <div className="form-floating">
                                                <textarea type="text" className="form-control editform" id="address" placeholder="address" value={address} onChange={(e) => setaddress(e.target.value)} />
                                                <label for="address">address</label>

                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "space-between"
                                                }}
                                            >


                                                <div className="form-floating">
                                                    <input type="text" className="form-control editform" id="mall" placeholder="mall" value={searchLocation} onChange={(e) => {
                                                        setSearchLocation(e.target.value)
                                                        setSearchResultLocation([])


                                                    }} />

                                                    <label for="mall">Mall <span style={{
                                                        fontSize: "10px",
                                                        overflow:"hidden"
                                                    }}>{`(${mall && mall.lat} , ${mall && mall.long})`}</span></label>

                                                </div>
                                                <Button className='' variant="primary"
                                                    style={{
                                                        fontSize: "12px",
                                                        // margin: "5px"

                                                    }}
                                                    onClick={() => {
                                                        searchQLocation(searchLocation)


                                                    }}
                                                >
                                                    Check
                                                </Button>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between"
                                                }}
                                            >
                                                {(searchLocation && searchResultLocation.length !== 0) &&
                                                    <span>Select to get Location</span>}


                                                {(searchLocation && searchResultLocation.length !== 0) && searchResultLocation.map((data, key) => {

                                                    return data[22][11] && data[22][11][2] ?
                                                        <Button className='' variant="light"
                                                            style={{
                                                                fontSize: "12px",
                                                                margin: "5px"

                                                            }}

                                                            onClick={() => { selectLocation(data[22][11] && data[22][11][2], data[22][11] && data[22][11][3]) }}
                                                        >

                                                            {data[22][0][0]}
                                                        </Button>
                                                        :
                                                        ""
                                                }
                                                )
                                                }
                                            </div>

                                            <div className="form-floating">
                                                <input type="text" className="form-control editform" id="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                                                <label for="email">email</label>

                                            </div> <div className="form-floating">
                                                <input type="text" className="form-control editform" id="phone" placeholder="phone" value={phone} onChange={(e) => setphone(e.target.value)} />
                                                <label for="phone">phone</label>

                                            </div>
                                            <div className="form-floating">
                                                <input type="website" className="form-control editform" id="website" placeholder="website" value={website} onChange={(e) => setwebsite(e.target.value)} />
                                                <label for="website">website</label>

                                            </div>

                                        </div>
                                    )

                                    }
                                    {props.edit === "socialmedia" && (
                                        <div>
                                            <div className="form-floating">
                                                <input type="text" className="form-control editform" id="instagram" placeholder="instagram" value={instagram} onChange={(e) => setinstagram(e.target.value)} />
                                                <label for="instagram">instagram</label>

                                            </div>
                                            <div className="form-floating">
                                                <input type="text" className="form-control editform" id="whatsapp" placeholder="whatsapp" value={whatsapp} onChange={(e) => setwhatsapp(e.target.value)} />
                                                <label for="whatsapp">whatsapp</label>

                                            </div>
                                            <div className="form-floating">
                                                <input type="text" className="form-control editform" id="facebook" placeholder="facebook" value={facebook} onChange={(e) => setfacebook(e.target.value)} />
                                                <label for="facebook">facebook</label>

                                            </div>
                                            <div className="form-floating">
                                                <input type="text" className="form-control editform" id="tiktok" placeholder="tiktok" value={tiktok} onChange={(e) => settiktok(e.target.value)} />
                                                <label for="tiktok">tiktok</label>

                                            </div>

                                            <div className="form-floating">
                                                <input type="text" className="form-control editform" id="twitter" placeholder="twitter" value={twitter} onChange={(e) => settwitter(e.target.value)} />
                                                <label for="twitter">twitter</label>

                                            </div>
                                            <div className="form-floating">
                                                <input type="text" className="form-control editform" id="phone" placeholder="phone" value={phone} onChange={(e) => setphone(e.target.value)} />
                                                <label for="phone">phone</label>

                                            </div>
                                        </div>
                                    )

                                    }
                                    {props.edit === "businesshours" && (
                                        <div>
                                            <div className='row'>
                                                <h7>Sunday</h7>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="sundayopen" placeholder="sundayopen" value={sundayopen} onChange={(e) => setsundayopen(e.target.value)} />
                                                        <label for="sundayopen">Open</label>

                                                    </div>


                                                </div>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="sundayclose" placeholder="sundayclose" value={sundayclose} onChange={(e) => setsundayclose(e.target.value)} />
                                                        <label for="sundayclose">Close</label>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <h7>Monday</h7>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="mondayopen" placeholder="mondayopen" value={mondayopen} onChange={(e) => setmondayopen(e.target.value)} />
                                                        <label for="mondayopen">Open</label>

                                                    </div>
                                                </div>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="mondayclose" placeholder="mondayclose" value={mondayclose} onChange={(e) => setmondayclose(e.target.value)} />
                                                        <label for="mondayclose">Close</label>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <h7>Tuesday</h7>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="tuesdayopen" placeholder="tuesdayopen" value={tuesdayopen} onChange={(e) => settuesdayopen(e.target.value)} />
                                                        <label for="tuesdayopen">Open</label>

                                                    </div>
                                                </div>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="tuesdayclose" placeholder="tuesdayclose" value={tuesdayclose} onChange={(e) => settuesdayclose(e.target.value)} />
                                                        <label for="tuesdayclose">Close</label>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <h7>Wednesday</h7>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="wednesdayopen" placeholder="wednesdayopen" value={wednesdayopen} onChange={(e) => setwednesdayopen(e.target.value)} />
                                                        <label for="wednesdayopen">Close</label>

                                                    </div>
                                                </div>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="wednesdayclose" placeholder="wednesdayclose" value={wednesdayclose} onChange={(e) => setwednesdayclose(e.target.value)} />
                                                        <label for="wednesdayclose">Open</label>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <h7>Thursday</h7>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="thursdayopen" placeholder="thursdayopen" value={thursdayopen} onChange={(e) => setthursdayopen(e.target.value)} />
                                                        <label for="thursdayopen">Open</label>

                                                    </div>
                                                </div>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="thursdayclose" placeholder="thursdayclose" value={thursdayclose} onChange={(e) => setthursdayclose(e.target.value)} />
                                                        <label for="thursdayclose">Close</label>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <h7>Friday</h7>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="fridayopen" placeholder="fridayopen" value={fridayopen} onChange={(e) => setfridayopen(e.target.value)} />
                                                        <label for="fridayopen">Open</label>

                                                    </div>
                                                </div>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="fridayclose" placeholder="fridayclose" value={fridayclose} onChange={(e) => setfridayclose(e.target.value)} />
                                                        <label for="fridayclose">Close</label>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <h7>Saturday</h7>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="saturdayopen" placeholder="saturdayopen" value={saturdayopen} onChange={(e) => setsaturdayopen(e.target.value)} />
                                                        <label for="saturdayopen">Open</label>

                                                    </div>
                                                </div>
                                                <div className='col-6'>
                                                    <div className="form-floating">
                                                        <input type="time" className="form-control editform" id="saturdayclose" placeholder="saturdayclose" value={saturdayclose} onChange={(e) => setsaturdayclose(e.target.value)} />
                                                        <label for="saturdayclose">Close</label>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )

                                    }
                                    {props.edit === "others" && (
                                        <div>
                                            <div className="form-floating">
                                                <input type="text" className="form-control editform" id="lat" placeholder="lat" value={lat} onChange={(e) => setlat(e.target.value)} />
                                                <label for="lat">Latitude</label>

                                            </div>
                                            <div className="form-floating">
                                                <input type="text" className="form-control editform" id="long" placeholder="long" value={long} onChange={(e) => setlong(e.target.value)} />
                                                <label for="long">Longitude</label>

                                            </div>
                                            <div className="form-floating">
                                                <select type="select" className="form-control editform" id="homeservice" onChange={(e) => setHomeservice(e.target.value)}>
                                                    {homeservice === "no" ? (<option value="no" selected > No </option>) : (<option value="no" > No </option>)}
                                                    {homeservice === "yes" ? (<option value="yes" selected > Yes </option>) : (<option value="yes" > Yes </option>)}

                                                </select>
                                                <label for="homeservice">Home Service</label>

                                            </div>
                                        </div>
                                    )}

                                </div>
                            )}

                    </div>
                    {/* <button className='hide' ref={autoclick} onClick={()=>props.onChange("hahaheee")}></button> */}
                </Modal.Body>
                <Modal.Footer
                    style={{
                        justifyContent: "center"
                    }}
                >

                    <Button className='modalSearch' variant="primary" onClick={submitted}>
                        submit
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={where} onHide={handleCloseWhere}
                style={{

                }}
            >
                <Modal.Header>
                    <Modal.Title>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row'


                            }}
                        >
                            {/* <Button onClick={() => setWhere(false)} /> */}
                            <FormControl
                                style={{
                                    marginLeft: '10px',
                                    borderStyle: 'none',
                                    width: '400px'
                                }}
                                placeholder="search service"
                            />
                        </div>
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
                                justifyContent: 'center'
                            }}
                        >
                            <i>Location</i>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <lable>Your Current Location</lable>
                                <span>UNKOWN</span>
                            </div>
                            <Button className='locationButton'>Near Me</Button>
                        </div>

                        <Form.Label>Look For Services Elsewhere</Form.Label>

                        <div>
                            <Button className='modalButtons' variant="light">Kopa Kabana</Button>
                            <Button className='modalButtons' variant="light">First Street</Button>
                            <Button className='modalButtons' variant="light">Down Town</Button>
                            <Button className='modalButtons' variant="light">Mandara</Button>
                            <Button className='modalButtons' variant="light">Borrowdale</Button>
                            <Button className='modalButtons' variant="light">Greystone</Button>
                            <Button className='modalButtons' variant="light">Trim</Button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer
                    style={{
                        justifyContent: "center"
                    }}
                >

                    <Button className='modalSearch' variant="primary" onClick={handleCloseWhat}>
                        Search
                    </Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div >
    )
}

export default EditingBusinessUser