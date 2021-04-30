import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from "axios";
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import usersData from './UsersData'
import *as  CONSTANT from '../../constant'
import '../../css/style.css'
const User = ({ match }) => {
  // const user = usersData.find( user => user.id.toString() === match.params.id)
  const [user, setUser] = useState({
    id: "",
    name: "",
    loginType: "",
    address: "",
    phoneNo: ""
  });

  useEffect(() => {
    console.warn("params", match.params.id)
    getdata(match.params.id)
  }, []);
  const getdata = async (id) => {
    console.log("process.env.NODE_ENV", process.env.NODE_ENV)
    const res = await axios.get(`${CONSTANT.baseUrl}/api/admin/view-driver?_id=${id}`);
    console.warn("response", res.data)
    if (res.data.code != 200) {
      // toast("Somethig went wrong");
    } else {
      // toast("Get successfully");
      setUser(res.data.data);
    }
  }
  return (
    <>
      {/* <!DOCTYPE html> */}
      <html lang="en">

        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --> */}
          <title></title>

          {/* <!-- Bootstrap --> */}
          <link href="css/style.css" rel="stylesheet" />
          <link href="css/animate.css" rel="stylesheet" />
          <link href="css/bootstrap.min.css" rel="stylesheet" />
          <link href="css/owl.carousel.min.css" rel="stylesheet" />

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:200,300,400,500,600,700,800,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Electrolize" rel="stylesheet" />
        </head>

        <body>
          <section>
            <div class="DetailsArea">
              <div class="container">
                <div class="row">
                  <div class="col-sm-3 DetailsLeft">
                    <div class="DetailsLeftProfile">
                      <figure>
                        <img src="assets/icons/download.png" />
                      </figure>
                      <h3> {user.name} </h3>
                      <p> {user.loginType}</p>

                      <ul>
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>

                    </div>
                  </div>

                  <div class="col-sm-9">
                    <div class="DetailsRight">
                      <h3>Information</h3>

                      {/* <p>With a knack for connecting dots and uncovering trends, Lisa finds unique opportunities for brands to reach consumers in new ways that inspire and motivate them to act. Lisa has more than 15 years of agency and client-side experience translating business strategy into integra ted, multi-channel marketing communications campaigns for some of the world’s most beloved brands.</p> */}
                      <div class="DetailsContent">
                        <div class="row">
                          <div class="col-sm-6">
                            <ul>
                              <li>
                                <span class="Title">Company Name</span>
                                <span class="Discribe">Call My Moover</span>
                              </li>

                              <li>
                                <span class="Title">City</span>
                                <span class="Discribe">{user.city}</span>
                              </li>

                              <li>
                                <span class="Title">Name </span>
                                <span class="Discribe">Mr.{user.name}</span>
                              </li>

                              <li>
                                <span class="Title">Mobile No</span>
                                <span class="Discribe">{user.phoneNo}</span>
                              </li>

                              <li>
                                <span class="Title">Login Type</span>
                                <span class="Discribe">{user.loginType}</span>
                              </li>

                              <li>
                                <span class="Title">Profile Completed</span>
                                <span class="Discribe">{user.isProfileCompleted + ""}</span>
                              </li>
                              <li>
                                <span class="Title">Document Verification </span>
                                <span class="Discribe">{user.isDocumentVerify + ""}</span>
                              </li>
                            </ul>
                          </div>

                          <div class="col-sm-6">
                            <ul>

                              <li>
                                <span class="Title">Address </span>
                                <span class="Discribe">{user.address}, pin {user.pincode}</span>
                              </li>

                              <li>
                                <span class="Title">Own Vehicle </span>
                                <span class="Discribe">{user.is_owner_vehicle}</span>
                              </li>

                              <li>
                                <span class="Title">subscription </span>
                                <span class="Discribe">{user.subscription + ""}</span>
                              </li>

                              <li>
                                <span class="Title">Website </span>
                                <span class="Discribe">www.kumarpankaj.com</span>
                              </li>
                              <li>
                                <span class="Title">vehicle List </span>
                                <Link className="btn btn-primary" to="/">Go to list</Link>
                              </li>


                              <li>
                                <span class="Title">Rating </span>
                                <span class="Discribe">
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                  <i class="fa fa-star-o" aria-hidden="true"></i>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>




                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>



          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js "></script>
          <script src="js/bootstrap.min.js "></script>
          <script src="js/owl.carousel.js "></script>

        </body>
      </html>
    </>
  )
  // return (
  //   <div className="container py-4">
  //     <Link className="btn btn-primary" to="/">
  //       back to Home
  //   </Link>
  //   <Link className="btn btn-primary mr-2" to={`/user/edit/${user._id}`}> edit </Link>
  //     <h4 className="display-4">Name: {user.name}</h4>
  //     {/* <h2 className="display-4">Name: {user.name}</h2> */}
  //     <hr />
  //     <ul className="list-group w-50">
  //       <li className="list-group-item">Id: {user._id}</li>
  //       <li className="list-group-item">Name: {user.name}</li>
  //       {/* <li className="list-group-item">Username: {user.username}</li> */}
  //       <li className="list-group-item">Number: {user.phoneNo}</li>
  //       <li className="list-group-item">Type: {user.loginType + ""}</li>
  //       <li className="list-group-item">Address: {user.address}</li>
  //       {/* <li className="list-group-item">Team: {user.team.length > 0 ?
  //         user.team.map((item) => <li className="list-group-item">Name: {item.name} || Status : {item.status}</li>) : 0}</li> */}

  //     </ul>
  //     {/* <ToastContainer /> */}
  //   </div>
  // )
}

export default User
