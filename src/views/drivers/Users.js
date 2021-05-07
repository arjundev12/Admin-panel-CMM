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

    let [user, setUser] = useState([]);
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
        if (res.data.code == 200) {
            // toast("List get successfully")
            await setTotal(res.data.data.total)
            await setUser(res.data.data.docs);
        } else {
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
    const onInputChange = async (e, item) => {
        console.warn("oninput change data ",  item)
        let data = {}
        if(e.target.name == 'isDocumentVerify'){
            data.isDocumentVerify = e.target.value
        }
        if(e.target.name == 'driverStatus'){
            data.driverStatus = e.target.value
        }
        
        data._id = item._id
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-driver`, data);
        if(response.data.code ==200){
            toast( response.data.message)
            loadUser(page)
        }else{
            toast("somthing went wrong")
        }
      
    };

    return (
        <div>
            <Link className="btn btn-primary back" to="/">
                back to Home
       </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Profile Complete</th>
                        <th>Number</th>
                        <th>address</th>
                        <th>Status</th>
                        <th>Doc Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, i) => <tr>
                            <td>{i + index + 1}</td>
                            <td>{item.name ? item.name : null}</td>
                            <td>{item.isProfileCompleted == true ? "Yes" : "No"}</td>
                            <td>{item.phoneNo}</td>
                            <td>{item.address}</td>
                            <td>
                                <select class="form-control" name="driverStatus" value={item.driverStatus}
                                    onChange={e => onInputChange(e, item)}>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="blocked">Block</option>
                                </select></td>
                            <td>
                                <select class="form-control" name="isDocumentVerify" value={item.isDocumentVerify}
                                    onChange={e => onInputChange(e, item)}>
                                    <option value="uploade">Uploade</option>
                                    <option value="notupload">Notupload</option>
                                    <option value="verified">Verified</option>
                                    <option value="rejected">Rejected</option>
                                </select></td>
                            <td><Link className="btn btn-primary mr-2 " to={`/user/${item._id}`}>view </Link>
                                <Link className="btn btn-primary mr-2" to={`/user/edit/${item._id}`}> edit </Link>
                                <Link className="btn btn-primary mr-2" to={`/wallet/driver/${item._id}`}> wallet </Link>
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
