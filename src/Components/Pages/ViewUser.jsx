import React, { useState, useEffect } from "react";
import {
    Col,
    Container,
    Row,
    Table,
    Alert
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewUser = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        LoadUers();
    }, []);

    const LoadUers = async () => {
        const result = await axios.get(`http://localhost:3003/users/`);
        setUser(result.data);
        //console.log( result );
    }
    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col>
                        <h3>View User Page</h3>
                        {
                            users.length > 0 ?
                                <>
                                    <Table striped bordered hover className="my-5">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>User Name</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map((user, index) => (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.username}</td>
                                                        <td>{user.email}</td>
                                                        <td>
                                                            <Link className="btn btn-primary" to={`/user:${user.id}`}>View</Link>
                                                            <Link className="btn btn-outline-primary">Edit</Link>
                                                            <Link className="btn btn-danger">Delete</Link>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                                </>
                                :
                                <>
                                    <Alert variant='info' className="my-5">
                                        No User Find
                                    </Alert>
                                </>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ViewUser
