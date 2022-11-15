import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container style={{ 'position': 'fixed', marginTop: '15%', marginLeft:'5em' }} className="bg-light text-black text-center mt-2 fixed-bottom">
            <Row>
                <Col md={12}>
                    <pre>Created by Muftia Ryskina</pre>
                </Col>
            </Row>
        </Container>
    )
}