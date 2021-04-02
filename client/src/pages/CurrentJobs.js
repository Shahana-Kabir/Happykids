
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

import axios from 'axios';
import JobCard from '../components/JobCard';
import { useEffect, useState } from 'react';

const CurrentJobs = (props) => {

  const [jobs, setJobs] = useState([]);

  useEffect(async () => {
    const response = await axios.get('http://localhost:8080/jobs/');
    setJobs(response.data);
  });

  return (
    <Container>

      <Row>
        <Col>
          <h1>
            Available Jobs
          </h1>
        </Col>

      </Row>          
      
      <Row>

        {jobs.map(job => <Col className="mb-4" md="6" lg="3"> <JobCard {...job} loggedIn={props.loggedIn} /> </Col>)}

      </Row>
    </Container>
  );
}

export default CurrentJobs;