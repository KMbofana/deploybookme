import React, { useState } from 'react'
import {
    Form,
    Button,
    FormControl,
    Modal
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ApiDomain } from '../../../config/config'

function SearchModalHome(props) {
    const [where, setWhere] = useState(false)
    const [what, setWhat] = useState(false)
    const [search, setSearch] = useState("")
    const [searchLocation, setSearchLocation] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [searchResultLocation, setSearchResultLocation] = useState([])

    const handleCloseWhat = () => setWhat(false);
    const handleCloseWhere = () => setWhere(false);

    const handleWhere = () => setWhere(true);
    const basecatURL = ApiDomain + "/api/getbyServiceSearch?name=";
    const handleWhat = () => {
        setWhat(true);
        console.log("testing")
    }

    const searchService = async (searchText) => {
        // alert(searchText)


        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                // 'Authorization': `Bearer ${token ?token : "none" }`, // notice the Bearer before your token
            },
            // mode:"no-cors"
            // redirect: 'follow'
        };

        await fetch(`${basecatURL}${searchText}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 1) {
                    // setisLoading(false)
                    setSearchResult(result.data)
                    console.log(searchResult)
                } else {
                    // setisLoading(false)
                }

            })

            .catch(error => console.log('error', error));



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
        await fetch(ApiDomain + "api/testapi?searchText=" + searchText, requestOptions)
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
    const submitted = () => {
        setWhat(true);
        console.log("submitted")
    }
    return (
        <div>

            <div
                style={{
                    flexDirection: "row",
                    backgroundColor: "white",
                    border: "2px solid #012970",
                    borderTopLeftRadius: "25px",
                    borderBottomLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                    borderBottomRightRadius: "25px",
                    width: props.list ? "88vw" : "-88vw"

                }}
            >
                <button className='btn'
                    onClick={() => handleWhat()}

                    style={{
                        backgroundColor: "White",
                        // height: "3vw",
                        width: "50%",
                        // fontSize: "1vw",
                        zIndex: "2",
                        borderTopLeftRadius: "25px",
                        borderBottomLeftRadius: "25px",
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "0px",
                        borderRightColor: "#012970",
                        flexDirection: "row",
                        textAlign: "left",
                        color: "#bfbfbf",
                    }}
                >Book Your Service</button>
                <button className='btn'
                    onClick={() => handleWhere()}
                    style={{
                        backgroundColor: "white",
                        // height: "3vw",
                        width: "50%",
                        zIndex: "2",
                        // fontSize: "1vw",
                        borderTopRightRadius: "25px",
                        borderBottomRightRadius: "25px",
                        flexDirection: "row",
                        color: "#bfbfbf",
                        textAlign: "left"
                    }}
                > Location</button>

            </div>
            <Modal size="lg" show={what} onHide={handleCloseWhat}
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
                            {/* <Button onClick={() => setWhat(false)} /> */}
                            <FormControl
                                style={{
                                    marginLeft: '10px',
                                    borderStyle: 'none',
                                    width: '400px'
                                }}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                    searchService(e.target.value)
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
                        <Form.Label>Popular Services</Form.Label>

                        <div>
                            {props.list ? searchResult && searchResult.map((key) =>
                                <Button className='modalButtons' variant="light" onClick={() => {
                                    props.pramsOnchange("", `service-${key.name}`)
                                    handleCloseWhat()
                                }}> <Link className="nav-link " to={`../specialist/service-${key.name}`}>{key.name}</Link></Button>
                            ) :
                                searchResult && searchResult.map((key) =>
                                    <Button className='modalButtons' variant="light" > <Link className="nav-link " to={`../specialist/service-${key.name}`}>{key.name}</Link></Button>
                                )
                            }



                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer
                    style={{
                        justifyContent: "center"
                    }}
                >
                    {props.list ?
                        <Link className="nav-link modalSearchLink" to={`../specialist/service-${search}`}>
                            <Button className='modalSearch' variant="primary" onClick={() => {
                                props.pramsOnchange("", `service-${search}`)
                                handleCloseWhat()
                            }}>
                                Search
                            </Button>
                        </Link>

                        : <Link className="nav-link modalSearchLink" to={`../specialist/service-${search}`}>
                            <Button className='modalSearch' variant="primary" >
                                Search
                            </Button>
                        </Link>}
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
                            <FormControl
                                style={{
                                    marginLeft: '10px',
                                    borderStyle: 'none',
                                    width: '400px'
                                }}
                                onChange={(e) => {
                                    setSearchLocation(e.target.value)
                                    // searchQLocation(e.target.value)


                                }}
                                placeholder="search Location"
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
                        <Form.Label>Location</Form.Label>

                        <div>
                            {props.list ? searchResultLocation && searchResultLocation.map((data, key) =>
                                <Button className='modalButtons' variant="light" onClick={() => {
                                    props.pramsOnchange("", `service-${key}`)
                                    handleCloseWhat()
                                }}> <Link className="nav-link " to={`../specialist/service-${key}`}>{key.name}</Link></Button>
                            ) :
                                searchResultLocation && searchResultLocation.map((data, key) => {
                                  return  data[22][11] && data[22][11][2] ?
                                   <Button className='' variant="light"
                                        style={{
                                            fontSize: "12px",
                                            margin: "5px"

                                        }}
                                    >

                                        <a className="" target="_blank" href={`https://www.google.co.zw/maps/search/${data[22][0][0]}/@${data[22][11] && data[22][11][2]},${data[22][11] && data[22][11][3]}`}>{data[22][0][0]}</a>
                                    </Button>
                                    :
                                    ""
                                }
                                )
                            }



                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer
                    style={{
                        justifyContent: "center"
                    }}
                >

                    <Button className='modalSearch' variant="primary" onClick={() => {
                        // props.pramsOnchange(`service-${search}`)
                        searchQLocation(searchLocation)
                        handleCloseWhat()
                    }}>
                        Search
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SearchModalHome