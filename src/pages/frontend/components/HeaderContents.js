import React from 'react'
import HeaderCategory from './HeaderCategory'
import headerimg from "../../../assets/images/heade-img-01-01.png"
import bgimg from "../../../assets/images/bg.png"
import SearchModalHome from './SearchModalHome'

function HeaderContents(props) {
    return (
        <div>

           
            <section id="hero" className="hero d-flex align-items-center"
             style={{
                 background :"#ffffff"
             }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column search-bg justify-content-center header-search-bar"
                            style={{
                                textAlign: "center",
                                marginTop: "-128px",
                                zIndex: 1,
                                textAlign: "center"
                            }}
                        >
                            <h4 className='' style={{ color: "#012970" }}>Book Stylist professionals near you</h4>
                           <SearchModalHome />
                           {props.categories && (  <HeaderCategory categories={props.categories}  />) }
                          
                        </div>
                        <div className="col-lg-6 hero-img header-img"
                            style={{

                                zIndex: 0,
                                marginTop: "-90px",

                            }}
                        >
                            <img
                                src={headerimg}
                                className="img-fluid header-image" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeaderContents