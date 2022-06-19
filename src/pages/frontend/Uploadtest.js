import React, { useEffect, useState } from 'react'

function Uploadtest() {
    const baseURL = "http://127.0.0.1:5000/uploads/url_route";

    const uploadFile = async (e) => {
        const file = e.target.files[0];
       
        console.log(typeof URL.createObjectURL(file))
        if (file != null) {
            const data = new FormData();
            data.append('file_from_react', file);
            console.log(data)
            let response = await fetch(baseURL,
                { 
                method: "POST",
               
                
                body: data
                    // body: data,
                }
            );
            let res = await response.json();
            if (res.status !== 1) {
                alert('Error uploading file');
            }
        }
    };

    return (
        <div>
            <form>
                <input
                    className='form-control'
                    type="file"
                    onChange={uploadFile}>
                </input>
            </form>
        </div>
    )
}

export default Uploadtest