import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PostPics = ({images}) => {
  return (
    <div style={{backgroundColor:"white"}}>
        <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
            {images.map((imageURL)=>(
                <div>
                <img src={imageURL} style={{maxHeight: "500px"}}/>
                </div>
            ))}
                
            </Carousel>
    </div>
  )
}

export default PostPics