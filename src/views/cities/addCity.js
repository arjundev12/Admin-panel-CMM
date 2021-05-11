import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import '../../css/style.css'
import image from '../../assets/download.png'
import { ICountry, IState, ICity } from 'country-state-city'

import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const AddCity = () => {
    let history = useHistory();
    const [city, setCity] = useState({
        name: "",
        status: "",

    });
    const [country, setCountry] = useState({});
    const [region, setRegion] = useState({});

    const selectCountry = async (val) => {
        console.warn("countyi", val)
        await setCountry({ country: val });
        console.warn("countyi", country)
    }
    const selectRegion = async (val) => {
        await setRegion({ region: val });
    }

    // const { name,
    //     number,
    //     status,
    //     location,
    //     updatedAt
    // } = user;
    // useEffect(() => {
    //     loadUser();
    // }, []);

    const onSubmit = async e => {
        e.preventDefault();
        let data = {}
        // = user
        // if (user.name) {
        //     data.name = user.name
        // }
        // if (user.number) {
        //     data.number = user.number
        // }
        // if (user.status) {
        //     data.status = user.status
        // }
        // if (user.location) {
        //     data.location = user.location
        // }
        // if (user.updatedAt) {
        //     data.updatedAt = user.updatedAt
        // }

        // data._id = user._id
        // data.login_type = 'manual'
        console.log("daaaaaaa", data)
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-customer`, data);
        console.log("response", response)
        if (response.data.code == 200) {
            // toast("Update successfully");
            setTimeout(function () { history.push("/customers"); }, 2000);
            // history.push("/users");
        }
        else {
            console.warn(response)
        }
    };

    // const loadUser = async () => {

    //     // const result = 
    //     await axios.get(`${CONSTANT.baseUrl}/api/admin/view-customer?_id=${id}`).then((res) => {
    //         console.log("responseload", res.data)
    //         setUser(res.data.data);
    //         setFile({image:res.data.data.profile_pic })
    //     }).catch(err => {
    //         console.warn(err)
    //     })

    // };
    return (
        <>

            {/* <!DOCTYPE html> */}
            <html lang="en">

                <head>
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
                </head>

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
                                                        <label>City Name</label>
                                                        <CountryDropdown
                                                            value={country}
                                                            onChange={(val) => this.selectCountry(val)} />
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Country Name</label>
                                                        <RegionDropdown
                                                            country={"India"}
                                                            value={region}
                                                            onChange={(val) => selectRegion(val)} />
                                                    </div>
                                                    {/* <div class="form-group col-sm-6">
                                                        <label>status</label>
                                                        <select class="form-control" name="status" value=""
                                                            onChange={e => onInputChange(e)} >
                                                            <option value="active">active</option>
                                                            <option value="inactive">inactive</option>
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
            </html>
        </>
    )

};

export default AddCity;