import React, { useState, useEffect, useRef } from 'react'
import { ApiDomain, UploadsDomain, token } from '../../../../config/config';
import {
  Carousel,
} from 'react-bootstrap'


import replaceimg from '../../../../assets/images/bg.png'
// import { ReactPhotoCollage } from "react-photo-collage";

function Carouselw_(props) {


  const [totalrecord, settotal] = useState(0)
  const [getResult, setGetResult] = useState([]);
  const [getLocalData, setLocalData] = useState(null)
  const [isLoading, setisLoading] = useState(true)
  const [page, setPage] = useState(1);
  const [offset, setoffset] = useState(0);
  const files = props.files
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    // ref.current.scrollIntoView({behavior:"smooth"})
    ref.current.scrollLeft += scrollOffset;

    // console.log(scrollOffset)
  }
  async function getAllData(event, value) {
    let offset = 0
    // const data = window.localStorage.user && JSON.parse(window.localStorage.user)
    setPage(value);
    if (value === 1) {
      offset = 0
    } else {
      offset = (value - 1) * 10
    }

    // const token = token
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token ? token : "none"}`, // notice the Bearer before your token
      },
      // mode:"no-cors"
      // redirect: 'follow'
    };

    await fetch(ApiDomain + "/api/getWorkByBusId?business=" + props.businessid + "&offset=" + offset + "&limit=10", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 1) {
          setisLoading(false)
          setGetResult(result.data)
          // if(result.totalrecords/10)
          settotal(Math.ceil(result.totalrecords / 10))
          // setoffset(result.offset * 10)


        } else {
          setisLoading(false)
        }

      })

      .catch(error => console.log('error', error));

  }
  useEffect(() => {
    setLocalData(window.localStorage.user && JSON.parse(window.localStorage.user))
    console.log(window.localStorage.user && JSON.parse(window.localStorage.user))
    getAllData("", 1)
    console.log(getResult)

  }, [props.change]);
  return (
    <>
      <div className='work'
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0 !important",
          scrollBehavior: "smooth",
          marginTop: "0px !important",
          flex: "1 1 auto",
          // flexWrap: "wrap",
          // justifyContent: "space-evenly",
          // width: "88vw",
          marginLeft: "auto",
          marginRight: "auto",
          overflow: "hidden"

        }}
      >

        {getResult && getResult.map(url => (
          // <Link className="" to="#">
          <div className="member">
            <div className="member-img">
              <img src={props.from === "server" ? UploadsDomain + url.imageurl : replaceimg} width="100%" />
            </div>
            <div className="member-info">
              <span>{!url.description ? "no description" : url.description}</span>
            </div>
          </div>
          // </Link>

        ))}

        {!getResult &&
          <>
            <div className="member">
              <div className="member-img">
                <img src={replaceimg} width="100%" />
              </div>
              <div className="member-info">
                <span>nothing uploaded</span>
              </div>
            </div>
            <div className="member">
              <div className="member-img">
                <img src={replaceimg} width="100%" />
              </div>
              <div className="member-info">
                <span>nothing uploaded</span>
              </div>
            </div>
          </>
        }

      </div>
      {getResult &&
      <>
      <button className='btn slidework-arrow-left'

        onClick={() => scroll(-400)}
        onMouseOver={() => scroll(-400)}
      >

        <svg style={{width:"2vw"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.669 3.257a1 1 0 0 1 .152 1.314l-.078.098L3.045 11H23.2a1 1 0 0 1 .117 1.993L23.2 13H3.045l5.698 6.331a1 1 0 0 1-1.397 1.426l-.09-.088-7.241-8.05-.066-.094-.055-.102-.034-.081-.032-.106A1 1 0 0 1-.2 12l.007-.12.022-.121.036-.114.05-.11.064-.106.078-.098 7.2-8a1 1 0 0 1 1.412-.074z"></path></svg>
      </button>
      <button className='btn slidework-arrow-right'
        onClick={() => scroll(400)}
        onMouseOver={() => scroll(400)}
      >

        <svg style={{width:"2vw"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.331 3.257a1 1 0 0 1 1.323-.014l.09.088 7.241 8.05.066.094.055.102.034.081.032.106A1 1 0 0 1 24.2 12l-.007.12-.022.121-.036.114-.05.11-.064.106-.058.075a.992.992 0 0 1-.094.097l.081-.084-.007.01-7.2 8-.09.088a1 1 0 0 1-1.474-1.328l.078-.098L20.954 13H.8l-.117-.007a1 1 0 0 1 0-1.986L.8 11h20.154l-5.697-6.331-.078-.098a1 1 0 0 1 .152-1.314z"></path></svg>
       
      </button>
      </>
}
    </>
  )
}

export default Carouselw_