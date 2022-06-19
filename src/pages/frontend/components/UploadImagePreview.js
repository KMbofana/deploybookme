import React, { useState } from 'react';
import Carousel_ from './Specialistcomponents/Carousel';
import { UploadDomainFile } from '../../../config/config';
import toast, { Toaster } from 'react-hot-toast';
function UploadImagePreview(props) {

    const fileObj = [];
    const fileArray = [];


    const [file, setFile] = useState([null])
    const [fileArr, setFileArr] = useState([])
    const [fileObject, setFileObject] = useState([])





    const uploadMultipleFiles = (e) => {
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))

            console.log(fileArray.length)
        }
        setFileArr(fileArray)
        setFileObject(fileObj)
        setFile(fileArray)

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
        const files = fileObject;
        if (files != null) {
            const data = new FormData();
            for (let i = 0; i < files[0].length; i++) {
                data.append('upload', files[0][i]);
            }


            data.append('business', "6267c25cb6438b1e0decfa12");
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
                        props.closeModal()
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
    // console.log(fileArray)


    return (
        <form
            style={{
                width: "400px",
                margin: "auto"
            }}
        >
            <div className="form-group multi-preview"


            >

                {fileArr && (
                    <Carousel_ files={fileArr} />
                )}

            </div>
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
            <Toaster />
        </form >
    )

}
function UploadThumbNailPreview(props) {

    const fileObj = [];
    const fileArray = [];


    const [file, setFile] = useState([null])
    const [fileArr, setFileArr] = useState([])
    const [fileObject, setFileObject] = useState([])





    const uploadMultipleFiles = (e) => {
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))

            console.log(fileArray.length)
        }
        setFileArr(fileArray)
        setFileObject(fileObj)
        setFile(fileArray)

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
        const files = fileObject;
        if (files != null) {
            const data = new FormData();
            for (let i = 0; i < files[0].length; i++) {
                data.append('upload', files[0][i]);
            }


            data.append('business', "6267c25cb6438b1e0decfa12");
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
                        props.closeModal()
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
    // console.log(fileArray)


    return (
        <form
            style={{
                width: "400px",
                margin: "auto"
            }}
        >
            <div className="form-group multi-preview"


            >

                {fileArr && (
                    <Carousel_ files={fileArr} />
                )}

            </div>
            <div className="row">
                <div className="col-8">
                    <div className="form-group">

                        <input type="file" className="" onChange={uploadMultipleFiles}  />
                    </div>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btm-sm btn-primary btn-block" onClick={uploadFiles}
                        style={{


                            backgroundColor: "#33B5BD"
                        }}
                    >Upload Listing Image</button>
                </div>
            </div>
            <Toaster />
        </form >
    )

}
export {UploadImagePreview,UploadThumbNailPreview} 