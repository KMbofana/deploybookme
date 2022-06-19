import React from 'react'
import {
  Carousel,
} from 'react-bootstrap'

import { UploadsDomain } from '../../../../config/config';
import toast, { Toaster } from 'react-hot-toast';
import replaceimg from '../../../../assets/images/bg.png'

function Carousel_(props) {
  const files = props.files

  return (
    <div>
      <Carousel
        className=''
        style={{ position: "relative" }}
        fade>

        {Array.isArray(props.files) && props.files.map(url => (

          <Carousel.Item

          >
            <img
              className="d-block  moreCarousel"
              src={props.from === "server" ? UploadsDomain + url : url}
              alt="First slide"
            />

          </Carousel.Item>
        ))}
        {typeof props.files === "string" &&

          (<Carousel.Item

          >
            <img
              className="d-block w-100 moreCarousel"
              src={UploadsDomain + props.files}
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          )}
        {!props.files &&

          <Carousel.Item

          >
            <img
              className="d-block w-100 moreCarousel"
              src={replaceimg}
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        }



      </Carousel>
      {window.localStorage.user && JSON.parse(window.localStorage.user)._id === props.userID ? (
        <img src={typeof props.profile === "undefined" ? "" : UploadsDomain + props.profile} className="" alt=""
          style={{
            float: "right",
            position: "absolute",
            borderRadius: "15px",
            // borderColor: " #09d7fe",
            border: "2px solid #ffffff",
            width: "108px",
            height: "auto",
            zIndex: "100",
            marginTop: "-100px",
          }}></img>) : ""}
    </div>
  )
}

export default Carousel_