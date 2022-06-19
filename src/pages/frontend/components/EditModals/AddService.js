import React, { useEffect, useState } from 'react'
import {
    Form,
    Button,
    FormControl,
    Modal
} from 'react-bootstrap'
import toast, { Toaster } from 'react-hot-toast';
import { ApiDomain } from '../../../../config/config';
import { Link, useNavigate, useParams } from "react-router-dom";

function AddService(props) {
    const key = props.id
    console.log(props)

    const [where, setWhere] = useState(false)
    const [what, setWhat] = useState(false)
    const [name, setname] = useState("");
    const [duration, setduration] = useState("");
    const [nameError, setnameError] = useState(false);
    const [price, setprice] = useState("");

    // business hours

    console.log(props)

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    // let nametest = "test"
    // // console.log(props)
    const handleCloseWhat = () => setWhat(false);
    const handleCloseWhere = () => setWhere(false);

    const handleWhere = () => setWhere(true);
    const handleWhat = () => {
        setWhat(true);
        console.log("testing " + name)
    }

    const submitted = async () => {
        console.log("jjj")
        setnameError(false);
        if (!name) {
            setnameError(true);
            setLoading(false);
            return;
        }



        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',

            },

            body: JSON.stringify({
                business: key,
                name: name,
                price: price,
                duration: duration,
            })
        }

        try {
            const user = await fetch(`${ApiDomain}api/addService`, requestOptions)

                .then(response => response.json())
                .then(result => {
                    if (result.status === 1) {
                        console.log(result.message)

                        setWhat(false);
                        toast.success(result.message);
                        props.onChange(result.data)
                        handleCloseWhat()
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




        }

    })
    console.log(name)
    return (
        <div>


            <button className='btn btn-sm'
                onClick={() => handleWhat()}

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
            >Add</button>



            <Modal size="sm" show={what} onHide={handleCloseWhat}
                style={{


                }}
            >
                <Modal.Header>
                    <Modal.Title>
                        <h3>Add Service</h3>
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


                        <div className="">

                            <div>
                                <div className="form-floating">

                                    <input type
                                        ="text" className="form-control editform" id="name" placeholder="Service name" value={name} onChange={(e) => setname(e.target.value)} />


                                    <label for="name">Service Name</label>
                                </div>

                                <div className="form-floating">

                                    <input type="number" className="form-control editform" id="price" placeholder="price" value={price} onChange={(e) => setprice(e.target.value)} />
                                    <label for="price">Price</label>
                                </div>
                                <div className="form-floating">

                                    <input type="number" className="form-control editform" id="duration" placeholder="duration" value={duration} onChange={(e) => setduration(e.target.value)} />
                                    <label for="duration">Duration</label>
                                </div>

                            </div>



                        </div>


                    </div>
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

            <Modal size="sm" show={where} onHide={handleCloseWhere}
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

export default AddService