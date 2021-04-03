const { Container, Row, Col } = require("react-bootstrap")




const Footer = () => {
    return (<footer className="mt-4 bg-warning pt-4 pb-4">
        <Container>
            <Row>
                <Col>
                    About Us
                </Col>

                <Col className = "text-right">
                    Contact Us
                </Col>
            </Row>
        </Container>


    </footer>);
}

export default Footer;