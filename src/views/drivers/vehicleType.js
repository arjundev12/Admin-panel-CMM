import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT  from '../../constant'
import Pagination from '../pagination/pagination'

const VehicleType = () => {
    const history = useHistory()
    const [showPerPage, setShowPerPage] = useState(4);
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
            limit: 10
        }
        console.log("requset0", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/vehicle/types`,data);
        console.warn("respons", res.data.data)
        if(res.data.code ==200){
            toast("List get successfully")
            await setTotal(res.data.data.total)
            await setVehicle(res.data.data.docs);
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
            <Link className="btn btn-primary" to="/dashboard">
                back to Home
       </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Vehicle Type</th>
                        <th>Base Price </th>
                        <th>Vehicle Rate </th>
                        <th>Status</th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vehicle.map((item, i) => <tr>
                            <td>{i+1}</td>
                            <td>{item.vehicle_type ? item.vehicle_type : null}</td>
                            <td>{item.base_price ? item.base_price : "0"} {item.unit?item.unit : "INR" }</td>
                            <td>{item.vehicle_rate ? item.vehicle_rate : "5" } {item.unit?item.unit : "INR" }</td>
                            <td>{item.status ? item.status : null}</td>
                            <td>
                                <Link className="btn btn-primary mr-2" to={`/vehicles/edit/${item._id}`}> edit </Link>
                                </td>
                        </tr>)
                    } 
                </tbody>
            </Table>
            <ToastContainer />
            {/* <Pagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={total}
                page={page}
            /> */}
        </div>
    )
}

export default VehicleType
