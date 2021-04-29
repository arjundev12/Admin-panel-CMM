import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from "axios";
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usersData from './UsersData'
import *as  CONSTANT  from '../../constant'
const User = ({ match }) => {
  // const user = usersData.find( user => user.id.toString() === match.params.id)
  const [user, setUser] = useState({
    id: "",
    name: "",
    loginType: "",
    address: "",
    phoneNo: ""
  });

  useEffect(() => {
    console.warn("params", match.params.id)
    getdata(match.params.id)
  }, []);
  const getdata = async (id) => {
    console.log("process.env.NODE_ENV", process.env.NODE_ENV)
    const res = await axios.get(`${CONSTANT.baseUrl}/api/admin/view-driver?_id=${id}`);
    console.warn("response", res.data)
    if (res.data.code != 200) {
      toast("Somethig went wrong");
    } else {
      toast("Get successfully");
      setUser(res.data.data);
    }
  }
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
    </Link>
      <h4 className="display-4">Name: {user.name}</h4>
      {/* <h2 className="display-4">Name: {user.name}</h2> */}
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Id: {user._id}</li>
        <li className="list-group-item">Name: {user.name}</li>
        {/* <li className="list-group-item">Username: {user.username}</li> */}
        <li className="list-group-item">Number: {user.phoneNo}</li>
        <li className="list-group-item">Type: {user.loginType + ""}</li>
        <li className="list-group-item">Address: {user.address}</li>
        {/* <li className="list-group-item">Team: {user.team.length > 0 ?
          user.team.map((item) => <li className="list-group-item">Name: {item.name} || Status : {item.status}</li>) : 0}</li> */}

      </ul>
      <ToastContainer />
    </div>
  )
}

export default User
