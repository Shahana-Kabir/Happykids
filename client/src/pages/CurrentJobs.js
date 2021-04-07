
import { Container, Row, Col } from 'react-bootstrap';

import axios from 'axios';
import JobCard from '../components/JobCard';
import { useEffect, useState } from 'react';

const CurrentJobs = (props) => {

  const [jobs, setJobs] = useState([]);
  const [jobsLoaded, setJobsLoaded] = useState(false);

  useEffect(async () => {
    if(!jobsLoaded){
      const response = await axios.get('http://localhost:8080/jobs/');
      setJobs(response.data);
      setJobsLoaded(true);
    }
  
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

        {jobs.map(job => <Col key = {job.id} className="mb-4" xs="12"> <JobCard onChange={() => setJobsLoaded(false)} {...job} loggedIn={props.loggedIn} /> </Col>)}

      </Row>
    </Container>
  );
}

export default CurrentJobs;