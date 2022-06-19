import React from 'react'
import headerimg from "../../../../assets/images/body.png"
function Body() {
    return (
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6 '
                style={{
                    textAlign: "justify",
                    paddingTop: "6%"
                }}
            >
                <span
                    className=''
                    style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        paddingBottom: "5px"
                    }}
                >
                    Book With The Best Near You
                </span>
                <p style={{ marginTop: "16px" }}   >
                    Check top Healthy and Beauty businesses on Bookme's marketplace
                </p>
                <p>
                    Check out their vibes from their business profiles and get to hear what their clients and other people say about their business.
                    You can even look at their portfolio.
                </p>
                <p>
                    With Bookme you can book your beauty appointment free and easy
                </p>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center'>
                <img
                    src={headerimg}
                    className="img-fluid" alt="" />
            </div>

        </div>
    )
}

export default Body