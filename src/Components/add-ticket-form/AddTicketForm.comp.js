import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types';
import "./add-ticket-form.style.css";


export const AddTicketForm = ({handleOnChange, handleOnSubmit, frmDt, frmDataError}) => {
  console.log(frmDt);  
  return (
        <div className="mt-3 add-new-ticket">
        <div className="p-5 mb-5 bg-light rounded-2">
            <h1 className="text-center text-info">Add New Ticket</h1>
            <hr />
            <br />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Subject</Form.Label>
                        <Col sm={9}>
                        <Form.Control 
                            type="text"
                            name="subject"
                            value={frmDt.subject}
                            // minLength="3"
                            maxLength={100}
                            onChange={handleOnChange}
                            placeholder="Subject"
                            required
                        /></Col>
                        <Form.Text className="text-danger">
                            {frmDataError.subject && "Subject is required!"}
                        </Form.Text>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Issue Found</Form.Label>
                        <Col sm={9}>
                        <Form.Control 
                            type="date"
                            name="issuedate"
                            value={frmDt.issuedate}
                            onChange={handleOnChange}
                            required
                        />
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Details</Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows={5}
                            name="detail"
                            value={frmDt.detail}
                            onChange={handleOnChange}
                            placeholder="Write here.."
                            required
                        />
                    </Form.Group>
                    <br />
                    <div className="col-md-12 text-center">
                        <Button type="submit" variant="info">Login</Button>
                    </div>
                </Form>
                </div>
        </div>
    )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired, 
    frmDataError: PropTypes.object.isRequired,
    frmDt: PropTypes.object.isRequired,
}
