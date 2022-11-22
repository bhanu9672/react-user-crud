import React, { useState, useEffect } from "react";
import {
    Col,
    Container,
    Row,
    Alert,
    Card,
    Button
} from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const View = () => {

    const [users, setUser] = useState([]);


    // 👇️ get ID from url
    const params = useParams();

    console.log(params.userId);

    const LoadUers = async () => {
        const result = await axios.get(`https://6372260507858778618be42c.mockapi.io/react-user-crud_users/${params.userId}`);
        setUser(result.data);
        //console.log( result );
    }

    useEffect(() => {
        LoadUers();
    }, []);

    console.log(users)
    const { name, id, username, email,city,phone,company,website } = users;

    return (
        <div>
            <Container className="my-5">
                <Row className="justify-content-md-center">
                    <Col lg="12">
                        <h3>View User Page</h3>
                    </Col>
                    <Col lg="6">
                        {
                            users != null ?
                                <>
                                    <Card className="text-center">
                                        <Card.Header><Card.Title>User Info Page</Card.Title></Card.Header>
                                        <Card.Body>
                                            <Card.Text>User ID : {id}</Card.Text>
                                            <Card.Text>Name : {name}</Card.Text>
                                            <Card.Text>User Name : {username}</Card.Text>
                                            <Card.Text>Email : {email}</Card.Text>
                                            <Card.Text>City : {city}</Card.Text>
                                            <Card.Text>Phone : {phone}</Card.Text>
                                            <Card.Text>Company : {company}</Card.Text>
                                            <Card.Text>Site : {website}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">
                                            <Link to='/'><Button variant="primary">Back To Home</Button></Link>
                                        </Card.Footer>
                                    </Card>
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
        </div>
    )
}

export default View
