import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT  from '../../constant'

const Wallets = () => {
    const history = useHistory()
    const [wallet, setWallet] = useState([{
        id: "",
        name: "",
        total_amount: "",
        wallet_type: "",
        driver_id :{},
        customer_id :{}
    }]);
    const { id } = useParams();
    useEffect(() => {
        loadwallets();
    }, []);
    const loadwallets = async () => {
        let array = []
        const data ={
            type: 'customer'
        }
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-wallets`,data);
        console.warn(res.data.data)
        for (let item of res.data.data.docs) {
            if(item.customer_id){
                array.push(item)
            }
            continue
        }
        toast("List get successfully")
        setWallet(array);
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
                        <th>wallet Id</th>
                        <th>Name</th>
                        <th>total_amount</th>
                        <th>wallet_type</th>
                       
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        wallet.map((item, i) => <tr>
                            <td>{i+1}</td>
                            <td>{item._id}</td>
                            <td>{item.customer_id.name}</td>
                            <td>{item.total_amount }</td>
                            <td>{item.wallet_type }</td>
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

export default Wallets
