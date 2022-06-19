import React, { useEffect, useState } from 'react'
import {
    Form,
    Button,
    FormControl,
    Modal
} from 'react-bootstrap'
import toast, { Toaster } from 'react-hot-toast';
import { ApiDomain, token } from '../../../../config/config';
import { Link, useNavigate, useParams } from "react-router-dom";

function AddReview(props) {
    const key = props.id
    console.log(props)

    const [where, setWhere] = useState(false)
    const [what, setWhat] = useState(false)
    const [name, setname] = useState("");
    const [review, setreview] = useState("");
    const [reviewError, setreviewerror] = useState(false);


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
       
        setreviewerror(false);
        if (!review) {
            setreviewerror(true);
            setLoading(false);
            alert("please type something")
            return;
        }



        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token ? token : "none"}`

            },

            body: JSON.stringify({
                review: review,
                business: key
            })
        }

        try {
            const user =  await fetch(`${ApiDomain}api/addReview`, requestOptions)

                .then(response => response.json())
                .then(result => {
                    if (result.status === 1) {
                        console.log(result.message)

                        setWhat(false);
                        toast.success(result.message);
                        // props.onChange(result.data)
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
        if (review === undefined) {




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
                    border: "1px solid #012970",
                    borderRadius: "4px",


                    textAlign: "center",
                    color: "#012970",
                }}
            >Drop A Review</button>



            <Modal size="sm" show={what} onHide={handleCloseWhat}
                style={{


                }}
            >
                <Modal.Body>


                    <div className="form-floating">

                        <div className="form-floating">

                            <textarea type="text" className="form-control editform" id="review" placeholder="review" value={review} onChange={(e) => setreview(e.target.value)} />
                            <label for="review">Add your review</label>
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


            <Toaster />
        </div >
    )
}

export default AddReview