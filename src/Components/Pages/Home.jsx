import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        console.log("Hello Bro");
        LoadUers();
    }, []);

    const LoadUers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data);
        //console.log( result );
    }
    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col>
                        Home Page
                        <Table striped bordered hover>
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
                                            <td>{ index + 1 }</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <Link className="btn btn-primary">View</Link>
                                                <Link className="btn btn-outline-primary">Edit</Link>
                                                <Link className="btn btn-danger">Delete</Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;