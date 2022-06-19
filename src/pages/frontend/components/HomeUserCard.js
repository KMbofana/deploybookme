import React from 'react'
import { Link } from "react-router-dom";
import { UploadsDomain, ApiDomain } from '../../../config/config';
import loading from '../../../assets/images/headerloading.gif'
function HomeUserCard(props) {
  const data = props.data
  return (


    <Link className="" to={typeof data._id.$oid === "undefined" ? "#" : "more/" + data._id.$oid}>
      <div className="member">
        <div className="member-img">
          <img src={typeof data.profileimageurl === "undefined" ? loading : UploadsDomain + data.profileimageurl} className="" alt=""
            style={{
              width: "100%",
              height: "100%"
            }}
          />
          <div className="social">
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i className="bi bi-facebook">
              </i>
            </a>
            <a href="#">
              <i className="bi bi-instagram">
              </i>
            </a>
            <a href="#">
              <i className="bi bi-whatsapp">
              </i>
            </a>
          </div>
        </div>
        <div className="member-info">
          <h4>{typeof data.name === "undefined" ? "no name" : data.name}</h4>
          {/* <p>{typeof data.city === "undefined" ? "no bio" : data.city}</p> */}
        </div>
      </div>
    </Link>


  )
}

function HomeUserCardLoading() {

  return (


    <div className="member">
      <div className="member-img">
        <img src={loading} className="img-" alt=""
          style={{
            width: "100%",
            height: "100%"
          }}
        />
        <div className="social">
          <a href="#">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#">
            <i className="bi bi-facebook">
            </i>
          </a>
          <a href="#">
            <i className="bi bi-instagram">
            </i>
          </a>
          <a href="#">
            <i className="bi bi-linkedin">
            </i>
          </a>
        </div>
      </div>
      <div className="member-info">
        <h4 style={{ color: '#d4d6da' }}>loading...</h4>
        <p style={{ color: '#d4d6da' }}>loading...</p>
      </div>
    </div>

  )
}

export { HomeUserCard, HomeUserCardLoading }