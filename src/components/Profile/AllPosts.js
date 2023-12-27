import React,{useContext, useEffect,useState} from 'react'
import './AllPost.css'
import Context from "../../Context/Context";
import { Carousel } from 'react-responsive-carousel';

const AllPosts = ({user}) => {

//   const posts=[
//     "https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/ecole-globale-girls-schoool.jpg.jpg?alt=media&token=70a0a68e-7fbf-445a-af12-6a13cdc0d383&_gl=1*12dw8y3*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM5MDE4NS41NC4wLjE2OTczOTAxODUuNjAuMC4w",
//     "https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/pic1.jpg?alt=media&token=f6f7e5a6-810a-4c65-8725-e8b11a851ec4&_gl=1*3ldy9p*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM5MDE4NS41NC4xLjE2OTczOTAyMDYuMzkuMC4w",
//     "https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/pic3.jpg?alt=media&token=aa682854-7736-426a-9ff4-454ae8cda449&_gl=1*su9j8m*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM5MDE4NS41NC4xLjE2OTczOTAyMjUuMjAuMC4w",
//     "https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/ecole-globale-girls-schoool.jpg.jpg?alt=media&token=70a0a68e-7fbf-445a-af12-6a13cdc0d383&_gl=1*12dw8y3*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM5MDE4NS41NC4wLjE2OTczOTAxODUuNjAuMC4w",
//     "https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/pic1.jpg?alt=media&token=f6f7e5a6-810a-4c65-8725-e8b11a851ec4&_gl=1*3ldy9p*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM5MDE4NS41NC4xLjE2OTczOTAyMDYuMzkuMC4w",
//     "https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/pic3.jpg?alt=media&token=aa682854-7736-426a-9ff4-454ae8cda449&_gl=1*su9j8m*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM5MDE4NS41NC4xLjE2OTczOTAyMjUuMjAuMC4w",
//     "https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/ecole-globale-girls-schoool.jpg.jpg?alt=media&token=70a0a68e-7fbf-445a-af12-6a13cdc0d383&_gl=1*12dw8y3*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM5MDE4NS41NC4wLjE2OTczOTAxODUuNjAuMC4w",
//     "https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/pic1.jpg?alt=media&token=f6f7e5a6-810a-4c65-8725-e8b11a851ec4&_gl=1*3ldy9p*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM5MDE4NS41NC4xLjE2OTczOTAyMDYuMzkuMC4w",
//     "https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/pic3.jpg?alt=media&token=aa682854-7736-426a-9ff4-454ae8cda449&_gl=1*su9j8m*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM5MDE4NS41NC4xLjE2OTczOTAyMjUuMjAuMC4w",
//     "https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/ecole-globale-girls-schoool.jpg.jpg?alt=media&token=70a0a68e-7fbf-445a-af12-6a13cdc0d383&_gl=1*12dw8y3*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM5MDE4NS41NC4wLjE2OTczOTAxODUuNjAuMC4w",
//     "https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/pic1.jpg?alt=media&token=f6f7e5a6-810a-4c65-8725-e8b11a851ec4&_gl=1*3ldy9p*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM5MDE4NS41NC4xLjE2OTczOTAyMDYuMzkuMC4w",
//     "https://firebasestorage.googleapis.com/v0/b/rn-igclone-759a8.appspot.com/o/pic3.jpg?alt=media&token=aa682854-7736-426a-9ff4-454ae8cda449&_gl=1*su9j8m*_ga*MTE3NzExMzU0Ni4xNjgyNTY1NjMw*_ga_CW55HF8NVT*MTY5NzM5MDE4NS41NC4xLjE2OTczOTAyMjUuMjAuMC4w"
// ]
const [posts,setPosts]=useState([]);
const context=useContext(Context)
const {fetchPosts}=context;
useEffect(() => {
  const fun=async()=>{
    const post=await fetchPosts(user._id)
    // console.log(post)
    // console.log(user._id)
    setPosts(post);
  }
  fun();
}, [])

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div className='image-grid'>
        {
          posts.length>0 && posts.map((post, index)=>(
            <div key={index} className='image-item'>
              <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop className='image-item'>
            {post.Picture.map((imageURL,index)=>(
                <div key={index}>
                <img src={imageURL} style={{width:"100%", borderRadius:"10px", height:"200px"}}/>
                </div>
            ))}   
            </Carousel>
            </div>
          ))
        }
        {
          posts.length==0 && <i>No Posts made yet</i>
        }
      </div>
    </div>
  )
}

export default AllPosts