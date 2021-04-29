import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT  from '../../constant'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CPagination
} from '@coreui/react'

import usersData from './UsersData'
import { number } from 'prop-types'
// import { from } from 'core-js/core/array';

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}

const Users = () => {
    const history = useHistory()
    const [user, setUser] = useState([{
        id: "",
        name: "",
        loginType: "",
        address: "",
        phoneNo: ""
    }]);
    const { id } = useParams();
    useEffect(() => {
        loadUser();

    }, []);
    const loadUser = async () => {
        let array = []
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-driver`);
        console.warn(res.data.data)
        for (let item of res.data.data.docs) {
            if (item.name) {
                array.push(item)
            }
        }
        toast("List get successfully")
        setUser(array);
    };
    // const detailsView = async (item) => {
    //     console.warn("inside handle click", item)
    //     // history.push(`/user/${item._id}  `)
    // }

    return (
        <div>
            <Link className="btn btn-primary" to="/">
                back to Home
       </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Number</th>
                        <th>address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, i) => <tr>
                            <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.loginType}</td>
                            <td>{item.phoneNo }</td>
                            <td>{item.address }</td>
                            <td><Link className="btn btn-primary mr-2 " to={`/user/${item._id}`}>view </Link>
                                <Link className="btn btn-primary mr-2" to={`/user/edit/${item._id}`}> edit </Link>
                                {/* <Link className="btn btn-primary " to="/"> delete</Link> */}
                                </td>
                        </tr>)
                    } 
                </tbody>
            </Table>
            <ToastContainer />
        </div>
    )
}

export default Users
