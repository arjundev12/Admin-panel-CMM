import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from "axios";
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import { Button, Table, Modal } from 'react-bootstrap'
import '../../css/style.css'
import image from '../../assets/download.png'
const TrainingVideo = ({ match }) => {
    let history = useHistory();
    // const user = usersData.find( user => user.id.toString() === match.params.id)
    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        _id: "",
        isDocumentVerify: ""
    });
    const { id } = useParams();
    const [showPerPage, setShowPerPage] = useState(10);
    const [index, setIndex] = useState(1);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    useEffect(() => {
        // console.warn("params", match.params.id)
        getdata(page)
    }, [page, total]);
    const getdata = async () => {

        const data = {
            offset: page,
            limit: 10
        }
        console.log("requset0", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-Videos`, data);
        console.warn("responseviewDoc", res.data)
        if (res.data.code != 200) {
            toast("Somethig went wrong");
            console.warn(res.data)
        } else {
            toast("Get successfully");
            await setData(res.data.data.docs);
            //   await setStatus(res.data.data.owner)
            console.warn("set stattatatat", status)

        }
    }
    //====================================add pin code===================================//
    const [show, setShow] = useState(false);
    const [cityData, setCityData] = useState({
        name: ""
    });
    const [videoData, setVideoData] = useState({
        path: "",
        title: ""
    });

    // const [error, setError] = useState({})

    const handleCloseCity = () => setShow(false);

    const handleShow = async (e) => {
        setShow(true);
    }
    const onInputChange1 = async (e) => {
        await setVideoData({ ...videoData, [e.target.name]: e.target.value })

    }
    const onSubmitVideo = async (e) => {
        
        let response = await axios.post(`${CONSTANT.baseUrl}/api/admin/embed-video-upload`, videoData);
        if (response.data.code == 200) {
            toast(response.data.message)
            getdata(page)
        } else {
            toast("somthing went wrong")
        }
    }

    const onInputChange = async (e, item) => {
        console.warn("oninput change data ",e.target.value, item)
        let data = {}
        if (e.target.name == 'status') {
            data.status = e.target.value
        }

        data._id = item._id
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-video`, data);
        if (response.data.code == 200) {
            toast(response.data.message)
            getdata(page)
            // loadcities(page)
        } else {
            toast("somthing went wrong")
        }
    }
    //   const onSubmit = async e => {
    //     e.preventDefault();
    //     console.warn("onsubmit", e)
    //     let data = {}
    //     if (status.isDocumentVerify) {
    //       data.isDocumentVerify = status.isDocumentVerify
    //     }
    //     data._id = status._id
    //     console.log("daaaaaaa", data)
    //     let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-driver`, data);
    //     if (response.data.code == 200) {
    //       toast("Update successfully");
    //       history.push(`/user/${user.owner._id}`);
    //     }
    //     else {
    //       toast("Somthing went wrong");
    //       console.warn(response)
    //     }
    //   }
    //   const onInputChange = async e => {
    //     console.warn("oninput change data before ", status)
    //     await setStatus({
    //       _id: status._id,
    //       isDocumentVerify: e.target.value
    //     });
    //     console.warn("oninput change data after ", status)
    //   };

    return (
        <div>
            {/* <!DOCTYPE html> */}
            <html lang="en">
                <div class="upload-video"> <Button className="btn btn-primary btn-prim" onClick={e => handleShow(e)}>Uploade Video</Button></div>

                <body>

                    <div class="home-doctors  clearfix">

                        <div class="container">

                            <div class="row">
                                {
                                    data.map((item) => <div class="col-lg-3 col-md-3 col-sm-6  text-center doc-item">
                                        <div class="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">
                                            <div className='video-container'>
                                                <iframe width='300' height='300' src={item.type == 'local' ? CONSTANT.img_url + item.video : item.video}></iframe>
                                                
                                            </div>
                                            <div class="text-content">
                                                <h5>Title : {item.title}</h5>
                                                <select class="form-control" name="status" value={item.status}
                                                    onChange={e => onInputChange(e, item)}>
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                    {/* <option value="blocked">Block</option> */}
                                                </select>
                                            </div>
                                        </div>
                                    </div>)
                                }
                                <div class="visible-sm clearfix margin-gap">
                                </div>
                                <div>
                                    <Modal show={show} onHide={handleCloseCity}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{cityData.name}</Modal.Title>
                                        </Modal.Header>
                                        <div class="row">
                                            <div class="state-name-code">
                                                <label>Embed Url</label>
                                                <input type="text" name="path"
                                                    class="form-control" placeholder=""
                                                    onChange={e => onInputChange1(e)} />
                                                {/* <div className="text-danger">{error.pin}</div> */}
                                            </div>
                                            <div class="state-name-code">
                                                <label>Title</label>
                                                <input type="text" name="title"
                                                    class="form-control" placeholder=""
                                                    onChange={e => onInputChange1(e)} />
                                                {/* <div className="text-danger">{error.pin}</div> */}
                                            </div>
                                        </div>
                                        <div class='footer-side'>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleCloseCity}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" onClick={e => onSubmitVideo(e)}>
                                                    Submit
                                                </Button>
                                            </Modal.Footer>
                                        </div>

                                    </Modal>
                                </div>

                            </div>

                        </div>
                    </div>

                </body>
                <div>

                </div>
                {/* <Button className="btn btn-primary" value= "true">Current Status</Button>
        <Button className="btn btn-primary" value= "verify">Verify</Button>
        <Button className="btn btn-primary" value= "reject">Reject</Button>
        <Button className="btn btn-primary" value= "pending">Pending</Button> */}
            </html>
            <ToastContainer />
        </div>
    )
}

export default TrainingVideo
