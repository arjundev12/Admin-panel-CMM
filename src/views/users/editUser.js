import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT  from '../../constant'
const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
    });

    const { name, loginType, address, phoneNo, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        console.log("request", user)
        let data = user
        if (user.name) {
            data.name = user.name
        }
        if (user.loginType) {
            data.loginType = user.loginType
        }
        if (user.address) {
            data.address = user.address
        }
        if (user.phoneNo) {
            data.phoneNo = user.phoneNo
        }
        data._id = user._id
        // data.login_type = 'manual'
        console.log("daaaaaaa", data)
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-driver`, data);
        if (response.data.code == 200) {
            toast("Update successfully");
            setTimeout(function(){history.push("/users"); }, 3000);
            // history.push("/users");
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
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your loginType"
                            name="loginType"
                            value={loginType}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your  Address"
                            name="address"
                            value={address}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Number"
                            name="phoneNo"
                            value={phoneNo}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div> */}
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default EditUser;