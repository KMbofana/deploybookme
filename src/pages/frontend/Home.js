import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { HomeUserCardContainer, HomeUserCardContainerLoading } from './components/HomeUserCardContainer'
import HeaderContents from './components/HeaderContents';
import { ApiDomain, token } from '../../config/config';
import Body from './components/home/Body';
import SpecialistByCity from './components/home/SpecialistByCity';
function Home() {
  const baseURL = ApiDomain + "/api/businesses?offset=0&limit=10";
  const [getResult, setGetResult] = useState(null);
  const [isLoading, setisLoading] = useState(true)
  const [categories, setCatResult] = useState()
  const basecatURL = ApiDomain + "/api/categories";
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
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

    await fetch(`${basecatURL}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 1) {
          // setisLoading(false)
          setCatResult(result.data)
        } else {
          // setisLoading(false)
        }

      })

      .catch(error => console.log('error', error));

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
          setisLoading(false)
          setGetResult(result.data)
        } else {
          setisLoading(false)
        }

      })

      .catch(error => console.log('error', error));

  }

  useEffect(() => {
    getAllCategory()
    // setLocalData(window.localStorage.user && JSON.parse(window.localStorage.user))
    // console.log(window.localStorage.user && JSON.parse(window.localStorage.user))
    getAllData()

  }, []);
  return (
    <div>
      <Header />
      <HeaderContents categories={categories} />
      {isLoading && (
        <HomeUserCardContainerLoading />
      )}
      {!isLoading && (
        <HomeUserCardContainer data={getResult && getResult} />
      )}
      <div style={{
        paddingLeft: "10%",
        paddingRight: "10%",

      }}>
        <Body />
      </div>
      <div style={{
        paddingLeft: "10%",
        paddingRight: "10%",
        marginTop:"10px"
      }}>
        <SpecialistByCity />
      </div>



    </div>
  )
}

export default Home