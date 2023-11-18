import React, { useState } from 'react';
import '../UploadPost.css';

const UploadPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    // Assuming you want to handle multiple image uploads
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const handleUpload = () => {
    // Perform the upload logic using the state values (title, description, images)
    // You can make an API call or perform any other necessary actions here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Images:', images);
  };

  return (
    <div className="upload-post-container">
      <div className="carousel-container">
        <br />
        <br />
        <div id="mycarousal-1" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#mycarousal-1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#mycarousal-1" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#mycarousal-1" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://th.bing.com/th/id/OIG.YaPpNeB7O.J1wIwa8rnj?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn" className="d-block" alt="..." width={'500px'} />
            </div>
            <div className="carousel-item">
              <img src="https://th.bing.com/th/id/OIG._Z2M4PuGy8DPMFLVh5.L?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn" className="d-block" alt="..." width={'500px'} />
            </div>
            <div className="carousel-item">
              <img src="https://th.bing.com/th/id/OIG.yT1lJqGUEFWumCmyJy09?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn" className="d-block" alt="..." width={'500px'} />
            </div>
          </div>
          <button className="carousel-control-prev btn-dark outline" type="button" data-bs-target="#mycarousal-1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next btn-dark outline" type="button" data-bs-target="#mycarousal-1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="description-container"><br />



        <div className="location-info">
          <div className="input-group mb-3">
            <span className="input-group-text">Title</span>
            <input type="text" className="form-control" placeholder="Enter title" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter description" value={description} onChange={handleDescriptionChange}></textarea>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Tags</span>
            <input type="text" className="form-control" placeholder="Enter tags" />
          </div>

          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" onChange={handleFileChange} multiple />
            <label class="input-group-text" for="inputGroupFile02">Upload Photo</label>
          </div>




          <div className='upload'>
            <button className="upload-button" onClick={handleUpload}>Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
