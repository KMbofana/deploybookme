import React, { useEffect, useState } from 'react'

function HeadTest() {
  
 
    return (
        <div>
       
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 >We offer modern solutions for growing your business</h1>
                            <h2  >We are team of talented designers making
                                websites with
                                Bootstrap</h2>
                            <div  >
                                <div className="text-center text-lg-start"> <a href="#about"
                                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Get Started</span> <i className="bi bi-arrow-right"></i> </a></div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-img" id='services'>
                            <img
                                src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
                                className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default HeadTest