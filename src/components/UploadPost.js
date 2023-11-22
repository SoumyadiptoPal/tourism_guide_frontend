import React, { useState, useContext } from 'react';
import {
  TextField,
  TextareaAutosize,
  Button,
  Input,
  FormControl,
  Container,
  Grid,
  Paper,
} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../UploadPost.css';
import Context from '../Context/Context';



const items = [
  {
    id: 1,
    src: 'https://th.bing.com/th/id/OIG.YaPpNeB7O.J1wIwa8rnj?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: 'https://th.bing.com/th/id/OIG._Z2M4PuGy8DPMFLVh5.L?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn',
    alt: 'Image 2',
  },
  {
    id: 3,
    src: 'https://th.bing.com/th/id/OIG.yT1lJqGUEFWumCmyJy09?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn',
    alt: 'Image 3',
  },
];

const UploadPost = () => {
  const { uploadImage, uploadPost } = useContext(Context);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const handleUpload = async () => {
    //console.log('Title:', title);
    //console.log('Description:', description);
    //console.log('Images:', images);
	
	for (const image of images) {
      try { 		
		const url = await uploadImage(image);
		setUrls((prevState) => [...prevState, url]);
	  } catch (error) {
		alert(error);
		return;
	  }
	}

	uploadPost({
	  Title: title,
	  Description: description,
	  Picture: urls
	});
  }

  return (
    <Container maxWidth="lg" className="upload-post-container">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {/* Carousel Component */}
          <Paper elevation={3} className="carousel-container">
            <Carousel>
              {items.map((item) => (
                <div key={item.id}>
                  <img src={item.src} alt={item.alt} style={{ width: '72%' }} />
                </div>
              ))}
            </Carousel>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* Description Container */}
          <Paper elevation={3} className="description-container">
            <div className="location-info">
              <FormControl fullWidth variant="outlined" className="mb-3">
                
                <TextField
                  id="outlined-title"
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={handleTitleChange}
                  variant="outlined"
                />
              </FormControl>

              <FormControl fullWidth variant="outlined" className="mb-3">
                
                <TextareaAutosize
                  id="outlined-description"
                  rowsMin={3}
                  placeholder="Enter description"
                  value={description}
                  onChange={handleDescriptionChange}
                  className="form-control"
                />
              </FormControl>

              {/* Tags Input */}
              <FormControl fullWidth variant="outlined" className="mb-3">
                
                <TextField id="outlined-tags" type="text" placeholder="Enter tags" variant="outlined" />
              </FormControl>

              {/* File Input */}
              <FormControl fullWidth className="mb-3">
                
                <Input type="file" id="input-upload-photo" onChange={handleFileChange} multiple />
              </FormControl>

              {/* Upload Button */}
              <div className="upload">
                <Button variant="contained" color="primary" onClick={handleUpload}>
                  Upload
                </Button>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UploadPost;
