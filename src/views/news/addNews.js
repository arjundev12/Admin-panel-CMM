import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';
const AddNews = () => {
  let history = useHistory();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    image: ""
  });
  const [image, setImage] = useState({});

  const { title, content } = blog;
  const onInputChange = e => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const onInputChange1 = async e => {
    setImage({ image: e.target.files[0] });
  };
  const uploadImage = async e => {
    const data = new FormData()
    data.append('image', image.image)
    const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/upload-image`, data);

    if (res.data.code == 200) {
      toast(res.data.message);
      console.warn(res.data.data.path)
      await setBlog({ ...blog, image: res.data.data.path });

    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.warn("onsumbit", blog)
    const res =await axios.post(`${CONSTANT.baseUrl}/api/admin/news`, blog);
    toast(res.data.message);
    setTimeout(function(){history.push("/news"); }, 1000);
    
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A News</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your content"
              name="content"
              value={content}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div><input type="file" name="file" onChange={e => onInputChange1(e)} />
            <button type="button" className="btn btn-primary" onClick={e => uploadImage(e)}>Upload</button>

          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>

      </div>
      <ToastContainer/>
    </div>
  );
};

export default AddNews;