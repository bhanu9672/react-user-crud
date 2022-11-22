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

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        LoadUers();
    }, []);

    const LoadUers = async () => {
        const result = await axios.get(`https://6372260507858778618be42c.mockapi.io/react-user-crud_users/`);
        setUser(result.data);
        //console.log( result );
    }
    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col>
                        <h3>Home Page</h3>
                        {
                            users.length > 0 ?
                                <>
                                    <Table striped bordered hover className="my-5 text-center">
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
                                                    <tr key={user.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.username}</td>
                                                        <td>{user.email}</td>
                                                        <td>
                                                            {/* 👇️ link to dynamic path */}
                                                            <Link className="btn btn-primary mx-3" to={`/view/${user.id}`}>View</Link>
                                                            <Link className="btn btn-outline-primary mx-3">Edit</Link>
                                                            <Link className="btn btn-danger mx-3">Delete</Link>
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

export default Home;