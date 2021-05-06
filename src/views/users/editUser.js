import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import '../../css/style.css'
import image from '../../assets/download.png'
const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
    });

    const { name,
        driverStatus,
        address,
        phoneNo,
        website,
        loginType,
        subscription,
        isProfileCompleted,
        isVehicleComplete,
        isNumberVerify,
        isDocumentVerify,
        city_id,
        pincode
    } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.warn("oninput change data ", user)
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        console.log("request", user)
        let data = {}
        // = user


        if (user.name) {
            data.name = user.name
        }
        if (user.driverStatus) {
            data.driverStatus = user.driverStatus
        }
        if (user.address) {
            data.address = user.address
        }
        if (user.phoneNo) {
            data.phoneNo = user.phoneNo
        }
        if (user.isProfileCompleted) {
            data.isProfileCompleted = user.isProfileCompleted
        }
        if (user.subscription) {
            data.subscription = user.subscription
        }
        if (user.isVehicleComplete) {
            data.isVehicleComplete = user.isVehicleComplete
        }
        if (user.isNumberVerify) {
            data.isNumberVerify = user.isNumberVerify
        }
        if (user.isDocumentVerify) {
            data.isDocumentVerify = user.isDocumentVerify
        }
        if (user.loginType) {
            data.loginType = user.loginType
        }
        if (user.city_id) {
            data.city = user.city_id
        }
        if (user.pincode) {
            data.pincode = user.pincode
        }

        data._id = user._id
        // data.login_type = 'manual'
        console.log("daaaaaaa", data)
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-driver`, data);
        if (response.data.code == 200) {
            toast("Update successfully");
            setTimeout(function () { history.push("/users"); }, 3000);
            // history.push("/users");
        }
        else {
            console.warn(response)
        }
    };

    const loadUser = async () => {

        // const result = 
        await axios.get(`${CONSTANT.baseUrl}/api/admin/view-driver?_id=${id}`).then((res) => {
            console.log("response", res.data)
            setUser(res.data.data);
        }).catch(err => {
            console.warn(err)
        })

    };
    return (
        <>
            {/* <!DOCTYPE html> */}
            <html lang="en">

                <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {/* <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --> */}
                    <title></title>

                    {/* <!-- Bootstrap --> */}
                    <link href="css/style.css" rel="stylesheet" />
                    <link href="css/animate.css" rel="stylesheet" />
                    <link href="css/bootstrap.min.css" rel="stylesheet" />
                    <link href="css/owl.carousel.min.css" rel="stylesheet" />

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Raleway:200,300,400,500,600,700,800,900" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Electrolize" rel="stylesheet" />
                </head>

                <body>

                    <section>
                        <div class="UserArea">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-3 UserLeft">

                                        <form>
                                            <figure>
                                                <img src={image} />
                                            </figure>

                                            <figcaption>
                                                <span><i class="fa fa-upload" aria-hidden="true"></i>Upload Images</span>
                                                <input type="file" name="" />
                                                <button><i class="fa fa-check" aria-hidden="true"></i></button>
                                            </figcaption>
                                        </form>

                                    </div>
                                    <div class="col-sm-9">
                                        <div class="UserRight">
                                            <h3>Edit Details</h3>
                                            <form onSubmit={e => onSubmit(e)}>
                                                <div class="row">
                                                    <div class="form-group col-sm-6">
                                                        <label>Name Title</label>
                                                        <input type="text" name="name" class="form-control" placeholder="" value={name}
                                                            onChange={e => onInputChange(e)} />
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>mobile number</label>
                                                        <input type="text" name="phoneNo" class="form-control" placeholder="" value={phoneNo}
                                                            onChange={e => onInputChange(e)} />
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Address</label>
                                                        <input type="text" name="address" class="form-control" placeholder="" value={address}
                                                            onChange={e => onInputChange(e)} />
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Pincode</label>
                                                        <input type="text" name="pincode" class="form-control" placeholder="" value={pincode}
                                                            onChange={e => onInputChange(e)} />
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Profile Completed</label>
                                                        <select class="form-control" name="isProfileCompleted" value={isProfileCompleted}
                                                            onChange={e => onInputChange(e)} >
                                                            <option value={true}>Yes</option>
                                                            <option value={false}>No</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Vehicle Complete</label>
                                                        <select class="form-control" name="isVehicleComplete" value={isVehicleComplete}
                                                            onChange={e => onInputChange(e)}>
                                                            <option value={true}>Yes</option>
                                                            <option value={false}>No</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Number Verify</label>
                                                        <select class="form-control" name="isNumberVerify" value={isNumberVerify}
                                                            onChange={e => onInputChange(e)}>
                                                            <option value={true}>Yes</option>
                                                            <option value={false}>No</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Document Verify</label>
                                                        <select class="form-control" name="isDocumentVerify" value={isDocumentVerify}
                                                            onChange={e => onInputChange(e)}>
                                                            <option value="verified">verified</option>
                                                            <option value="rejected">rejected</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>subscription</label>
                                                        <select class="form-control" name="subscription" value={subscription}
                                                            onChange={e => onInputChange(e)} >
                                                            <option value={true}>true</option>
                                                            <option value={false}>false</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Driver Status</label>
                                                        <select class="form-control" name="driverStatus" value={driverStatus}
                                                            onChange={e => onInputChange(e)}>
                                                            <option value="active">active</option>
                                                            <option value="inactive">inactive</option>
                                                            <option value="blocked">blocked</option>
                                                        </select>
                                                    </div>
                                                    {/* <div class="form-group col-sm-6">
                                                        <label>Address</label>
                                                        <input type="text" name="address" class="form-control" placeholder="" value={address}
                                                            onChange={e => onInputChange(e)} />
                                                    </div> */}
                                                    <div class="form-group col-sm-6">
                                                        <label>Driver Type</label>
                                                        <select class="form-control" name="loginType" value={loginType}
                                                            onChange={e => onInputChange(e)}>
                                                            <option value="Driver_partner">Driver partner</option>
                                                            <option value="Fleet_partner">Fleet partner</option>
                                                            {/* <option value="blocked">blocked</option> */}
                                                        </select>
                                                    </div>

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
                <ToastContainer/>
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

export default EditUser;