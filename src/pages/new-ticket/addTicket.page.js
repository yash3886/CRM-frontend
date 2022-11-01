import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../Components/breadcrumb/breadcrumb.comp";
import { AddTicketForm } from "../../Components/add-ticket-form/addTicketForm.comp";
import { shortText } from "../../utils/validation";

const initialFrmDt = {
    subject: "",
    issuedate: "",
    detail: "",
};

const initialFrmError = {
    subject: false,
    issuedate: false,
    detail: false,
};
export const AddTicket = () => {

    const [frmData, setfrmData] = useState(initialFrmDt);
    const [frmDataError, setfrmDataError] = useState(initialFrmError);
    useEffect(() => {}, [frmData, frmDataError])
    
    const handleOnChange = (e) => {
        const {name, value} = e.target;


        setfrmData({
            ...frmData, 
            [name]:value,
        });
    };

    const handleOnSubmit = async(e) => {
        e.preventDefault();

        setfrmDataError(initialFrmError);
        const isSubjectValid = await shortText(frmData.subject);

        setfrmDataError({
            ...initialFrmError,
            subject: !isSubjectValid,
        })
        console.log('Form submit request received');
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
                frmDataError={frmDataError}
                />
                </Col>
            </Row>
        </Container>
    )
}
