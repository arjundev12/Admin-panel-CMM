import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'
const Wallets = () => {
    let temp;
    const history = useHistory()
    const [showPerPage, setShowPerPage] = useState(2);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);
    const [wallet, setWallet] = useState([]);
    const { type } = useParams();
    useEffect(() => {
        loadwallets(page);
    }, [page,total]);
    const loadwallets = async (page) => {
        let array = []
        const data = {
            type: type,
            offset: page,
            limit: 2
        }
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-wallets`, data);
        console.warn(res.data.data)
        for (let item of res.data.data.docs) {
            if (type == 'customer') {
                if (item.customer_id) {
                    array.push(item)
                }
            } else {
                array.push(item)
            }

        }
        toast("List get successfully")
        await setTotal(res.data.data.total)
        await setWallet(array);
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
            <Link className="btn btn-primary" to={`/wallet/${type}`}>
                back 
       </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>wallet Id</th>
                        <th>Name</th>
                        <th>total_amount</th>
                        <th>wallet_type</th>
                        <th>Actions</th>

                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        wallet.map((item, i) => <tr>
                            <td>{i+index+1}</td>
                            <td>{item._id}</td>
                            {/* <td>{item.name}</td> */}
                            <td>{ item.wallet_type == 'customer'?  item.customer_id.name :item.driver_id.name}</td>
                            <td>{item.total_amount}</td>
                            <td>{item.wallet_type}</td>
                            <td>
                                <Link className="btn btn-primary mr-2 " to={`/wallet/${item._id}/${item.wallet_type}`}>view </Link>
                                {/* <Link className="btn btn-primary mr-2" to={`/user/edit/${item._id}`}> edit </Link> */}
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

export default Wallets
