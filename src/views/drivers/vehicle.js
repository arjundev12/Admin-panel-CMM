import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'

const Vehicle = () => {
    const history = useHistory()
    const [showPerPage, setShowPerPage] = useState(5);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);
    const [vehicle, setVehicle] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        laodVehicle(page);
    }, [page, total]);
    const laodVehicle = async () => {
        const data = {
            offset: page,
            limit: 5
        }
        console.log("requset0", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-vehicle`, data);
        console.warn("respons", res.data.data)
        if (res.data.code == 200) {
            toast("List get successfully")
            await setTotal(res.data.data.total)
            await setVehicle(res.data.data.docs);
        } else {
            toast("somthing went wrong")
        }
    };
    const onPaginationChange = (start, end) => {
        console.warn("getee, ", start, end)
        setPage(start)
        setIndex(end)
    };
    const onInputChange = async (e, item) => {
        console.warn("oninput change data ", item)
        let data = {}
        let response
        if (e.target.name == 'isDocumentVerify') {
            data.isDocumentVerify = e.target.value
            data._id = item.vehicle_owner._id
            response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-driver`, data);

        }
        if (e.target.name == 'status') {
            data.driverStatus = e.target.value
            data._id = item._id
            response = await axios.put(`${CONSTANT.baseUrl}/api/admin/edit-vehicle`, data);
        }

        if (response.data.code == 200) {
            toast(response.data.message)
            laodVehicle(page)
        } else {
            toast("somthing went wrong")
        }

    };

    return (
        <div>
            <Link className="btn btn-primary" to="/dashboard">
                back to Home
       </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Vehicle Type</th>
                        <th>Vehicle Number</th>
                        <th>Vehicle Owner</th>
                        <th>Doc Status</th>
                        <th>Status</th>

                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vehicle.map((item, i) => <tr>
                            <td>{i + index + 1}</td>
                            <td>{item.vehicle_type ? item.vehicle_type : null}</td>
                            {/* <td>{item.vehicle_owner.isDocumentVerify}</td> */}
                            <td>{item.vehicle_number}</td>
                            <td>{item.vehicle_owner.name}</td>
                            <td>
                                <select class="form-control" name="isDocumentVerify" value={item.vehicle_owner.isDocumentVerify}
                                    onChange={e => onInputChange(e, item)}>
                                    <option value="uploade">Uploade</option>
                                    <option value="notupload">Notupload</option>
                                    <option value="verified">Verified</option>
                                    <option value="rejected">Rejected</option>
                                </select></td>
                            <td>
                                <select class="form-control" name="status" value={item.status}
                                    onChange={e => onInputChange(e, item)}>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    {/* <option value="blocked">Block</option> */}
                                </select></td>
                            <td>
                                <Link className="btn btn-primary mr-2" to={`/vehicles/update/${item._id}`}> edit </Link>

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

export default Vehicle
