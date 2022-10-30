import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../Components/Breadcrumb/breadcrumb.comp";
import { AddTicketForm } from "../../Components/add-ticket-form/AddTicketForm.comp";

const initialFrmDt = {
    subject: "",
    issueDate: null,
    detail: "",
};
export const AddTicket = () => {

    const [frmData, setfrmData] = useState(initialFrmDt);
    const handleOnChange = (e) => {
        const {name, value} = e.target;

        // useEffect(() => {
        //     effect 
        //     return () => {
        //         cleanup
        //     }
        // }, [input])

        setfrmData({
            ...initialFrmDt, 
            [name]:value

        })
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log('Form submit request recieved');
    }

    return (
        <Container>
            <br></br>
            <Row>
                <Col>
                <PageBreadcrumb page = "New Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                <AddTicketForm 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                frmDt = {frmData}
                />
                </Col>
            </Row>
        </Container>
    )
}