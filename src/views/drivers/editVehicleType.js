import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import '../../css/style.css'
import image from '../../assets/download.png'
const EditVehicleType = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
    });
   

    const { 
        name,
        vehicle_type,
        status,
        base_price,
        vehicle_rate,
        unit
    } = user;
    const onInputChange = async e => {

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


        if (user.vehicle_type) {
            data.vehicle_type = user.vehicle_type
        }
        if (user.status) {
            data.status = user.status
        }
        if (user.base_price) {
            data.base_price = user.base_price
        }
        if (user.vehicle_rate) {
            data.vehicle_rate = user.vehicle_rate
        }
        if (user.unit) {
            data.unit = user.unit
        }

        data._id = user._id
        // data.login_type = 'manual'
        console.log("daaaaaaa", data)
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/edit-vehicle-type`, data);
        console.log("response", response)
        if (response.data.code == 200) {
            toast("Update successfully");
            setUser(response.data.data);
            setTimeout(function () { history.push("/vehicles/types"); }, 2000);
            // history.push("/users");
        }
        else {
            console.warn(response)
        }
    };

    const loadUser = async () => {

        // const result = 
        await axios.get(`${CONSTANT.baseUrl}/api/admin/view-vehicle-typs?_id=${id}`).then((res) => {
            console.log("responseload", res.data)
            setUser(res.data.data);
        }).catch(err => {
            console.warn(err)
        })

    };
    return (
        <>
            {/* <!DOCTYPE html> */}
            <html lang="en">

                {/* <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title></title>

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
                </head> */}

                <body>

                    <section>
                        <div class="UserArea">
                            <div class="container">
                                <div class="row">
                                    {/* <div class="col-sm-3 UserLeft">

                                        <form>
                                            <figure>
                                                <img src={file.image?CONSTANT.img_url + file.image:image} height={150} width={600}  />
                                            </figure>

                                            <figcaption>
                                                <span><i class="fa fa-upload" aria-hidden="true"></i>Upload Images</span>
                                                <input type="file" name="image" onChange={e => onInputChange(e)} />
                                                <button><i class="fa fa-check" aria-hidden="true"></i></button>
                                            </figcaption>
                                        </form>

                                    </div> */}
                                    <div class="col-sm-9">
                                        <div class="UserRight">
                                            <h3>Edit Details</h3>
                                            <form onSubmit={e => onSubmit(e)}>
                                                <div class="row">
                                                <div class="form-group col-sm-6">
                                                        <label>Vehicle Type</label>
                                                        <select class="form-control" name="vehicle_type" value={vehicle_type}
                                                            onChange={e => onInputChange(e)} >
                                                            <option value="mini">mini</option>
                                                            <option value="micro">micro</option>
                                                            <option value="bike">bike</option>
                                                            <option value="sedan">sedan</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>status</label>
                                                        <select class="form-control" name="status" value={status}
                                                            onChange={e => onInputChange(e)} >
                                                            <option value="active">Active</option>
                                                            <option value="inactive">Inactive</option>
                                                        </select>
                                                    </div>
                                                    
                                                    <div class="form-group col-sm-6">
                                                        <label>Base Price</label>
                                                        <input type="text" name="base_price" class="form-control" placeholder="" value={base_price}
                                                            onChange={e => onInputChange(e)} />
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Vehicle Rate</label>
                                                        <input type="text" name="vehicle_rate" class="form-control" placeholder="" value={vehicle_rate}
                                                            onChange={e => onInputChange(e)} />
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Rate Unit</label>
                                                        <select class="form-control" name="unit" value={unit}
                                                            onChange={e => onInputChange(e)} >
                                                            <option value="INR">INR</option>
                                                            <option value="USD">USD</option>
                                                        </select>
                                                    </div>
                                                   

                                                    {/* <div class="form-group col-sm-6">
                                                        <label>Address</label>
                                                        <input type="text" name="address" class="form-control" placeholder="" value={address}
                                                            onChange={e => onInputChange(e)} />
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

export default EditVehicleType;