const { Container, Row, Col } = require("react-bootstrap")




const Footer = () => {
    return (<footer className="mt-4 bg-warning pt-4 pb-4 pr-4 pl-4 text-secondary">
        <Container>
            <Row className = "justify-content-md-center pt-4">
                HAPPY KIDS, 5th STREET SUITE 410 OAKSVALLEY, BC 91360, PHONE: (818) 668-5058  
            </Row>

            <Row className = "pt-4 pb-4 text-center">
                <Col>
                © 2021 HAPPY KIDS. ALL RIGHTS RESERVED. 
                </Col>
            </Row>

        </Container>


    </footer>);
}

export default Footer;