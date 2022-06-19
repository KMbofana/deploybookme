import React, { useEffect, useState } from 'react'
import {
    Form,
    Button,
    FormControl,
    Modal
} from 'react-bootstrap'

import Reviews from '../Specialistcomponents/Reviews';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function ViewReviews(props) {

    console.log(props)

    const [where, setWhere] = useState(false)
    const [what, setWhat] = useState(false)

    const scroll = () => console.log;

    const handleCloseWhat = () => setWhat(false);
    const handleCloseWhere = () => setWhere(false);

    const handleWhere = () => setWhere(true);
    const handleWhat = () => {
        setWhat(true);

    }


    return (
        <div>


            <button className="btn btn-sm" type="button"
                onClick={() => handleWhat()}
            >
                <span style={{ fontSize: "9px" }}><i>More Reviews</i> </span>
            </button>



            <Modal size="lg" show={what}
                scrollable={true}
                onHide={handleCloseWhat}
                style={{


                }}
            >  <Modal.Header>
            <Modal.Title>
                <button className="btn btn-sm" onClick={() => {
                    handleCloseWhat()
              
                }}>
                    <ArrowBackIcon />
                </button>



            </Modal.Title>
        </Modal.Header>
                <Modal.Body>
                    {/*                
                    <InfiniteScroll
                        pageStart={0}
                        // loadMore={alert("hhhh")}
                        hasMore={true || false}
                        loader={<div className="" key={0}>Loading ...</div>}
                        // useWindow={false}
                    > */}

                    <Reviews reviews={props.reviews} number="more" />
                    {/* </InfiniteScroll> */}
                    {props.hasmoreReviews ? <Button className='' variant="" onClick={props.loadReviews()}>
                        more
                    </Button> :
                        <Button disabled className='' variant="" onClick={props.loadReviews()}>
                            
                        </Button>
                    }


                </Modal.Body>
              
            </Modal>



        </div >
    )
}

export default ViewReviews