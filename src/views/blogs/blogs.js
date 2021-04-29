import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import *as  CONSTANT  from '../../constant'


const Blogs = () => {
  const history = useHistory()
  const [user, setUser] = useState([{
    id:"",
    name: "",
    user_type: "",
    minner_Activity: "",
}]);
const { id } = useParams();
useEffect(() => {
    loadUser();

}, []);
const loadUser = async () => {
    let array = []
    const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-blogs`);
    console.warn(res.data.data)
    for (let item of res.data.data.docs) {
        if (item.title) {
            array.push(item)
        }
    }
    setUser(array);
};

  return (
    <div>
        <Link className="btn btn-primary" to="/">
            back to Home
       </Link>
       <Link className="btn btn-primary" to="/add/blogs">
            add Blogs
       </Link>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Created by</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item, i) => <tr>
                        <td>{i+1}</td>
                        <td>{item.title}</td>
                        <td>{item.content}</td>
                        <td>{item.created_by+""}</td>
                    </tr>)
                }
            </tbody>
        </Table>
        {/* <Button variant="primary">Primary</Button> */}
    </div>
)
}

export default Blogs
