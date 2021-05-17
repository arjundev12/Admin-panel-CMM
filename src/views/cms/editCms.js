import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import '../../css/style.css'
import image from '../../assets/download.png'
const EditCms = () => {
    let history = useHistory();
    const { id } = useParams();
    const [data, setData] = useState({
    });
    const {
        type,
        title,
        content,
    } = data;
    const onInputChange = async e => {

        setData({ ...data, [e.target.name]: e.target.value });
        console.warn("oninput change data ", data)

    };
    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        console.log("request", data)
        let data1 = {}

        // data.login_type = 'manual'
        // console.log("daaaaaaa", data)
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/edit-vehicle`, data1);
        console.log("response", response)
        if (response.data.code == 200) {
            toast("Update successfully");
            setData(response.data.data);
            // setTimeout(function () { history.push("/vehicles"); }, 2000);
            // history.push("/users");
        }
        else {
            console.warn(response)
        }
    };

    const loadUser = async () => {

        // const result = 
        await axios.get(`${CONSTANT.baseUrl}/api/admin/view-cms?_id=${id}`).then((res) => {
            console.log("responseload", res.data)
            setData(res.data.data);
        }).catch(err => {
            console.warn(err)
        })

    };
    return (
        <>
            {/* <!DOCTYPE html> */}
            <html lang="en">

                <body>
                    <section>
                        <div class="UserArea">
                            <div class="container">
                                <div class="row">

                                    <div class="col-sm-9">
                                        <div class="UserRight">
                                            <h3>Edit Details</h3>
                                            <form onSubmit={e => onSubmit(e)}>
                                                <div class="row">
                                                    <div class="form-group col-sm-6">
                                                        <label>Type</label>
                                                        <select class="form-control" name="type" value={type}
                                                            onChange={e => onInputChange(e)} >
                                                            <option value="about">about</option>
                                                            <option value="term">term</option>
                                                            <option value="policy">policy</option>
                                                            {/* <option value="sedan">sedan</option> */}
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Title</label>
                                                        <input type="text" name="title" class="form-control" placeholder="" value={title}
                                                            onChange={e => onInputChange(e)} />
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Content</label>
                                                        <input type="text" name="content" class="form-control" placeholder="" value={content}
                                                            onChange={e => onInputChange(e)} />
                                                    </div>

                                                    {/* <div class="form-group col-sm-6">
                                                    <label>Status</label>
                                                        <select class="form-control" name="status" value={status}
                                                            onChange={e => onInputChange(e)}>
                                                            <option value="active">Active</option>
                                                            <option value="inactive">Inactive</option>
                                                        </select>
                                                    </div> */}
                                                    <div class="col-sm-12">
                                                        <button>Submit</button>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js "></script>
                    <script src="js/bootstrap.min.js "></script>
                    <script src="js/owl.carousel.js "></script>

                </body>
                <ToastContainer />
            </html>
        </>
    )
    // return (
    //     <div className="container">
    //         <div className="w-75 mx-auto shadow p-5">
    //             <h2 className="text-center mb-4">Edit A User</h2>
    //             <form onSubmit={e => onSubmit(e)}>
    //                 <div className="form-group">
    //                     <input
    //                         type="text"
    //                         className="form-control form-control-lg"
    //                         placeholder="Enter Your Name"
    //                         name="name"
    //                         value={name}
    //                         onChange={e => onInputChange(e)}
    //                     />
    //                 </div>
    //                 {/* <div className="form-group">
    //                     <input
    //                         type="text"
    //                         className="form-control form-control-lg"
    //                         placeholder="Enter Your driverStatus"
    //                         name="driverStatus"
    //                         value={driverStatus}
    //                         onChange={e => onInputChange(e)}
    //                     />
    //                 </div> */}
    //                 <div className="form-group">
    //                     <input
    //                         type="text"
    //                         className="form-control form-control-lg"
    //                         placeholder="Enter Your  Address"
    //                         name="address"
    //                         value={address}
    //                         onChange={e => onInputChange(e)}
    //                     />
    //                 </div>
    //                 <div className="form-group">
    //                     <input
    //                         type="text"
    //                         className="form-control form-control-lg"
    //                         placeholder="Enter Your Number"
    //                         name="phoneNo"
    //                         value={phoneNo}
    //                         onChange={e => onInputChange(e)}
    //                     />
    //                 </div>
    //                 {/* <div className="form-group">
    //         <input
    //           type="text"
    //           className="form-control form-control-lg"
    //           placeholder="Enter Your Website Name"
    //           name="website"
    //           value={website}
    //           onChange={e => onInputChange(e)}
    //         />
    //       </div> */}
    //                 <button className="btn btn-warning btn-block">Update User</button>
    //             </form>
    //         </div>
    //         {/* <ToastContainer /> */}
    //     </div>
    // );
};

export default EditCms;