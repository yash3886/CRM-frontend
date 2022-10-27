import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({handleOnChange, handleOnResetSubmit,Formswitcher, email}) =>{
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Reset Password</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <br />
                    <Button type="submit">Reset</Button>
                </Form>
                <hr></hr>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="#!" onClick={()=>Formswitcher('login')}>Login Now</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPassword.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    Formswitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}