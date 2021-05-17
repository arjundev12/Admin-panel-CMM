import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'
import '../../css/style.css'
import csc from 'country-state-city'

const Cms = () => {
    const history = useHistory()
    const [showPerPage, setShowPerPage] = useState(10);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        loaddata(page);
    }, [page, total]);

    const loaddata = async () => {
        const data = {
            // offset: page,
            // limit: 10
        }
        console.log("requset0", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-cms`, data);
        console.warn("respons", res.data.data)
        if (res.data.code == 200) {
            toast("List get successfully")
            // await setTotal(res.data.data.total)
            await setData(res.data.data);
        } else {
            toast("somthing went wrong")
        }
    };
    // const onPaginationChange = (start, end) => {
    //     console.warn("getee, ", start, end)
    //     setPage(start)
    //     setIndex(end)
    // };
    const itemDelete = async (e, item)=>{
        console.log("delete item", item)
        const res = await axios.delete(`${CONSTANT.baseUrl}/api/admin/delete-cms?_id=${item._id}`);
        toast(`${res.data.message}`)
        loaddata(page);
    }
    const onInputChange = async (e, item) => {
        console.warn("oninput change data ", item)
        let data = {}
        if (e.target.name == 'status') {
            data.status = e.target.value
        }

        // data._id = item._id
        // let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-city`, data);
        // if (response.data.code == 200) {
        //     toast(response.data.message)
        //     loadcities(page)
        // } else {
        //     toast("somthing went wrong")
        // }
    }
    //======================================modalcode==================================//

    const [show, setShow] = useState(false);
    // const [region, setRegion] = useState([]);
    // const [regionName, setRegionName] = useState();
    // const [cityName, setCityName] = useState()
    // const [cityArray, setCityArray] = useState([]);

    const handleClose = () => setShow(false);

    const handleShow = async () => {
        setShow(true);
        // let data = await csc.getStatesOfCountry('IN')
        // await setRegion(data)
    }

    // const onInputChangeRegion = async (e) => {

    //     await setRegionName(e.target.value)
    //     let getcitys = await csc.getCitiesOfState('IN', e.target.value)
    //     await setCityArray(getcitys)
    // }

    // const onInputChangeCity = async (e) => {
    //     await setCityName(e.target.value)
    // }
    // const onSubmit = async e => {
    //     e.preventDefault();
    //     let data = {
    //         cityName: cityName
    //     }

    //     const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-city`, data);
    //     if (res.data.code == 200) {
    //         toast(res.data.message)
    //         handleClose()
    //         loadcities(page);
    //     } else {
    //         toast(res.data.message)
    //         handleClose()
    //         loadcities(page);
    //     }

    // }
    //====================================add pin code===================================//
    // const [showcity, setShowCity] = useState(false);
    // const [cityData, setCityData] = useState({
    //     name: ""
    // });
    // const [pin, setPin] = useState({
    //     code: ""
    // });

    // const [error, setError] = useState({})

    // const handleCloseCity = () => setShowCity(false);

    // const handleShowCity = async (e, item) => {
    //     setShowCity(true);
    //     console.warn("dataataaa", item)
    //     await setCityData(item)
    // }
    // const onInputChangePin = async (e) => {
    //     console.warn("onInputChangePin", e.target.value.length)
    //     if (e.target.value.length == 6) {
    //         await setPin({ code: e.target.value })
    //         setError({})
    //     } else {
    //         setError({ pin: "invalid pin" })
    //     }
    // }
    // const onSubmitPin = async (e) => {
    //     let data = {
    //         cityid: cityData.id,
    //         name : pin.code
    //     }

    //     const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-pin`, data);
    //     if (res.data.code == 200) {
    //         toast(res.data.message)
    //         handleCloseCity()
    //         loadcities(page);
    //     } else {
    //         toast(res.data.message)
    //         handleCloseCity()
    //         loadcities(page);
    //     }
    // }


    return (
        <div class="btn-right">
            <Link className="btn btn-primary btn-home" to="/dashboard">
                back to Home
       </Link>
            {/* <Button variant="primary btn-link" onClick={handleShow}>
                add city
      </Button> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Type</th>
                        <th>Title</th>
                        {/* <th class="status">Status</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) => <tr>
                            <td>{i + 1}</td>
                            <td>{item.type ? item.type : null}</td>
                            <td>{item.title ? item.title : null}</td>
                            {/* <td><select class="form-control" name="status" value={item.status}
                                onChange={e => onInputChange(e, item)}>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option> */}
                                {/* <option value="blocked">Block</option> */}
                            {/* </select></td> */}
                            <td>
                                <Link className="btn btn-primary mr-2 " to={`/cms/edit/${item._id}`}>edit </Link>
                                {/* <Button className="btn btn-primary mr-2 " onClick={e => handleShow(e, item)}>
                                    delete
                                </Button> */}
                                {/* <Link className="btn btn-primary mr-2" to={`/wallet/customer/${item._id}`}> delete </Link> */}
                                <Button className="btn btn-primary " onClick={e => itemDelete(e, item)}> Delete</Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add City</Modal.Title>
                </Modal.Header>
                <div class="row">
                    <div class="popupselect">
                        <div class="form-group col-sm-6">
                            <div class="state-name">
                                <label>State Name</label>
                                <select class="form-control" name="regionName" onChange={e => onInputChangeRegion(e)} value={regionName}>
                                    {
                                        region.map((item, i) =>
                                            <option value={item.isoCode} >{item.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div class="form-group col-sm-6">
                            <div class="city">
                                <label>City Name</label>
                                <select class="form-control" name="cityName" onChange={e => onInputChangeCity(e)} value={cityName}>
                                    {
                                        cityArray.map((item, i) =>
                                            <option value={item.name} >{item.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={e => onSubmit(e)}>
                        Submit
          </Button>
                </Modal.Footer>
            </Modal> */}
            {/* <Modal show={showcity} onHide={handleCloseCity}>
                <Modal.Header closeButton>
                    <Modal.Title>{cityData.name}</Modal.Title>
                </Modal.Header>
                <div class="row">
                    <div class="state-name-code">
                        <label>Pincode</label>
                        <input  type="text" name="code"
                            class="form-control" placeholder=""
                            onChange={e => onInputChangePin(e)} />
                        <div className="text-danger">{error.pin}</div>
                    </div>
                </div>
                <div class ='footer-side'>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCity}>
                        Close
          </Button>
                    <Button variant="primary" onClick={e => onSubmitPin(e)}>
                        Submit
          </Button>
                </Modal.Footer>
                </div>
                
            </Modal> */}
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

export default Cms
