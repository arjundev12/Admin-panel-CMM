import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import '../../css/style.css'
const ViewWallet = ({ match }) => {
    const [wallet, setWallet] = useState({});
    const { id, type } = useParams();
    useEffect(() => {
        getWallet()
    }, []);
    const getWallet = async () => {
        const res = await axios.get(`${CONSTANT.baseUrl}/api/admin/view-wallet?_id=${id}&type=${type}`);
        console.warn("response", res.data)
        if (res.data.code != 200) {
            toast("Somethig went wrong");
            console.warn(res.data)
        } else {
            // toast("Get successfully");
            setWallet(res.data.data);
        }
    }
    return (
        <>
            {/* <!DOCTYPE html> */}
            <html lang="en">
                <body>
                    <section>
                        <div class="DetailsArea">
                            <div class="container">
                                <div class="row">
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
                                                                <span class="Title">Wallet Holder Name</span>
                                                                <span class="Discribe">{wallet.name}</span>
                                                            </li>

                                                            <li>
                                                                <span class="Title">Total Amount</span>
                                                                <span class="Discribe">{wallet.total_amount}</span>
                                                            </li>

                                                            <li>
                                                                <span class="Title">Referral Ammount </span>
                                                                <span class="Discribe">{wallet.referral_ammount}</span>
                                                            </li>
                                                            <li>
                                                                <span class="Title">Earning Ammount </span>
                                                                <span class="Discribe">{wallet.earning_ammount}</span>
                                                            </li>
                                                            <li>
                                                                <span class="Title">Wallet Type</span>
                                                                <span class="Discribe">{wallet.wallet_type}</span>
                                                            </li>

                                                            <li>
                                                                <span class="Title">Status</span>
                                                                <span class="Discribe">{wallet.status}</span>
                                                            </li>

                                                            <li>
                                                                <span class="Title">Created</span>
                                                                <span class="Discribe">{wallet.createdAt}</span>
                                                            </li>
                                                            <li>
                                                                <span class="Title">Created</span>
                                                                <span class="Discribe">{wallet.createdAt}</span>
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
                <ToastContainer />
            </html>
        </>
    )

}

export default ViewWallet
