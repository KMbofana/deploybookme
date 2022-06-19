import React from 'react'
import {
    Carousel,
} from 'react-bootstrap'

import { UploadsDomain } from '../../../../config/config';
import toast, { Toaster } from 'react-hot-toast';
import ImageCropper from '../../components/editimages/ImageCropper'

function CarouselCrop(props) {
    const files = props.files

    return (
        <>

            <div

                style={{
                    position: "relative",
                   height: "100%",
                   width:"100%"
                }}

            >

               


                    <ImageCropper image={props.files} saveCrop={props.saveCrop} aspect={props.aspect} />



                <div
                style={{position:"absolute"}}
                >
                    
                </div>
            </div>

            {typeof props.files === "string" &&

                (<Carousel.Item

                >
                    <ImageCropper image={props.files} />

                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                )}



        </>
    )
}

export default CarouselCrop