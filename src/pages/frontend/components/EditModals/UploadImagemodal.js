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
import CarouselCrop from '../Specialistcomponents/CarouselCrop';
import { UploadDomainFile } from '../../../../config/config';
// import { ApiDomain } from '../../../../config/config';
function UploadImagemodal(props) {
    const key = props.id
   

    const fileObj = [];
    const fileArray = [];
    const fileCroppedObj = [];
    const fileCroppedArray = [];


    const [file, setFile] = useState([null])
    const [fileArr, setFileArr] = useState([])
    const [fileObject, setFileObject] = useState([])
    const [fileCroppedArr, setFileCroppedArr] = useState([])
    const [fileCroppedObject, setFileCroppedObject] = useState([])
    const [where, setWhere] = useState(false)
    const [what, setWhat] = useState(false)
    const [name, setname] = useState("");
    const [duration, setduration] = useState("");
    const [nameError, setnameError] = useState(false);
    const [price, setprice] = useState("");
    const [cropedData, setcropedData] = useState([])


    // business hours

    

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    // let nametest = "test"
    // // 
    const handleCloseWhat = () => {

        setWhat(false)
        setFileArr([])
        setFileCroppedObject([])
    };
    const handleCloseWhere = () => setWhere(false);

    const handleWhere = () => setWhere(true);
    const handleWhat = () => {
        setWhat(true);
        console.log("testing " + name)
    }




    const uploadMultipleFiles = (e) => {
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))

            // console.log(typeof URL.createObjectURL(fileObj[0][i]))
        }
        setFileArr(fileArray)
        setFileObject(fileObj)

        setFile(fileArray)

    }
    console.log(fileCroppedArr)
    console.log(fileCroppedObject)
    const uploadCropedMultipleFiles = (blob) => {
        
        setFileCroppedArr([...fileCroppedArr, URL.createObjectURL(blob)])
        setFileCroppedObject([...fileCroppedObject, blob])



        // setFile(fileArray)

    }

    const uploadFile = (e) => {
        e.preventDefault()
        // const fileUpload = e.target.files;
        console.log(fileObject[0][2])
        // console.log(fileArray)
    }

    const baseURL = `${UploadDomainFile}/uploadbusinessheader`;

    const uploadFiles = async (e) => {
        e.preventDefault()
        const files = fileCroppedObject;

        if (files != null) {
            const data = new FormData();
            for (let i = 0; i < files.length; i++) {
                data.append('upload', files[i], "image.jpg");
                // console.log(files[i])
            }


            data.append('business', props.id);
            console.log(data)
            const response = await fetch(baseURL,
                {
                    method: "POST",
                    body: data

                }
            )
                // let res = await response.json();
                .then(response => response.json())
                .then(result => {
                    if (result.status === 1) {
                        // console.log(result.message)


                        toast.success(result.message);
                        handleCloseWhat()
                        
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

        }
    };

    useEffect(() => {
        if (name === undefined) {




        }

    })

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
            >Change Header Pictures</button>



            <Modal size="lg" show={what} onHide={handleCloseWhat}
                style={{


                }}
            >
                <Modal.Header>
                    <Modal.Title>
                        <h3>Upload Image</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div
                        style={{
                            height: "300px",
                            position: "relative"
                        }}
                    >




                        {fileArr && (
                            <CarouselCrop files={fileArr} saveCrop={uploadCropedMultipleFiles} imagefor="header" aspect={3 / 1} />
                        )}



                    </div>
                </ Modal.Body>
                <Modal.Footer>
                    <div className="row">
                        <div className="col-8">
                            <div className="form-group">

                                <input type="file" className="" onChange={uploadMultipleFiles} multiple />
                            </div>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btm-sm btn-primary btn-block" onClick={uploadFiles}
                                style={{


                                    backgroundColor: "#33B5BD"
                                }}
                            >Upload Header Image</button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>


            <Toaster />
        </div >
    )
}

function UploadWorkmodal(props) {

    const key = props.id
    

    const fileObj = [];
    const fileArray = [];
    const fileCroppedObj = [];
    const fileCroppedArray = [];


    const [file, setFile] = useState([null])
    const [fileArr, setFileArr] = useState([])
    const [fileObject, setFileObject] = useState([])
    const [fileCroppedArr, setFileCroppedArr] = useState([])
    const [fileCroppedObject, setFileCroppedObject] = useState([])
    const [where, setWhere] = useState(false)
    const [what, setWhat] = useState(false)
    const [name, setname] = useState("");
    const [duration, setduration] = useState("");
    const [nameError, setnameError] = useState(false);
    const [price, setprice] = useState("");
    const [cropedData, setcropedData] = useState([])


    // business hours

    

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    // let nametest = "test"
    // // 
    const handleCloseWhat = () => {

        setWhat(false)
        setFileCroppedObject([])
        setFileArr([])
    };
    const handleCloseWhere = () => setWhere(false);

    const handleWhere = () => setWhere(true);
    const handleWhat = () => {
        setWhat(true);
        console.log("testing " + name)
    }




    const uploadMultipleFiles = (e) => {
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))

            // console.log(typeof URL.createObjectURL(fileObj[0][i]))
        }
        setFileArr(fileArray)
        setFileObject(fileObj)

        setFile(fileArray)

    }
    console.log(fileCroppedArr)
    console.log(fileCroppedObject)
    const uploadCropedMultipleFiles = (blob) => {

        setFileCroppedArr([...fileCroppedArr, URL.createObjectURL(blob)])
        setFileCroppedObject([...fileCroppedObject, blob])



        // setFile(fileArray)

    }

    const uploadFile = (e) => {
        e.preventDefault()
        // const fileUpload = e.target.files;
        console.log(fileObject[0][2])
        // console.log(fileArray)
    }

    const baseURL = `${UploadDomainFile}/uploadbusinesswork`;

    const uploadFiles = async (e) => {
        e.preventDefault()
        const files = fileCroppedObject;

        if (files != null) {
            const data = new FormData();
            for (let i = 0; i < files.length; i++) {
                data.append('upload', files[i], "image.jpg");
                // console.log(files[i])
            }


            data.append('business', props.id);
            console.log(data)
            const response = await fetch(baseURL,
                {
                    method: "POST",
                    body: data

                }
            )
                // let res = await response.json();
                .then(response => response.json())
                .then(result => {
                    if (result.status === 1) {
                        console.log(result.message)


                        toast.success(result.message);
                        // props.reloadComponent("work")
                        props.onChange("work")
                        handleCloseWhat()
                        // props.closeModal()
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

        }
    };

    useEffect(() => {
        if (name === undefined) {




        }

    })

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
            >Change Work Image</button>



            <Modal size="lg" show={what} onHide={handleCloseWhat}
                style={{


                }}
            >
                <Modal.Header>
                    <Modal.Title>
                        <h3>Upload Image</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div
                        style={{
                            height: "300px",
                            position: "relative"
                        }}
                    >




                        {fileArr && (
                            <CarouselCrop files={fileArr} saveCrop={uploadCropedMultipleFiles} imagefor="profile" aspect={3/4 } />
                        )}



                    </div>
                </ Modal.Body>
                <Modal.Footer>
                    <div className="row">
                        <div className="col-8">
                            <div className="form-group">

                                <input type="file" className="" onChange={uploadMultipleFiles} />
                            </div>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btm-sm btn-primary btn-block" onClick={uploadFiles}
                                style={{


                                    backgroundColor: "#33B5BD"
                                }}
                            >Upload Work Image</button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>


            <Toaster />
        </div >
    )

}
function UploadThumbNailPreview(props) {

    const key = props.id
    

    const fileObj = [];
    const fileArray = [];
    const fileCroppedObj = [];
    const fileCroppedArray = [];


    const [file, setFile] = useState([null])
    const [fileArr, setFileArr] = useState([])
    const [fileObject, setFileObject] = useState([])
    const [fileCroppedArr, setFileCroppedArr] = useState([])
    const [fileCroppedObject, setFileCroppedObject] = useState([])
    const [where, setWhere] = useState(false)
    const [what, setWhat] = useState(false)
    const [name, setname] = useState("");
    const [duration, setduration] = useState("");
    const [nameError, setnameError] = useState(false);
    const [price, setprice] = useState("");
    const [cropedData, setcropedData] = useState([])


    // business hours

    

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    // let nametest = "test"
    // // 
    const handleCloseWhat = () => {

        setWhat(false)
        setFileCroppedObject([])
        setFileArr([])
    };
    const handleCloseWhere = () => setWhere(false);

    const handleWhere = () => setWhere(true);
    const handleWhat = () => {
        setWhat(true);
        console.log("testing " + name)
    }




    const uploadMultipleFiles = (e) => {
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))

            // console.log(typeof URL.createObjectURL(fileObj[0][i]))
        }
        setFileArr(fileArray)
        setFileObject(fileObj)

        setFile(fileArray)

    }
    console.log(fileCroppedArr)
    console.log(fileCroppedObject)
    const uploadCropedMultipleFiles = (blob) => {

        setFileCroppedArr([...fileCroppedArr, URL.createObjectURL(blob)])
        setFileCroppedObject([...fileCroppedObject, blob])



        // setFile(fileArray)

    }

    const uploadFile = (e) => {
        e.preventDefault()
        // const fileUpload = e.target.files;
        console.log(fileObject[0][2])
        // console.log(fileArray)
    }

    const baseURL = `${UploadDomainFile}/uploadbusinessprofle`;

    const uploadFiles = async (e) => {
        e.preventDefault()
        const files = fileCroppedObject;

        if (files != null) {
            const data = new FormData();
            for (let i = 0; i < files.length; i++) {
                data.append('upload', files[i], "image.jpg");
                // console.log(files[i])
            }


            data.append('business', props.id);
            console.log(data)
            const response = await fetch(baseURL,
                {
                    method: "POST",
                    body: data

                }
            )
                // let res = await response.json();
                .then(response => response.json())
                .then(result => {
                    if (result.status === 1) {
                        console.log(result.message)


                        toast.success(result.message);
                        props.onChange(result.data)
                        handleCloseWhat()
                        // props.closeModal()
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

        }
    };

    useEffect(() => {
        if (name === undefined) {




        }

    })

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
            >Change Profile Image</button>



            <Modal size="lg" show={what} onHide={handleCloseWhat}
                style={{


                }}
            >
                <Modal.Header>
                    <Modal.Title>
                        <h3>Upload Image</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div
                        style={{
                            height: "300px",
                            position: "relative"
                        }}
                    >




                        {fileArr && (
                            <CarouselCrop files={fileArr} saveCrop={uploadCropedMultipleFiles} imagefor="profile" aspect={1.75 / 1} />
                        )}



                    </div>
                </ Modal.Body>
                <Modal.Footer>
                    <div className="row">
                        <div className="col-8">
                            <div className="form-group">

                                <input type="file" className="" onChange={uploadMultipleFiles} />
                            </div>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btm-sm btn-primary btn-block" onClick={uploadFiles}
                                style={{


                                    backgroundColor: "#33B5BD"
                                }}
                            >Upload Profile Image</button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>


            <Toaster />
        </div >
    )

}
export { UploadThumbNailPreview, UploadImagemodal, UploadWorkmodal }

