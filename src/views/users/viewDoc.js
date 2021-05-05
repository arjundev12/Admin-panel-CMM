import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from "axios";
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usersData from './UsersData'
import *as  CONSTANT from '../../constant'
import { Button, Table } from 'react-bootstrap'
import '../../css/style.css'
import image from '../../assets/download.png'
const ViewDoc = ({ match }) => {
  let history = useHistory();
  // const user = usersData.find( user => user.id.toString() === match.params.id)
  const [user, setUser] = useState({
    identity_card: {},
    driving_licence: {},
    registration_certificate: {},
    owner: {}

  });
  const [status, setStatus] = useState({
    _id: "",
    isDocumentVerify: ""
  });
  const { id } = useParams();
  useEffect(() => {
    // console.warn("params", match.params.id)
    getdata()
  }, []);
  const getdata = async () => {

    const res = await axios.get(`${CONSTANT.baseUrl}/api/admin/view-doc?_id=${id}`);
    console.warn("responseviewDoc", res.data)
    if (res.data.code != 200) {
      toast("Somethig went wrong");
      console.warn(res.data)
    } else {
      toast("Get successfully");
      await setUser(res.data.data);
      await setStatus(res.data.data.owner)
      console.warn("set stattatatat", status)

    }
  }
  const onSubmit = async e => {
    e.preventDefault();
    console.warn("onsubmit", e)
    let data = {}
    if (status.isDocumentVerify) {
      data.isDocumentVerify = status.isDocumentVerify
    }
    data._id = status._id
    console.log("daaaaaaa", data)
    let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-driver`, data);
    // console.log("daaaaaaa", response)
    // history.push(`/user/${user.owner._id}`);
      // setTimeout(function () { history.push("/users"); }, 50000);

    if (response.data.code == 200) {
      toast("Update successfully");
      history.push(`/user/${user.owner._id}`);
    }
    else {
      toast("Somthing went wrong");
      console.warn(response)
    }
  }
  const onInputChange = async e => {
    console.warn("oninput change data before ", status)
    await setStatus({
      _id: status._id,
      isDocumentVerify: e.target.value
    });
    console.warn("oninput change data after ", status)
  };

  return (
    <>
      {/* <!DOCTYPE html> */}
      <html lang="en">

        <body>
          <div class="hh"> <Link className="btn btn-primary" to={`/user/${user.owner._id}`}>back</Link></div>

          <div class="home-doctors  clearfix">

            <div class="container">

              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6  text-center doc-item">
                  <div class="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">

                    <figure>
                      <img width="670" height="300" src={user.identity_card ? CONSTANT.img_url + user.identity_card.front_Id : null} class="doc-img animate attachment-gallery-post-single wp-post-image" alt="doctor-2" />
                    </figure>

                    <div class="text-content">
                      <h5>Identity Card</h5>
                      <h5><small>Front Id</small></h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6  text-center doc-item">
                  <div class="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">

                    <figure>
                      <img width="670" height="300" src={user.identity_card ? CONSTANT.img_url + user.identity_card.back_Id : null} class="doc-img animate attachment-gallery-post-single wp-post-image" alt="doctor-2" />
                    </figure>

                    <div class="text-content">
                      <h5>Identity Card</h5>
                      <h5><small>Back Id</small></h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6  text-center doc-item">
                  <div class="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">

                    <figure>
                      <img width="670" height="300" src={user.driving_licence ? CONSTANT.img_url + user.driving_licence.front_Id : null} class="doc-img animate attachment-gallery-post-single wp-post-image" alt="doctor-2" />
                    </figure>

                    <div class="text-content">
                      <h5>Driving Licence</h5>
                      <h5><small>Front Id</small></h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6  text-center doc-item">
                  <div class="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">

                    <figure>
                      <img width="670" height="300" src={user.driving_licence ? CONSTANT.img_url + user.driving_licence.back_Id : null} class="doc-img animate attachment-gallery-post-single wp-post-image" alt="doctor-2" />
                    </figure>

                    <div class="text-content">
                      <h5>Driving Licence</h5>
                      <h5><small>Back Id</small></h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6  text-center doc-item">
                  <div class="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">

                    <figure>
                      <img width="670" height="300" src={user.registration_certificate ? CONSTANT.img_url + user.registration_certificate.front_Id : null} class="doc-img animate attachment-gallery-post-single wp-post-image" alt="doctor-2" />
                    </figure>

                    <div class="text-content">
                      <h5>Registration Certificate</h5>
                      <h5><small>Front Id</small></h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6  text-center doc-item">
                  <div class="common-doctor animated fadeInUp clearfix ae-animation-fadeInUp">
                    <figure>
                      <img width="670" height="300" src={user.registration_certificate ? CONSTANT.img_url + user.registration_certificate.back_Id : null} class="doc-img animate attachment-gallery-post-single wp-post-image" alt="doctor-2" />
                    </figure>

                    <div class="text-content">
                      <h5>Registration Certificate</h5>
                      <h5><small>Back Id</small></h5>
                    </div>
                  </div>
                </div>
                <div class="visible-sm clearfix margin-gap">
                </div>
              </div>
            </div>
          </div>
          <form  >
            <div class="form-group col-sm-6">
              <label>Status</label>
              <select class="form-control" name="isDocumentVerify" value={status.isDocumentVerify} onChange={e => onInputChange(e)}
              >
                <option value="notupload">notupload</option>
                <option value="uploade">uploade</option>
                <option value="verified">verified</option>
                <option value="rejected">rejected</option>

              </select>
                <button class ="btn-sumbit" onClick={e=> onSubmit(e)}>Submit</button>
            </div>
          </form>
        </body>
        {/* <Button className="btn btn-primary" value= "true">Current Status</Button>
        <Button className="btn btn-primary" value= "verify">Verify</Button>
        <Button className="btn btn-primary" value= "reject">Reject</Button>
        <Button className="btn btn-primary" value= "pending">Pending</Button> */}
      </html>
      <ToastContainer />
    </>
  )
}

export default ViewDoc
