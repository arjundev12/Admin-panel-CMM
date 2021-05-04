import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT  from '../../constant'

const Customers = () => {
    const history = useHistory()
    const [user, setUser] = useState([{
        id: "",
        name: "",
        status: "",
        location: "",
        number: ""
    }]);
    const { id } = useParams();
    useEffect(() => {
        loadUser();

    }, []);
    const loadUser = async () => {
        let array = []
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-customers`);
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
            <Link className="btn btn-primary" to="/dashboard">
                back to Home
       </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Status</th>
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
                            <td>{item.status}</td>
                            <td>{item.number }</td>
                            <td>{item.location }</td>
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

export default Customers
