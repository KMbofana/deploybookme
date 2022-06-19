import React, { useState, useEffect } from 'react'
import { ApiDomain } from '../../../../config/config';
import { Link } from 'react-router-dom';
function SpecialistByCity() {
    const [cities, setCityResult] = useState([])
    const [SelectedCity, setselectedCity] = useState([])
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
    useEffect(() => {

        cities.length === 0 && getAllCity()


    })
    return (
        <div>
            <div className='row' style={{
                textAlign: "center"
            }}>
                <span style={{
                    fontSize: "20px",
                    fontWeight: "bold"

                }}>
                    Find A Specialist By City
                </span>
            </div>
            <div className=''

            >
                <nav id="" className="navbar catbar"
                    style={{

                        justifyContent: "center",

                        display: "block !important"


                    }}
                >
                    <ul style={{
                        marginTop: "10px",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    }}>
                        {cities && cities.map((city) => {
                            return (
                                <li><Link className="nav-link" to={"../specialist/city-" + city.value}> {city.label}</Link></li>


                            )
                        })}
                    </ul>
            </nav>

        </div>

        </div >
    )
}

export default SpecialistByCity