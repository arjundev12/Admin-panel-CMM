import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'

const Users = () => {
    const history = useHistory()
    const [showPerPage, setShowPerPage] = useState(10);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);

    const [user, setUser] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        loadUser(page);
    }, [page, total]);
    const loadUser = async (page) => {
        const data = {
            offset: page,
            limit: 10
        }
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-driver`, data);
        console.warn("respons", res.data.data)
        if(res.data.code ==200){
            toast("List get successfully")
            await setTotal(res.data.data.total)
            await setUser(res.data.data.docs);
        }else{
            toast("somthing went wrong")
        }
        
    };

    const onPaginationChange = (start, end) => {
        console.warn("getee, ", start, end)
        setPage(start)
        setIndex(end)
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
                            <td>{i+index+1}</td>
                            <td>{item.name ? item.name : null}</td>
                            <td>{item.loginType}</td>
                            <td>{item.phoneNo}</td>
                            <td>{item.address}</td>
                            <td><Link className="btn btn-primary mr-2 " to={`/user/${item._id}`}>view </Link>
                                <Link className="btn btn-primary mr-2" to={`/user/edit/${item._id}`}> edit </Link>
                                {/* <Link className="btn btn-primary " to="/"> delete</Link> */}
                            </td>
                        </tr>)
                    }
                </tbody>
              
            </Table>
            <ToastContainer />
            <Pagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={total}
                page={page}
            />
        </div>
    )
}

export default Users
